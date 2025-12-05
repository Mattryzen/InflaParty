document.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();
});

let currentPage = 'home';
let isMenuOpen = false;


function navigateTo(pageId) {
    currentPage = pageId;

    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.add('hidden');
        section.classList.remove('block');
    });

    const targetSection = document.getElementById(pageId);
    if (targetSection) {
        targetSection.classList.remove('hidden');
        targetSection.classList.add('block');
        targetSection.classList.remove('animate-fade-in');
        void targetSection.offsetWidth;
        targetSection.classList.add('animate-fade-in');
    }

    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.dataset.target === pageId) {
            link.className = "nav-link text-sm font-medium transition-colors duration-200 uppercase tracking-widest text-black border-b-2 border-black pb-1";
        } else {
            link.className = "nav-link text-sm font-medium transition-colors duration-200 uppercase tracking-widest text-gray-500 hover:text-black";
        }
    });

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        if (link.dataset.target === pageId) {
            link.className = "mobile-nav-link block w-full text-left px-3 py-4 text-base font-medium rounded-md bg-gray-50 text-black font-bold";
        } else {
            link.className = "mobile-nav-link block w-full text-left px-3 py-4 text-base font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-black";
        }
    });
    
    window.scrollTo(0, 0);
}


function toggleMobileMenu() {
    isMenuOpen = !isMenuOpen;
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');

    if (isMenuOpen) {
        mobileMenu.classList.remove('hidden');
        menuIcon.setAttribute('data-lucide', 'x');
    } else {
        mobileMenu.classList.add('hidden');
        menuIcon.setAttribute('data-lucide', 'menu');
    }
    
    lucide.createIcons();
}