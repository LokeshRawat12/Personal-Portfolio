// GSAP Timeline
const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 1 } });

// Animate name
tl.from(".name", { y: -50, opacity: 0 });

// Animate nav links (one by one)
tl.from(".left_nav a", { x: -50, opacity: 0, stagger: 0.2 }, "-=0.5");

// Animate GitHub icon
tl.from(".left_nav img", { scale: 0, rotate: 180, opacity: 0 }, "-=0.3");

// Animate mobile menu icon
tl.from(".left_nav_mobile img", { x: 50, opacity: 0 }, "-=0.5");


// Animate profile image
gsap.from(".flyimage img", {
  duration: 1.5,
  y: -100,
  opacity: 0,
  ease: "bounce.out"
});

// Animate hero text
gsap.from(".intro h1", {
  duration: 1,
  x: -200,
  opacity: 0,
  delay: 0.5,
  ease: "power3.out"
});

gsap.from(".intro p", {
  duration: 1,
  x: 200,
  opacity: 0,
  delay: 0.8,
  ease: "power2.out"
});
// Animate project images
gsap.from(".project-card img", {
  duration: 1.2,
  opacity: 0,
  y: 50,
  stagger: 0.3,
  ease: "power2.out"
});

// Animate the contact section
gsap.from(".contact-section", {
  opacity: 0,
  y: 50,
  duration: 1.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".contact-section",
    start: "top 80%",
  }
});



// Animate hero social icons on page load
gsap.from(".hero-socials a", {
  duration: 1,
  scale: 0,
  opacity: 0,
  stagger: 0.2,
  delay: 1.2,
  ease: "back.out(1.7)"
});

// Animate footer social icons when they scroll into view
gsap.from(".footer-socials a", {
  opacity: 0,
  scale: 0.5,
  duration: 0.6,
  stagger: 0.15,
  ease: "back.out(1.7)",
  scrollTrigger: {
    trigger: ".footer-social",
    start: "top 90%",
  }
});
const menuBtn = document.querySelector('.left_nav_mobile img');
const mobileMenu = document.querySelector('.mobile-menu');

// Toggle menu on hamburger click
menuBtn.addEventListener('click', () => {
  if (window.innerWidth <= 768) {
    mobileMenu.classList.toggle('active');
  }
});

// Close menu when clicking a link
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
});

// Close menu if clicked outside
document.addEventListener('click', (e) => {
  if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
    mobileMenu.classList.remove('active');
  }
});

// Auto-close if resized to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    mobileMenu.classList.remove('active');
  }
});
// Replace with your Client ID from Google Cloud
const CLIENT_ID = "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com";
const API_KEY = "YOUR_API_KEY"; 
const SCOPES = "https://www.googleapis.com/auth/gmail.send";

function initClient() {
  gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"],
    scope: SCOPES,
  });
}

