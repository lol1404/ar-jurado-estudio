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
        // add more image paths here, e.g. 'assets/newphoto.jpg'
    ];

    imageUrls.forEach(url => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Fotografía del estudio';
        // click to enlarge
        img.addEventListener('click', () => {
            const modal = document.getElementById('image-modal');
            const modalImg = document.getElementById('modal-img');
            modal.style.display = 'block';
            modalImg.src = url;
        });
        item.appendChild(img);
        gallery.appendChild(item);
    });

    // Initialize the map
    const map = L.map('map').setView([37.2829, -5.9209], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([37.2718, -5.9088]).addTo(map)
        .bindPopup('A.R. Jurado')
        .openPopup();

    // modal close behavior
    const modal = document.getElementById('image-modal');
    const closeBtn = document.querySelector('.image-modal .close');
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
