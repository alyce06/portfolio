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