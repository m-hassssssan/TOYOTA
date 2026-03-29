// ========================================
// TOYOTA WEBSITE - ULTIMATE ANIMATIONS
// ========================================

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
  // Initialize all animations
  initPreloader();
  initNavbar();
  initHeroAnimations();
  initScrollAnimations();
  initParticles();
  initMobileMenu();
  initCounters();
  initParallax();
  initGlitchEffect();
  initMagneticButtons();
  initCursorEffect();
  initTypingEffect();
  init3DCardTilt();
  initWaveAnimation();
});

// ========================================
// PRELOADER
// ========================================
function initPreloader() {
  const preloader = document.querySelector('.preloader');
  if (!preloader) return;

  setTimeout(() => {
    preloader.classList.add('hidden');
    // Trigger hero animations after preloader
    setTimeout(() => {
      animateHeroElements();
    }, 300);
  }, 2500);
}

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add/remove scrolled class
    if (currentScroll > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Hide/show on scroll direction
    if (currentScroll > lastScroll && currentScroll > 200) {
      navbar.style.transform = 'translateY(-100%)';
    } else {
      navbar.style.transform = 'translateY(0)';
    }

    lastScroll = currentScroll;
  });

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// ========================================
// HERO ANIMATIONS
// ========================================
function initHeroAnimations() {
  // Elements are initially hidden with CSS
  // They will be animated after preloader
}

function animateHeroElements() {
  const tl = gsap.timeline();

  // Animate subtitle
  tl.to('.hero-subtitle', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out'
  });

  // Animate title
  tl.to('.hero-title', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power3.out'
  }, '-=0.4');

  // Animate description
  tl.to('.hero-description', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.6');

  // Animate buttons
  tl.to('.hero-buttons', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.5');

  // Animate hero car
  tl.to('.hero-car', {
    opacity: 1,
    x: 0,
    duration: 1.2,
    ease: 'power3.out'
  }, '-=1');

  // Animate stats
  tl.to('.stat-item', {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: 'power3.out'
  }, '-=0.6');
}

// ========================================
// SCROLL ANIMATIONS
// ========================================
function initScrollAnimations() {
  // Register ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Reveal animations for sections
  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach(el => {
    gsap.fromTo(el, 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });

  // Reveal left animations
  const revealLeftElements = document.querySelectorAll('.reveal-left');
  revealLeftElements.forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });

  // Reveal right animations
  const revealRightElements = document.querySelectorAll('.reveal-right');
  revealRightElements.forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });

  // Reveal scale animations
  const revealScaleElements = document.querySelectorAll('.reveal-scale');
  revealScaleElements.forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });

  // Car cards stagger animation
  const carCards = document.querySelectorAll('.car-card');
  if (carCards.length > 0) {
    gsap.fromTo(carCards,
      { opacity: 0, y: 80, rotateX: 15 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.cars-grid',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }

  // Service cards animation
  const serviceCards = document.querySelectorAll('.service-card');
  if (serviceCards.length > 0) {
    gsap.fromTo(serviceCards,
      { opacity: 0, y: 60, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }

  // Part categories animation
  const partCategories = document.querySelectorAll('.part-category');
  if (partCategories.length > 0) {
    gsap.fromTo(partCategories,
      { opacity: 0, y: 70 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.parts-categories',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }

  // Timeline items animation
  const timelineItems = document.querySelectorAll('.timeline-item');
  if (timelineItems.length > 0) {
    timelineItems.forEach((item, index) => {
      const direction = index % 2 === 0 ? -50 : 50;
      gsap.fromTo(item,
        { opacity: 0, x: direction },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
  }

  // Gallery items animation
  const galleryItems = document.querySelectorAll('.gallery-item');
  if (galleryItems.length > 0) {
    gsap.fromTo(galleryItems,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.gallery-grid',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }

  // Spec items animation
  const specItems = document.querySelectorAll('.spec-item');
  if (specItems.length > 0) {
    gsap.fromTo(specItems,
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.specs-grid',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }
}

// ========================================
// PARTICLES SYSTEM
// ========================================
function initParticles() {
  const container = document.querySelector('.hero-particles');
  if (!container) return;

  const particleCount = 30;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random properties
    const size = Math.random() * 4 + 2;
    const left = Math.random() * 100;
    const delay = Math.random() * 15;
    const duration = Math.random() * 10 + 10;
    
    particle.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${left}%;
      animation-delay: ${delay}s;
      animation-duration: ${duration}s;
    `;
    
    container.appendChild(particle);
  }
}

// ========================================
// MOBILE MENU
// ========================================
function initMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const mobileNav = document.querySelector('.mobile-nav');

  if (!menuBtn || !mobileNav) return;

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    mobileNav.classList.toggle('active');
  });

  // Close menu when clicking a link
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.classList.remove('active');
      mobileNav.classList.remove('active');
    });
  });
}

// ========================================
// COUNTER ANIMATION
// ========================================
function initCounters() {
  const counters = document.querySelectorAll('.stat-number[data-count]');
  if (counters.length === 0) return;

  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-count'));
    const suffix = counter.getAttribute('data-suffix') || '';
    const prefix = counter.getAttribute('data-prefix') || '';

    ScrollTrigger.create({
      trigger: counter,
      start: 'top 85%',
      onEnter: () => {
        gsap.to(counter, {
          innerHTML: target,
          duration: 2,
          ease: 'power2.out',
          snap: { innerHTML: 1 },
          onUpdate: function() {
            counter.innerHTML = prefix + Math.round(this.targets()[0].innerHTML) + suffix;
          }
        });
      },
      once: true
    });
  });
}

// ========================================
// PARALLAX EFFECTS
// ========================================
function initParallax() {
  // Hero parallax
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    gsap.to(heroBg, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
  }

  // Hero car parallax
  const heroCar = document.querySelector('.hero-car');
  if (heroCar) {
    gsap.to(heroCar, {
      yPercent: -20,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
  }

  // About image parallax
  const aboutImage = document.querySelector('.about-image');
  if (aboutImage) {
    gsap.to(aboutImage, {
      yPercent: -15,
      ease: 'none',
      scrollTrigger: {
        trigger: '.about-hero',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  }
}

// ========================================
// GLITCH EFFECT
// ========================================
function initGlitchEffect() {
  const glitchElements = document.querySelectorAll('.glitch');
  
  glitchElements.forEach(el => {
    el.setAttribute('data-text', el.textContent);
  });
}

// ========================================
// MAGNETIC BUTTONS
// ========================================
function initMagneticButtons() {
  const buttons = document.querySelectorAll('.btn, .nav-cta, .car-btn');
  
  buttons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      gsap.to(btn, {
        x: x * 0.2,
        y: y * 0.2,
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)'
      });
    });
  });
}

// ========================================
// CUSTOM CURSOR EFFECT
// ========================================
function initCursorEffect() {
  // Skip on touch devices
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    border: 2px solid var(--toyota-red);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.1s ease, width 0.3s ease, height 0.3s ease;
    mix-blend-mode: difference;
  `;
  document.body.appendChild(cursor);

  const cursorDot = document.createElement('div');
  cursorDot.className = 'cursor-dot';
  cursorDot.style.cssText = `
    position: fixed;
    width: 6px;
    height: 6px;
    background: var(--toyota-red);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
  `;
  document.body.appendChild(cursorDot);

  document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
      x: e.clientX - 10,
      y: e.clientY - 10,
      duration: 0.1
    });
    gsap.to(cursorDot, {
      x: e.clientX - 3,
      y: e.clientY - 3,
      duration: 0.05
    });
  });

  // Expand cursor on hoverable elements
  const hoverables = document.querySelectorAll('a, button, .car-card, .service-card, .part-category');
  hoverables.forEach(el => {
    el.addEventListener('mouseenter', () => {
      gsap.to(cursor, {
        width: 50,
        height: 50,
        x: '-=15',
        y: '-=15',
        duration: 0.3
      });
    });
    el.addEventListener('mouseleave', () => {
      gsap.to(cursor, {
        width: 20,
        height: 20,
        x: '+=15',
        y: '+=15',
        duration: 0.3
      });
    });
  });
}

// ========================================
// TYPING EFFECT
// ========================================
function initTypingEffect() {
  const typingElements = document.querySelectorAll('.typing-effect');
  
  typingElements.forEach(el => {
    const text = el.textContent;
    el.textContent = '';
    el.style.opacity = 1;
    
    let i = 0;
    const typeChar = () => {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
        setTimeout(typeChar, 50);
      }
    };

    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      onEnter: typeChar,
      once: true
    });
  });
}

// ========================================
// 3D CARD TILT EFFECT
// ========================================
function init3DCardTilt() {
  const cards = document.querySelectorAll('.car-card, .service-card, .part-category');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        transformPerspective: 1000,
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
        ease: 'power2.out'
      });
    });
  });
}

// ========================================
// WAVE ANIMATION
// ========================================
function initWaveAnimation() {
  const waveElements = document.querySelectorAll('.wave-text');
  
  waveElements.forEach(el => {
    const text = el.textContent;
    el.innerHTML = '';
    
    text.split('').forEach((char, i) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.display = 'inline-block';
      span.style.animation = `wave 1s ease-in-out infinite`;
      span.style.animationDelay = `${i * 0.05}s`;
      el.appendChild(span);
    });
  });
}

