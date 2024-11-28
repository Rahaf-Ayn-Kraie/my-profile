'use strict';

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelector('.download-resume').addEventListener('click', function () {
    window.open('./assets/resume/resume.pdf');
});

const knowMoreButton = document.querySelector('.know-more');

knowMoreButton.addEventListener('click', () => {
    const aboutSection = document.querySelector('.about-me');
    aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'      
    });
});