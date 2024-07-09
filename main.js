document.addEventListener('DOMContentLoaded', function() {
    const mobMenuButton = document.querySelector('.icon-mob-menu');
    const mobMenuContainer = document.querySelector('.mob-menu-container');
    const closeMenuButton = document.querySelector('.btn-close-mob-menu');

    mobMenuButton.addEventListener('click', function() {
        mobMenuContainer.classList.add('is-open');
    });

    closeMenuButton.addEventListener('click', function() {
        mobMenuContainer.classList.remove('is-open');
    });
});
