const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const overlay = document.createElement('div'); // Create an overlay
overlay.classList.add('overlay');
document.body.appendChild(overlay); // Add the overlay to the DOM

hamburger.addEventListener('click', () => {
    const isActive = hamburger.classList.toggle('active');
    navLinks.classList.toggle('show');
    overlay.classList.toggle('show');

    // Change the button to a cross when active
    if (isActive) {
        hamburger.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" fill="#ff4444" viewBox="0 0 24 24" width="30" height="30">
                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`;
    } else {
        hamburger.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" width="30" height="30">
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`;
    }
});

// Close nav-links when clicking the overlay
overlay.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('show');
    overlay.classList.remove('show');
    hamburger.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" width="30" height="30">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`;
});
// faq
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');

    question.addEventListener('click', () => {
        const isOpen = answer.classList.contains('open');
        
        // Close all other FAQ items
        faqItems.forEach(i => {
            i.querySelector('.faq-answer').classList.remove('open');
            i.querySelector('.faq-icon').classList.remove('rotate');
        });

        // Toggle the current FAQ item
        if (!isOpen) {
            answer.classList.add('open');
            icon.classList.add('rotate');
        } else {
            answer.classList.remove('open');
            icon.classList.remove('rotate');
        }
    });
});
const translations = {
    en: {
        welcome: "Welcome to Priyansh Tours",
        discover: "Discover Incredible India",
    },
    hi: {
        welcome: "प्रियंश टूर्स में आपका स्वागत है",
        discover: "अविश्वसनीय भारत की खोज करें",
    },
    fr: {
        welcome: "Bienvenue chez Priyansh Tours",
        discover: "Découvrez l'Inde incroyable",
    },
    es: {
        welcome: "Bienvenido a Priyansh Tours",
        discover: "Descubre la increíble India",
    },
    de: {
        welcome: "Willkommen bei Priyansh Tours",
        discover: "Entdecken Sie das unglaubliche Indien",
    },
    zh: {
        welcome: "欢迎来到 Priyansh Tours",
        discover: "发现不可思议的印度",
    },
};
// contact
// Contact Form Submission Handler
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page reload

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent successfully.`);
        // Reset the form
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill out all fields before submitting.');
    }
});

