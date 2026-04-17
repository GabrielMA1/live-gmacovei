/**
 * GMACOVEI.COM - ANIMATIONS & INTERACTIONS
 * Pure Vanilla JavaScript - No Frameworks
 */

(function() {
    'use strict';

    // ============================================
    // DOM ELEMENTS
    // ============================================
    const navbar = document.querySelector('.navbar');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const revealElements = document.querySelectorAll('.about, .companies, .contact, .footer');
    const cards3D = document.querySelectorAll('.card-3d');

    // ============================================
    // NAVIGATION
    // ============================================
    
    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navToggle && navToggle.classList.contains('active')) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Navbar background on scroll
    let lastScrollY = window.scrollY;
    let ticking = false;

    function updateNavbar() {
        const scrollY = window.scrollY;
        
        if (scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 15, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(10, 10, 15, 0.9)';
            navbar.style.boxShadow = 'none';
        }
        
        lastScrollY = scrollY;
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    }, { passive: true });

    // ============================================
    // SCROLL REVEAL ANIMATION
    // ============================================
    
    // Intersection Observer for scroll reveal
    const revealObserverOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                
                // Animate child elements with stagger
                const children = entry.target.querySelectorAll('.about-text, .about-philosophy, .company-card, .form-group, .submit-btn');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.style.opacity = '1';
                        child.style.transform = 'translateY(0)';
                    }, index * 100);
                });
                
                observer.unobserve(entry.target);
            }
        });
    }, revealObserverOptions);

    // Initialize reveal animations
    function initRevealAnimations() {
        // Add initial styles to elements
        const aboutTexts = document.querySelectorAll('.about-text, .about-philosophy');
        aboutTexts.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });

        const companyCards = document.querySelectorAll('.company-card');
        companyCards.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(40px)';
            el.style.transition = `opacity 0.7s ease ${index * 0.15}s, transform 0.7s ease ${index * 0.15}s`;
        });

        const formElements = document.querySelectorAll('.form-group, .submit-btn');
        formElements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        });

        // Observe sections
        revealElements.forEach(el => {
            el.classList.add('reveal-section');
            revealObserver.observe(el);
        });
    }

    // Custom reveal observer callback
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const section = entry.target;
                
                // Reveal about section elements
                if (section.classList.contains('about')) {
                    const texts = section.querySelectorAll('.about-text, .about-philosophy');
                    texts.forEach((el, i) => {
                        setTimeout(() => {
                            el.style.opacity = '1';
                            el.style.transform = 'translateY(0)';
                        }, i * 150);
                    });
                }
                
                // Reveal companies section elements
                if (section.classList.contains('companies')) {
                    const cards = section.querySelectorAll('.company-card');
                    cards.forEach((el, i) => {
                        setTimeout(() => {
                            el.style.opacity = '1';
                            el.style.transform = 'translateY(0)';
                        }, i * 200);
                    });
                }
                
                // Reveal contact section elements
                if (section.classList.contains('contact')) {
                    const formGroups = section.querySelectorAll('.form-group');
                    formGroups.forEach((el, i) => {
                        setTimeout(() => {
                            el.style.opacity = '1';
                            el.style.transform = 'translateY(0)';
                        }, i * 100);
                    });
                    const submitBtn = section.querySelector('.submit-btn');
                    if (submitBtn) {
                        setTimeout(() => {
                            submitBtn.style.opacity = '1';
                            submitBtn.style.transform = 'translateY(0)';
                        }, formGroups.length * 100 + 100);
                    }
                }
                
                // Reveal footer
                if (section.classList.contains('footer')) {
                    section.style.opacity = '1';
                }
                
                sectionObserver.unobserve(section);
            }
        });
    }, { threshold: 0.1 });

    // ============================================
    // 3D CARD TILT EFFECT
    // ============================================
    
    function init3DCardTilt() {
        // Skip on touch devices
        if (window.matchMedia('(pointer: coarse)').matches) return;

        cards3D.forEach(card => {
            card.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
            });

            card.addEventListener('mouseleave', function() {
                this.style.transform = '';
            });
        });
    }

    // ============================================
    // PARALLAX EFFECT FOR HERO
    // ============================================
    
    function initParallax() {
        // Skip on touch devices and reduced motion preference
        if (window.matchMedia('(pointer: coarse)').matches || 
            window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const hero = document.querySelector('.hero');
        const cardsContainer = document.querySelector('.cards-3d-container');
        
        if (!hero || !cardsContainer) return;

        window.addEventListener('scroll', function() {
            const scrollY = window.scrollY;
            const heroHeight = hero.offsetHeight;
            
            if (scrollY < heroHeight) {
                const parallaxValue = scrollY * 0.3;
                cardsContainer.style.transform = `translateY(${parallaxValue}px)`;
            }
        }, { passive: true });
    }

    // ============================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================
    
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const navbarHeight = navbar ? navbar.offsetHeight : 0;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ============================================
    // FORM INTERACTIONS
    // ============================================
    
    function initFormInteractions() {
        const form = document.querySelector('.contact-form');
        const inputs = document.querySelectorAll('.form-group input, .form-group textarea');
        
        // Add focus effects
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.classList.remove('focused');
            });
        });

        // Form submission feedback
        if (form) {
            form.addEventListener('submit', function(e) {
                const submitBtn = this.querySelector('.submit-btn');
                if (submitBtn) {
                    submitBtn.textContent = 'Sending...';
                    submitBtn.disabled = true;
                    
                    // Reset button after submission (Formspree will handle the actual submission)
                    setTimeout(() => {
                        submitBtn.textContent = 'Send Message';
                        submitBtn.disabled = false;
                    }, 3000);
                }
            });
        }
    }

    // ============================================
    // MOUSE GLOW EFFECT FOR CARDS
    // ============================================
    
    function initMouseGlow() {
        // Skip on touch devices
        if (window.matchMedia('(pointer: coarse)').matches) return;

        const companyCards = document.querySelectorAll('.company-card');
        
        companyCards.forEach(card => {
            card.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                
                this.style.setProperty('--mouse-x', `${x}%`);
                this.style.setProperty('--mouse-y', `${y}%`);
            });
        });
    }

    // ============================================
    // TYPING EFFECT FOR HERO (Optional Enhancement)
    // ============================================
    
    function initTypingEffect() {
        // Skip if reduced motion is preferred
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const heroTitle = document.querySelector('.hero-title');
        if (!heroTitle) return;

        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.opacity = '1';
        
        let i = 0;
        const typeInterval = setInterval(() => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typeInterval);
            }
        }, 50);
    }

    // ============================================
    // PERFORMANCE: RAF THROTTLING
    // ============================================
    
    function throttleRAF(callback) {
        let ticking = false;
        return function() {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    callback.apply(this, arguments);
                    ticking = false;
                });
                ticking = true;
            }
        };
    }

    // ============================================
    // INITIALIZATION
    // ============================================
    
    function init() {
        // Initialize all components
        initRevealAnimations();
        init3DCardTilt();
        initParallax();
        initSmoothScroll();
        initFormInteractions();
        initMouseGlow();
        
        // Observe sections for scroll reveal
        revealElements.forEach(el => {
            sectionObserver.observe(el);
        });

        // Add loaded class to body for CSS transitions
        document.body.classList.add('loaded');
        
        console.log('🚀 GMACOVEI.COM loaded successfully');
    }

    // Run initialization when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Handle resize events
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            // Recalculate any position-dependent elements
            init3DCardTilt();
        }, 250);
    }, { passive: true });

})();
