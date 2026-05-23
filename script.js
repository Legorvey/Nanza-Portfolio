// 1. Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// 2. Dynamic Navbar (Glassmorphism on Scroll)
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 3. Typewriter Effect (Updated Timing)
const typedTextSpan = document.querySelector(".typed-text");
const textArray = ["Creative Marketer", "Social Media Enthusiast", "Content Strategist", "Storyteller"];
const typingDelay = 100;
const erasingDelay = 35;
const newTextDelay = 750;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 250);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// 4. Copy to Clipboard Functionality
const copyBtn = document.getElementById('copyEmailBtn');
const toast = document.getElementById('toast');

copyBtn.addEventListener('click', () => {
    // Teks yang akan dicopy
    const emailToCopy = 'nazraza0408@gmail.com';
    
    navigator.clipboard.writeText(emailToCopy).then(() => {
        // Tampilkan Toast
        toast.classList.add('show');
        
        // Sembunyikan Toast setelah 3 detik
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
});