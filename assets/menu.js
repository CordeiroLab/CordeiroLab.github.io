document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');

    // Toggle menu visibility on hamburger click
    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active'); // Add or remove 'active' class
    });
});
