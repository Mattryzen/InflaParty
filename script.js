// Initialisation des icônes Lucide au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();
});

// État actuel (simulé)
let currentPage = 'home';
let isMenuOpen = false;

// Fonction de navigation
function navigateTo(pageId) {
    currentPage = pageId;

    // 1. Masquer toutes les sections
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.add('hidden');
        section.classList.remove('block');
    });

    // 2. Afficher la section demandée
    const targetSection = document.getElementById(pageId);
    if (targetSection) {
        targetSection.classList.remove('hidden');
        targetSection.classList.add('block');
        // Relancer l'animation
        targetSection.classList.remove('animate-fade-in');
        void targetSection.offsetWidth; // Trigger reflow
        targetSection.classList.add('animate-fade-in');
    }

    // 3. Mettre à jour la navigation Desktop (Active State)
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.dataset.target === pageId) {
            link.className = "nav-link text-sm font-medium transition-colors duration-200 uppercase tracking-widest text-black border-b-2 border-black pb-1";
        } else {
            link.className = "nav-link text-sm font-medium transition-colors duration-200 uppercase tracking-widest text-gray-500 hover:text-black";
        }
    });

    // 4. Mettre à jour la navigation Mobile (Active State)
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        if (link.dataset.target === pageId) {
            link.className = "mobile-nav-link block w-full text-left px-3 py-4 text-base font-medium rounded-md bg-gray-50 text-black font-bold";
        } else {
            link.className = "mobile-nav-link block w-full text-left px-3 py-4 text-base font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-black";
        }
    });
    
    // Remonter en haut de page
    window.scrollTo(0, 0);
}

// Fonction pour le menu mobile
function toggleMobileMenu() {
    isMenuOpen = !isMenuOpen;
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');

    if (isMenuOpen) {
        mobileMenu.classList.remove('hidden');
        // Changer l'icône en X
        menuIcon.setAttribute('data-lucide', 'x');
    } else {
        mobileMenu.classList.add('hidden');
        // Changer l'icône en Menu
        menuIcon.setAttribute('data-lucide', 'menu');
    }
    // Re-rendre les icônes pour appliquer le changement Menu -> X
    lucide.createIcons();
}