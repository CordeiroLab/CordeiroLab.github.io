document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('menu');

    // Toggle sidebar visibility on hamburger click
    hamburger.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    // Close the sidebar when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
            sidebar.classList.remove('active');
        }
    });
});
