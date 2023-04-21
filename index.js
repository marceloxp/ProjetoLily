document.addEventListener("DOMContentLoaded", function () {
    main();
});

function main() {
    const arrowIcon = document.querySelector(".arrow");
    const aboutSection = document.querySelector(".about");
    arrowIcon.addEventListener("click", () => {
        aboutSection.scrollIntoView({ behavior: "smooth" });
    });
}