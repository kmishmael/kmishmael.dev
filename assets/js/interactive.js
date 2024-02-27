
window.addEventListener('DOMContentLoaded', (this, ev) => {
    let button = document.getElementById("side-menu-button");
    let menu = document.getElementById("side-menu");

    button.addEventListener("click", () => {
        alert("hello" + menu.className);
        menu.classList.toggle("toggle-menu");
    });

})