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

// JavaScript to show more photos
const showMoreBtn = document.getElementById('show-more-btn');
const hiddenItems = document.querySelectorAll('.hidden');

showMoreBtn.addEventListener('click', () => {
    hiddenItems.forEach(item => {
        item.classList.toggle('hidden'); // Toggle the visibility of hidden items
    });

    // Toggle the button text between 'Show More' and 'Show Less'
    if (showMoreBtn.innerText === 'Show More') {
        showMoreBtn.innerText = 'Show Less';
    } else {
        showMoreBtn.innerText = 'Show More';
    }
});

// JavaScript for lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

// When any gallery item is clicked
document.querySelectorAll('.gallery-item a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        lightbox.style.display = 'flex'; // Show the lightbox
        lightboxImg.src = link.href; // Set lightbox image to the full-size image link
    });
});

// Close the lightbox when the close button is clicked
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Optional: Close the lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});
