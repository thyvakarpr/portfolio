// ============================================================
//   THYVAKAR P R — PORTFOLIO JAVASCRIPT
//   File: assets/js/script.js
// ============================================================


// ---- 1. MOBILE MENU TOGGLE ----
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close menu when a nav link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});


// ---- 2. NAVBAR SHADOW ON SCROLL ----
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});


// ---- 3. ACTIVE NAV LINK HIGHLIGHT ----
const sections = document.querySelectorAll('section, .hero');
const navAnchors = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navAnchors.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});


// ---- 4. FADE IN ANIMATION ON SCROLL ----
const fadeTargets = document.querySelectorAll(
  '.skill-card, .project-card, .ach-card, .intern-card, .timeline-item, .contact-card, .about-grid, .section-label, h2'
);

// Set initial hidden state
fadeTargets.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(28px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

// Intersection Observer for smooth reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Stagger the animation for grid children
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, index * 60);
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
});

fadeTargets.forEach(el => observer.observe(el));


// ---- 5. SMOOTH SCROLL FOR ALL ANCHOR LINKS ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


// ---- 6. AUTO UPDATE YEAR IN FOOTER ----
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}


// ---- 7. TYPING EFFECT FOR HERO ROLE ----
const roleEl = document.querySelector('.hero-role span');
if (roleEl) {
  const roles = ['Python Developer', 'Full-Stack Engineer', 'IoT Enthusiast', 'Problem Solver'];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeRole() {
    const current = roles[roleIndex];

    if (isDeleting) {
      roleEl.textContent = current.substring(0, charIndex - 1);
      charIndex--;
    } else {
      roleEl.textContent = current.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === current.length) {
      // Pause at end of word
      setTimeout(() => { isDeleting = true; typeRole(); }, 2000);
      return;
    }

    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }

    const speed = isDeleting ? 60 : 100;
    setTimeout(typeRole, speed);
  }

  // Start typing after a short delay
  setTimeout(typeRole, 1000);
}


// ---- 8. SKILL CARD GLOW ON HOVER ----
document.querySelectorAll('.skill-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = '0 8px 32px rgba(124, 92, 252, 0.2)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = 'none';
  });
});


// ---- 9. PROJECT CARD COLOR ACCENT ----
const projectColors = ['#7c5cfc', '#00d4aa', '#ff6b9d'];
document.querySelectorAll('.proj-num').forEach((num, index) => {
  num.style.color = projectColors[index % projectColors.length] + '30';
});


// ---- 10. CONSOLE GREETING ----
console.log('%c👋 Hi! I\'m Thyvakar P R', 'color: #7c5cfc; font-size: 18px; font-weight: bold;');
console.log('%c🐍 Python Developer | Full-Stack Engineer', 'color: #00d4aa; font-size: 13px;');
console.log('%c📧 thyvakarpr@gmail.com', 'color: #8888aa; font-size: 12px;');
