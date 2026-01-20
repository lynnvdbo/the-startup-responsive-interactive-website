// de button opzoeken in de HTML en die een naam geven
const menuButton = document.querySelector(".menu-btn")

// de nav opzoeken in de HTML en die een naam geven
const headerNav = document.querySelector(".header-nav")

// de body opzoeken in de HTML en die een naam geven
const body = document.querySelector("body")

// de button opzoeken in de HTML en die een naam geven
const kruisje = document.querySelector(".menu-btn-close")

// op de button klikken
menuButton.addEventListener('click', toggleNav)
kruisje.addEventListener('click', menuClose)

// een functie die het menu open en dicht doet
// deze zorgt ervoor dat hij open gaat
function toggleNav() {
    menuButton.classList.toggle('is-open')
    headerNav.classList.toggle('is-open')
    body.classList.toggle('overflow')
}

// deze zorgt ervoor dat hij dicht gaat
function menuClose() {
    menuButton.classList.toggle('is-open')
    headerNav.classList.toggle('is-open')
    body.classList.toggle('overflow')
}




// UI event toegevoegd aan Learn-more-about-270 button
// Stap 1: querySelector
let theLink = document.querySelector('.learn-more-about-270')

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

 