//création du tableau 
let tab = [
    { name: "Macaron", imagePath: "./assets/img/macaron.webp", creator: "Pierre Desfontaines", year: 1925, country: "France", lien:"https://www.meilleurduchef.com/fr/recette/dessert/macarons.html"}, 
    { name: "Croissant", imagePath: "./assets/img/croissant.avif", creator: "August Zang", year: 1600, country: "Autriche", lien :"https://www.meilleurduchef.com/fr/recette/recette-viennoiserie/croissant.html"},
    { name: "Éclair", imagePath: "./assets/img/eclair-cafechocolat.jpg", creator: "Antonin Carême", year: 1800, country: "Moyen-Orient", lien:"https://www.meilleurduchef.com/fr/recette/eclair-chocolat.html"},
    { name: "Paris-Brest", imagePath: "./assets/img/parisbrest.jpg", creator: "Louis Durant", year: 1909, country: "France", lien:"https://www.meilleurduchef.com/fr/recette/paris-brest.html"},
    { name: "Tiramisu", imagePath: "./assets/img/Tiramisu-6-en-cover.png", creator: "Roberto Linguanotto", year: "1960-1970", country: "Italie", lien:"https://www.meilleurduchef.com/fr/recette/tiramisu.html"},
    { name: "Sacher Torte", imagePath: "./assets/img/Sacher-Torte-44.jpg", creator: "Franz Sacher", year: 1832, country: "Autriche", lien:"https://www.meilleurduchef.com/fr/recette/sachertorte.html"},
    { name: "Mille-feuille", imagePath: "./assets/img/mille-feuille.jpg", creator: "Francois Louis Rousseau", year: 1860, country: "France", lien:"https://www.meilleurduchef.com/fr/recette/mille-feuille.html"},
    { name: "Cupcake", imagePath: "./assets/img/cupcake.webp", creator: "Amélia Simmons", year: "fin du 18ème", country: "États-Unis", lien:"https://www.meilleurduchef.com/fr/recette/dessert/cupcake.html"},
    { name: "Forêt-Noire", imagePath: "./assets/img/foret.avif", creator: "Josef Keller", year: 1915, country: "Allemagne", lien:"https://www.meilleurduchef.com/fr/recette/foret-noire.html"},
    { name: "Opéra", imagePath: "./assets/img/opera.jpg", creator: "Gaston Lenôtre", year: 1950, country: "France", lien:"https://www.meilleurduchef.com/fr/recette/opera.html"}
];


let collectionSection = document.querySelector(".collection");

function createPastry(name, imagePath, creator, year, country, lien) {
    return {
        imagePath: imagePath,
        name: name,
        creator: creator,
        year: year,
        country: country,
        lien: lien,
    };
}

function addPastryToCollection(pastry) {
    const article = document.createElement("article");
    article.classList.add("pastry");

    const figure = document.createElement("figure");

    const img = document.createElement("img");
    img.src = pastry.imagePath;

    const figcaption = document.createElement("figcaption");
    figcaption.innerHTML = `
        <h2>${pastry.name}</h2>
        <p class="creator">Créateur: ${pastry.creator}</p>
        <p class="years">Année: ${pastry.year}</p>
        <p class="pays">Pays: ${pastry.country}</p>
        <button class="recipe-button">Recette</button>
    `;

    figure.appendChild(img);
    figure.appendChild(figcaption);
    article.appendChild(figure);

    const recipeButton = article.querySelector(".recipe-button");
    recipeButton.addEventListener("click", () => {
        window.location.href = pastry.lien;
    });


    

    collectionSection.appendChild(article);
}

// Ajoutez chaque pâtisserie à la section "collection"
tab.forEach((pastryData) => {
    const pastry = createPastry(pastryData.name, pastryData.imagePath, pastryData.creator, pastryData.year, pastryData.country, pastryData.lien,);
    addPastryToCollection(pastry);
});

// Sélectionnez toutes les cartes de pâtisserie
let pastryCards = document.querySelectorAll('.pastry');

// Ajoutez un écouteur d'événement à chaque carte
pastryCards.forEach((card) => {
  card.addEventListener('mouseenter', handleCardHover);
  card.addEventListener('mouseleave', handleCardLeave);
});

// Fonction appelée lorsque la souris survole une carte
function handleCardHover(event) {
  const card = event.currentTarget;

  // Appliquer un effet de zoom
  card.style.transform = 'scale(1.1)';
}

// Fonction appelée lorsque la souris quitte une carte
function handleCardLeave(event) {
  const card = event.currentTarget;

  // Réinitialiser le zoom
  card.style.transform = 'scale(1)';
}