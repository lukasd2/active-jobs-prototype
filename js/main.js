window.onload = () => {
    console.log("page-loaded");
    initAppHandlers();
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
    function searchResult(ev) {
        ev.preventDefault();
        const jobName = this.querySelector("[name=jobname]").value;
        const locationName = this.querySelector("[name=location]").value;
        console.log(jobName, locationName);

        const search = {
            jobName,
            locationName,
        };

        console.log(search);
        localStorage.setItem("search", JSON.stringify(search));
        location.href = "jobsearch.html";
    }

    searchForm.addEventListener("submit", searchResult);
};
