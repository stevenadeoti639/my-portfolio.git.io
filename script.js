let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

const texts = [
    "Web Developer",
    "System Analyst",
    "Graphics Designer",
    "System Hardware Designer",
    "Multi instrumentalist"
];

let currentIndex = 0;
let currentText = "";
let isDeleting = false;
let charIndex = 0;
const speed = 150;  // Typing speed
const pause = 1000; // Pause before deleting

function type() {
    const dynamicTextElement = document.getElementById("dynamic-text");
    
    if (isDeleting) {
        if (charIndex > 0) {
            currentText = texts[currentIndex].substring(0, charIndex - 1);
            charIndex--;
        } else {
            isDeleting = false;
            currentIndex = (currentIndex + 1) % texts.length;
        }
    } else {
        if (charIndex < texts[currentIndex].length) {
            currentText = texts[currentIndex].substring(0, charIndex + 1);
            charIndex++;
        } else {
            isDeleting = true;
            setTimeout(type, pause);  // Pause before starting to delete
            return;
        }
    }

    dynamicTextElement.textContent = currentText;
    setTimeout(type, isDeleting ? speed / 2 : speed);
}

type();





document.getElementById('menu-icon').addEventListener('click', function() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('show');
});
