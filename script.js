
const previewImage = document.getElementById("preview-image");
const defaultText = document.getElementById("default-text");
const projectLinks = document.querySelectorAll(".projet");


const projectImages = {
    "ticolas": "image/ticolas.png",
    "billetterie": "image/billetterie.png",
    "labottine": "image/labottine1.png",
    "riremedecin": "image/ppp.png",
    "aveniretudiant": "image/avenir1.png",
    "courtmetrage": "image/film.png"
}

// Ajout des écouteurs d'événements
projectLinks.forEach(link => {
    
    // Au survol de la souris
    link.addEventListener("mouseenter", () => {
        const projectId = link.getAttribute("data-project");
        const imageUrl = projectImages[projectId];

        if (imageUrl) {
            // Mettre à jour la source de l'image
            previewImage.src = imageUrl;
            
            // Afficher l'image et cacher le texte par défaut
            previewImage.style.opacity = "1";
            defaultText.style.opacity = "0";
        }
    });

    // Quand la souris quitte le lien
    link.addEventListener("mouseleave", () => {
        // Cacher l'image et réafficher le texte par défaut
        previewImage.style.opacity = "0";
        defaultText.style.opacity = "1";
    });
});

const sections = [
    document.querySelector("header"),
    document.querySelector("#projets"),
    document.querySelector("#contact")
];

let currentSection = 0;
let isAnimating = false;



