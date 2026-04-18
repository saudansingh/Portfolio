// Mobile Menu Toggle
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// Sticky Header on Scroll
window.onscroll = () => {
  let header = document.querySelector('.header');
  header.classList.toggle('sticky', window.scrollY > 100);

  // Close menu when scrolling
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

// Typed.js for Animated Text
const typed = new Typed('.multiple-text', {
  strings: ['AI/ML Developer', 'Python Expert', 'Web Developer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

// ScrollReveal Animations
ScrollReveal({ 
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

// Header elements
ScrollReveal().reveal('.logo, .navbar a', { 
  origin: 'left',
  interval: 200
});

// Home section
ScrollReveal().reveal('.home-content h3, .home-content h1, .home-content p', {
  origin: 'top',
  interval: 200
});

ScrollReveal().reveal('.social-media a, .btn', {
  origin: 'bottom',
  interval: 200
});

ScrollReveal().reveal('.home-img', {
  origin: 'right',
  delay: 400
});

// About section
ScrollReveal().reveal('.about-img', {
  origin: 'left'
});

ScrollReveal().reveal('.about-content', {
  origin: 'right'
});

// Skills section
ScrollReveal().reveal('.skills h2, .skills-box', {
  origin: 'bottom',
  interval: 200
});

// Projects section
ScrollReveal().reveal('.projects h2', {
  origin: 'top'
});

ScrollReveal().reveal('.project-box', {
  origin: 'bottom',
  interval: 200
});

// Contact section
ScrollReveal().reveal('.contact h2, .whatsapp-btn, .contact p', {
  origin: 'bottom',
  interval: 200
});

// Footer
ScrollReveal().reveal('.footer-text, .footer-iconTop', {
  origin: 'bottom',
  interval: 200
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Project hover effect
document.querySelectorAll('.project-box').forEach(box => {
  box.addEventListener('mouseenter', () => {
    box.querySelector('.project-layer').style.transform = 'translateY(0)';
  });
  box.addEventListener('mouseleave', () => {
    box.querySelector('.project-layer').style.transform = 'translateY(100%)';
  });
});


// WhatsApp button click handler
document.querySelector('.whatsapp-btn').addEventListener('click', (e) => {
    // Optional: Prevent default if you want custom behavior
    // e.preventDefault(); 
    window.open(
        'https://wa.me/7037809840?text=Hello%20Ankur Singh,%20I%20saw%20your%20portfolio!', 
        '_blank'
    );
});
// Footer back-to-top button
document.querySelector('.footer-iconTop a').addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});