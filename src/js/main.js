// Продължи с твоя vanilla JavaScript код тук.
const hamburger = document.querySelector('#btn-hamburger');
const navLinks = document.querySelector("#nav-links");
hamburger.addEventListener('click', function(){
    navLinks.classList.toggle("hidden");
    hamburger.classList.toggle("open");
});

var dessertCards = document.querySelector('.dessert-cards-card');

async function fetchData() {
    const response = await fetch("http://localhost:4000/desserts");
    const desserts = await response.json();
    console.log(desserts);
}

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}