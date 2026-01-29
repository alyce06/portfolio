
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

// Ne pas activer le scroll forcé sur les appareils tactiles
if (!("ontouchstart" in window)) {
    const sections = [
        document.querySelector("header"),
        document.querySelector("#projets"),
        document.querySelector("#contact")
    ];

    let currentSection = 0;
    let isAnimating = false;

    window.addEventListener("wheel", (event) => {
        event.preventDefault(); // ⛔ bloque le scroll natif sur desktop seulement

        if (isAnimating) return;

        isAnimating = true;

        if (event.deltaY > 0) {
            if (currentSection < sections.length - 1) {
                currentSection++;
            }
        } else {
            if (currentSection > 0) {
                currentSection--;
            }
        }

        sections[currentSection].scrollIntoView({
            behavior: "smooth"
        });

        setTimeout(() => {
            isAnimating = false;
        }, 800);

    }, { passive: false });
}
