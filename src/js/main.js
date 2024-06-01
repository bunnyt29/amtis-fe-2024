// Продължи с твоя vanilla JavaScript код тук.
const hamburger = document.querySelector('#btn-hamburger');
const navLinks = document.querySelector("#nav-links");
hamburger.addEventListener('click', function(){
    navLinks.classList.toggle("hidden");
    hamburger.classList.toggle("open");
});

var dessertNames = document.querySelectorAll('.dessert-cards-card-name');
var dessertShortDescriptions = document.querySelectorAll('.dessert-cards-card-description-short');
var dessertLongDescriptions = document.querySelectorAll('.dessert-cards-card-description-long');
var dessertIngrediants = document.querySelectorAll('.desserts-dessert-text-ingredients');
var dessertImages = document.querySelectorAll('.dessert-cards-card-image');

async function fetchData() {
    const response = await fetch("http://localhost:4000/desserts");
    const desserts = await response.json();

    // for (let index = 0; index < dessertNames.length; index++) {
    //     dessertNames[index].innerHTML = desserts[index].name;
    // }

    for (let index = 0; index < dessertShortDescriptions.length; index++) {
        dessertShortDescriptions[index].innerHTML = desserts[index].description_short;
    }

    // for (let index = 0; index < dessertImages.length; index++) {
    //     dessertImages[index].srcset = dessertImages[index].srcset + desserts[index].image;
    //     console.log(dessertImages[index].srcset)
    // }

    for (let index = 0; index < dessertShortDescriptions.length; index++) {
        dessertIngrediants[index].innerHTML = desserts[index].ingredients_text;
    }
}

fetchData();