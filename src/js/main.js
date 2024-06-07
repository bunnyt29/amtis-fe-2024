// Продължи с твоя vanilla JavaScript код тук.
const hamburger = document.querySelector('#btn-hamburger');
const navLinks = document.querySelector("#nav-links");
hamburger.addEventListener('click', function(){
    navLinks.classList.toggle("hidden");
    hamburger.classList.toggle("open");
});

async function fetchData() {
    const response = await fetch("http://localhost:4000/desserts");
    const responseJSON = await response.json();
    return responseJSON;
}

async function GenerateHTML() {
    const data = await fetchData();
    console.log(data)
    const dessertCardsSection = document.querySelector("#dessert-cards-js");
    for (let i = 0; i < data.length; i++) {
        dessertCardsSection.innerHTML += 
        `
        <div class="dessert-cards-card">
                    <picture class="dessert-cards-card-image-picture">
                        <source class="dessert-cards-card-image" media="(max-width:600px)" srcset="public/images/desktop/${data[i].image}">
                        <img src="public/images/desktop/${data[i].image}" alt="strawberry and basil">
                    </picture>
                    <div class="dessert-cards-card-text">
                        <picture>
                            <source media="(max-width:600px)" srcset="public/images/desktop/sections-decoration.svg">
                            <img src="public/images/desktop/sections-decoration.svg" alt="dessert-card-decoration">
                        </picture>
                        <h2 class="dessert-cards-card-name">${data[i].name}</h2>
                        <p class="dessert-cards-card-description-short">${data[i].description_short}</p>
                        <button>Научете повече</button>
                    </div>
                </div>
        `
    }
}

GenerateHTML();
