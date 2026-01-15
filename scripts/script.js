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


// Learn-more-about-270
// Stap 1: querySelector
let theLink = document.querySelector('.Learn-more-about-270')

// Stap 2: addEventListener
theLink.addEventListener("mouseout", cirkleHandler)

// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
// scaleLink.classList.toggle..
function cirkleHandler() {
  theLink.classList.add ("rotate")
}

theLink.addEventListener("animationend", function(){
  theLink.classList.remove("rotate")
})