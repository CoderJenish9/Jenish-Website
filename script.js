// script.js
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');

    for (let link of navLinks) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    }
});

// Select all the material links
const pdfLinks = document.querySelectorAll('.pdf-link');
const googleLinks = document.querySelectorAll('.google-link');

// Add a click event listener for PDFs to display an alert
pdfLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        alert('You are about to download a PDF!');
    });
});

// Add a click event listener for Google Photos links
googleLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        alert('You are being redirected to Google Photos!');
    });
});

