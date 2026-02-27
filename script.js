document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu functionality
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple image gallery
    const gallery = document.querySelector('.gallery-grid');
    const imageUrls = [
        'assets/Captura de pantalla 2026-02-27 195506.png',
        'assets/Captura de pantalla 2026-02-27 195516.png',
        'assets/Captura de pantalla 2026-02-27 195525.png',
        'assets/Captura de pantalla 2026-02-27 195535.png',
        'assets/Captura de pantalla 2026-02-27 195542.png',
        'assets/Captura de pantalla 2026-02-27 195550.png',
        'assets/Captura de pantalla 2026-02-27 195603.png',
        'assets/Captura de pantalla 2026-02-27 195611.png'
    ];

    imageUrls.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Fotografía de A.R. Jurado';
        gallery.appendChild(img);
    });

    // Initialize the map
    const map = L.map('map').setView([37.2829, -5.9209], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([37.2718, -5.9088]).addTo(map)
        .bindPopup('A.R. Jurado')
        .openPopup();
});
