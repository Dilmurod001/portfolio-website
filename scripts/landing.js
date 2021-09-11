
function showMenu() {
    const target = document.getElementById("burger-icon");
    target.classList.toggle("burger-open");

    const menu = document.getElementById("menu");
    menu.classList.toggle("show-menu")
}

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    header.style.background = window.scrollY > 650 ? "rgba(238, 146, 40, 0.9)" : "transparent"
})