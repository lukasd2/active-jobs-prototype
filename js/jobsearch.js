window.onload = () => {
    console.log("page-loaded");
    initAppHandlers();
    getDataFromLocalStorage();
};

const initAppHandlers = () => {
    const menuHamburgerBtn = document.querySelector(".btn-hamburger");
    menuHamburgerBtn.addEventListener(
        "click",
        () => {
            document.querySelector(".page-header").classList.toggle("nav-open");
            document
                .querySelector(".btn-hamburger ")
                .classList.toggle("is-active");
        },
        false
    );

    const searchForm = document.querySelector(".search-form");
    searchForm.addEventListener("submit", searchResult);

    const jobListingsContainer = document.querySelector(".job-listings");
    jobListingsContainer.addEventListener("click", showJobDetails);

    const closeModal = openModal.querySelector(".delete");
    closeModal.addEventListener("click", () => {
        openModal.classList.remove("is-active");
        openModal.classList.remove("is-clipped");
    });
};

function searchResult(ev) {
    ev.preventDefault();
    const jobName = this.querySelector("[name=jobname]").value;
    const locationName = this.querySelector("[name=location]").value;

    const search = {
        jobName,
        locationName,
    };

    localStorage.setItem("search", JSON.stringify(search));
    location.href = "jobsearch.html";
}

function showJobDetails(ev) {
    const jobListingsContainer = document.querySelector(".job-listings");
    let target = ev.target;
    console.log(target);
    if (target.classList.contains("job-listing__favorite")) {
        // target on favorites icon
        target.classList.toggle("is-red");
    } else if (jobListingsContainer.contains(target)) {
        // target of job card
        console.log("success");
        if (checkResultion() <= 768) {
            const openModal = document.getElementById("openModal");
            openModal.classList.add("is-active");
            openModal.classList.add("is-clipped");
        } else {
            const jobListingsContainer = document.querySelector(
                ".work-preview"
            );
            jobListingsContainer.innerHTML = "";
            jobListingsContainer.innerHTML = jobsList;
        }
    }
}

function checkResultion() {
    const width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
    const height =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;

    console.log(width, height);
    return width;
}

const getDataFromLocalStorage = () => {
    const { jobName, locationName } = getSearchInputReferences();
    const searchData = JSON.parse(localStorage.getItem("search"));
    if (searchData) {
        jobName.value = searchData.jobName;
        locationName.value = searchData.locationName;
    }
};

function getSearchInputReferences() {
    const jobName = document.querySelector("[name=jobname]");
    const locationName = document.querySelector("[name=location]");
    return { jobName, locationName };
}
const jobsList = `
<article class="job-details">
<header class="job-header">
    <h3 class="job-details__title">System Administrator</h3>
</header>
<main class="job-detais-info">
    <article class="info__main">
        <p class="info__location">Pisa, Toscana</p>
        <div class="job-company-info">
            <img
                class="job-company-info__logo"
                src="images/logoProntoLavoro.svg"
                alt="company logo"
                width="50px"
                height="50px"
            />
            <p class="job-listing__company">Hyperborea</p>
        </div>
    </article>
    <article class="info__description">
        <p>
            La figura che cerchiamo avrà il compito di
            predisporre e manutenere l’infrastruttura fisica
            e virtuale di Hyperborea allo scopo di
            permettere agli sviluppatori e gli altri
            dipendenti della nostra azienda di svolgere il
            proprio lavoro. In aggiunta dovrà supportare i
            team di sviluppo nel dispiegamento e
            manutenzione dei prodotti Arianna e docLife in
            modalità “on premise”.
        </p>
        <h3>Responsabilità del Sistemista</h3>
        <ol>
            <li>
                si occupa di mantenere l’infrastruttura
                locale: routing, firewall, cluster di server
                fisici, connettività verso l’esterno;
            </li>
            <li>
                amministra il cluster di server mediante
                sistema di virtualizzazione VMWare;
            </li>
            <li>
                amministra i server virtuali Linux di
                sviluppo e produzione;
            </li>
            <li>
                amministra i servizi e gli account in
                utilizzo (suite Microsoft, suite Google,
                suite Jira…);
            </li>
            <li>
                predispone l’hardware installando il sistema
                operativo e tutti i componenti software
                necessari all’operatività degli utenti;
            </li>
            <li>
                mantiene la documentazione
                dell’infrastruttura locale e della
                risoluzione dei problemi;
            </li>
            <li>
                supporta gli utenti in caso di problemi di
                natura hardware o software
            </li>
        </ol>
        <h3>Competenze Richieste (Requirements)</h3>
        <ol>
            <li>
                laurea di primo livello in informatica o
                ingegneria informatica, con una buona
                capacità di relazione con i colleghi ed i
                clienti ed in grado di lavorare
                autonomamente. In alternativa è accettabile
                l’assenza di titolo a fronte di
                un’esperienza nel ruolo di Sistemista non
                inferiore ai 3 anni:
            </li>
            <li>
                ottime capacità di amministrazione su
                sistemi operativi server Windows e Linux;
            </li>
            <li>
                ottima conoscenza di aspetti prettamente
                sistemistici: reti di calcolatori, firewall,
                VPN, web server, certificati e protocolli
                sicuri, etc.
            </li>
            <li>
                buona conoscenza di linguaggi di scripting
                come Ruby, Python, Bash;
            </li>
            <li>conoscenza della lingua inglese.</li>
        </ol>
        <button class="btn-apply button is-outlined">Candidati</button>
    </article>
</main>
</article>`;
