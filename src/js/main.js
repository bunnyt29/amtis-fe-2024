// Продължи с твоя vanilla JavaScript код тук.
const hamburger = document.querySelector('#btn-hamburger');
const navLinks = document.querySelector("#nav-links");
hamburger.addEventListener('click', function(){
    navLinks.classList.toggle("hidden");
    hamburger.classList.toggle("open");
});

var dessertNames = document.querySelector('.dessert-cards-card-image');
var dessertShortDescriptions = document.querySelector('.dessert-cards-card-image');
var dessertLongDescriptions = document.querySelector('.dessert-cards-card-image');
var dessertNames = document.querySelector('.dessert-cards-card-image');

async function fetchData() {
    const response = await fetch("http://localhost:4000/desserts");
    const desserts = await response.json();
}

fetchData();

for (let index = 0; index < dessertNames.length; index++) {
    dessertNames[index].innerHTML = desserts[0].name;
}