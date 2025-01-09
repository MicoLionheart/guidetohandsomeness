document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.content');

    const revealSections = () => {
        const triggerPoint = window.innerHeight / 1.2;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < triggerPoint) {
                section.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', revealSections);
    revealSections();
});

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.content');

    sections.forEach((section) => {
        const images = section.querySelectorAll('.image-right img, .image-left img');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    images.forEach((image) => {
                        if (entry.isIntersecting) {
                            image.classList.add('zoomed');
                        } else {
                            image.classList.remove('zoomed');
                        }
                    });
                });
            },
            {
                root: null,
                threshold: 0.75,
            }
        );

        observer.observe(section);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const closeMenu = document.querySelector('.close-menu');
    const mainNav = document.querySelector('.main-nav');

    // Ensure the menu starts in a closed state
    console.log('Before removing active:', mainNav.classList);
    mainNav.classList.remove('active');
    console.log('After removing active:', mainNav.classList);

    menuToggle.addEventListener('click', () => {
        mainNav.classList.add('active');
        console.log('Menu opened:', mainNav.classList);
    });

    closeMenu.addEventListener('click', () => {
        mainNav.classList.remove('active');
        console.log('Menu closed:', mainNav.classList);
    });

    // Close the menu if a click occurs outside it
    document.addEventListener('click', (e) => {
        if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
            mainNav.classList.remove('active');
            console.log('Menu closed by outside click:', mainNav.classList);
        }
    });

    mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
        });
    });
});