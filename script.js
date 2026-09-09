document.addEventListener('DOMContentLoaded', () => {
    // Éléments du haut (Projets / Book)
    const onglets = document.querySelectorAll('.onglet');
    const sectionP = document.getElementById('projets');
    const sectionB = document.getElementById('book');
    const heroLinks = document.querySelectorAll('.hero .cta .btn');

    // Éléments du trieur latéral
    const binderTabs = document.querySelectorAll('.tab-binder');
    const projectSpreads = document.querySelectorAll('.project-spread');

    // 1. Fonction pour alterner entre Projets et Book
    function affichage(id) {
        if (id === 'book') {
            sectionB.classList.remove('hidden');
            sectionP.classList.add('hidden');
        } else if (id === 'projets') {
            sectionB.classList.add('hidden');
            sectionP.classList.remove('hidden');
        }

        // Met à jour la classe "actif" sur les onglets du haut
        onglets.forEach(btn => {
            if (btn.dataset.target === id) {
                btn.classList.add('actif');
            } else {
                btn.classList.remove('actif');
            }
        });
    }

    // Écouteurs sur les deux onglets supérieurs
    onglets.forEach(btn => {
        btn.addEventListener('click', () => {
            affichage(btn.dataset.target);
        });
    });

    // Écouteurs sur les liens de l'en-tête (CTA)
    heroLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const cible = link.getAttribute('href').replace('#', '');
            if (cible === 'projets' || cible === 'book') {
                e.preventDefault();
                affichage(cible);
            }
        });
    });

    // 2. Gestion des intercalaires latéraux (trieur de projets)
    binderTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetProject = tab.dataset.project;

            // Active l'intercalaire cliqué
            binderTabs.forEach(b => b.classList.remove('active'));
            tab.classList.add('active');

            // Affiche la double page correspondante
            projectSpreads.forEach(spread => {
                if (spread.id === targetProject) {
                    spread.classList.add('active');
                } else {
                    spread.classList.remove('active');
                }
            });
        });
    });
});


// Création du conteneur d'agrandissement centré sur le carnet
const notebook = document.querySelector('.notebook');
if (notebook) {
    const zoomOverlay = document.createElement('div');
    zoomOverlay.className = 'notebook-zoom-overlay';
    const zoomImg = document.createElement('img');
    zoomOverlay.appendChild(zoomImg);
    notebook.appendChild(zoomOverlay);

    // Sélectionne toutes les images zoomables de la section projets
    const zoomTargets = document.querySelectorAll(
        '#projets .media-box img, #projets .brand-board img, #projets .gallery-stickers img, #projets .ads-showcase img'
    );

    zoomTargets.forEach(img => {
        img.addEventListener('mouseenter', () => {
            zoomImg.src = img.src;
            zoomOverlay.style.display = 'block';
        });

        img.addEventListener('mouseleave', () => {
            zoomOverlay.style.display = 'none';
        });
    });
}

const btnProjets = document.querySelector('a[href="#projets"]');
const btnBook = document.querySelector('a[href="#book"]');

const ongletProjets = document.querySelector('.onglet[data-target="projets"]');
const ongletBook = document.querySelector('.onglet[data-target="book"]');

const sectionProjets = document.getElementById('projets');
const sectionBook = document.getElementById('book');
const notebookWrapper = document.querySelector('.notebook-wrapper');

function scrollToNotebook() {
    if (notebookWrapper) {
        notebookWrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Clic sur "Voir mes projets"
if (btnProjets) {
    btnProjets.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Active l'onglet et affiche la section Projets
        ongletProjets?.classList.add('actif');
        ongletBook?.classList.remove('actif');
        sectionProjets?.classList.remove('hidden');
        sectionBook?.classList.add('hidden');

        scrollToNotebook();
    });
}

// Clic sur "Voir mon book"
if (btnBook) {
    btnBook.addEventListener('click', (e) => {
        e.preventDefault();

        // Active l'onglet et affiche la section Book
        ongletBook?.classList.add('actif');
        ongletProjets?.classList.remove('actif');
        sectionBook?.classList.remove('hidden');
        sectionProjets?.classList.add('hidden');

        scrollToNotebook();
    });
}