// selecting elements
let menuIcon = document.getElementById("menu-icon");
let mobMenu = document.getElementById("mob-menu")

menuIcon.addEventListener("click", () => {
    mobMenu.classList.toggle("hidden");
});
function hideMenu() {
    mobMenu.classList.add("hidden");
}