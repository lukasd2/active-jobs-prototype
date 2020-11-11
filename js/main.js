window.onload = () => {
    console.log("page-loaded");
    initAppHandlers();
};

const initAppHandlers = () => {
    let menuHamburgerBtn = document.querySelector(".btn-hamburger");
    menuHamburgerBtn.addEventListener(
        "click",
        () => {
            console.log("click");
            document.querySelector(".page-header").classList.toggle("nav-open");
            document
                .querySelector(".btn-hamburger ")
                .classList.toggle("is-active");
        },
        false
    );
};