// Add wave keyframes to stylesheet
const waveStyle = document.createElement('style');
waveStyle.textContent = `
  @keyframes wave {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
`;
document.head.appendChild(waveStyle);

// ========================================
// TEXT SCRAMBLE EFFECT
// ========================================
class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.update = this.update.bind(this);
  }

  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => this.resolve = resolve);
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="scramble-char">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

// Apply scramble effect to elements
document.querySelectorAll('.scramble-text').forEach(el => {
  const fx = new TextScramble(el);
  const originalText = el.textContent;
  
  el.addEventListener('mouseenter', () => {
    fx.setText(originalText);
  });
});

// ========================================
// SMOOTH SCROLL WITH LENIS (if available)
// ========================================
if (typeof Lenis !== 'undefined') {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // Connect Lenis to GSAP ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
}

// ========================================
// INTERSECTION OBSERVER FALLBACK
// ========================================
if (!window.gsap) {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
    observer.observe(el);
  });
}

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================
// Pause animations when tab is not visible
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    gsap.globalTimeline.pause();
  } else {
    gsap.globalTimeline.resume();
  }
});

// Reduce motion for users who prefer it
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  gsap.globalTimeline.timeScale(0);
  document.querySelectorAll('.particle').forEach(p => p.style.display = 'none');
}
setTimeout(() => {
  const preloader = document.querySelector('.preloader');
  if (preloader) preloader.style.display = 'none';
}, 3000);
