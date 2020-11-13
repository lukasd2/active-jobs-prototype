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
    if (jobListingsContainer.contains(target)) {
        console.log("success");
        if (checkResultion() <= 768) {
            const openModal = document.getElementById("openModal");
            openModal.classList.add("is-active");
        } else {
            const jobListingsContainer = document.querySelector(
                ".work-preview--empty"
            );
            jobListingsContainer.innerHTML = "";
            jobListingsContainer.append(
                `<p>This a random text from document</p>`
            );
        }
    } else {
        console.log(ev.target);
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

const jobsList = {
    title: "Programmatore Java",
    location: "Pisa",
    region: "Toscana",
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus labore non ipsam sequi vitae, iste, at nobis modi voluptatum porro officia accusantium totam quasi laborum! Molestias provident quidem molestiae impedit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus labore non ipsam sequi vitae, iste, at nobis modi voluptatum porro officia accusantium totam quasi laborum! Molestias provident quidem molestiae impedit!",
    data: "12/11/2020",
    contract: "Tempo Indeterminato",
    verified: "true",
};
