document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const menuOverlay = document.querySelector('.menu-overlay');

    burgerMenu.addEventListener('click', function () {
        if (menuOverlay.style.display === 'none' || menuOverlay.style.display === '') {
            menuOverlay.style.display = 'block';
        } else {
            menuOverlay.style.display = 'none';
        }
    });
});
