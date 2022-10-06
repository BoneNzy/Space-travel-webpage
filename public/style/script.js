const primaryNav = document.querySelector('.nav-container');
const navButton = document.querySelector('.menu-icon');

navButton.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility == "false") {
        primaryNav.setAttribute("data-visible", true);
        navButton.setAttribute("aria-expanded", true);
    }else {
        primaryNav.setAttribute("data-visible", false);
        navButton.setAttribute("aria-expanded", false);
    }
});