// de button opzoeken in de HTML en die een naam geven
const menuButton = document.querySelector(".menu-btn")

// de nav opzoeken in de HTML en die een naam geven
const headerNav = document.querySelector(".header-nav")

// op de button klikken
menuButton.addEventListener('click', toggleNav)

// een functie die het menu open en dicht doet
function toggleNav() {
    menuButton.classList.toggle('is-open')
    headerNav.classList.toggle('is-open')
}

