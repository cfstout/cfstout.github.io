// Main JavaScript for Clayton Stout's Portfolio Website

document.addEventListener('DOMContentLoaded', function() {
    // Theme toggler
    setupThemeToggle();

    // Mobile menu toggle
    setupMobileMenu();

    // Navigation scroll effect
    setupNavScrollEffect();

    // Smooth scrolling for anchor links
    setupSmoothScrolling();

    // Set active navigation link
    setActiveNavLink();

    // Contact form validation (if exists)
    setupContactForm();

    // Animation on scroll for elements
    setupScrollAnimations();
});

// Set or get theme from localStorage
function setupThemeToggle() {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');

    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Set initial theme
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (prefersDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
}

// Mobile menu functionality
function setupMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (navLinks.classList.contains('active') &&
                !event.target.closest('.nav-links') &&
                !event.target.closest('.mobile-menu-btn')) {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }
}

// Navigation scroll effect
function setupNavScrollEffect() {
    const nav = document.querySelector('nav');

    if (nav) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
    }
}

// Smooth scrolling for anchor links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            e.preventDefault();

            const target = document.querySelector(targetId);
            if (target) {
                // Close mobile menu if open
                document.querySelector('.nav-links')?.classList.remove('active');
                document.querySelector('.mobile-menu-btn')?.classList.remove('active');

                // Scroll to target
                window.scrollTo({
                    top: target.offsetTop - 100, // Adjust for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Set active navigation link based on current page
function setActiveNavLink() {
    const currentPath = window.location.pathname;

    document.querySelectorAll('.nav-links a').forEach(link => {
        const linkPath = new URL(link.href).pathname;

        // Check if current path matches the link or is a child path
        if (currentPath === linkPath ||
            (linkPath !== '/' && currentPath.startsWith(linkPath))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Contact form validation
function setupContactForm() {
    const contactForm = document.querySelector('form.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            let isValid = true;
            const formData = new FormData(contactForm);

            // Simple validation
            for (const [key, value] of formData.entries()) {
                const input = contactForm.querySelector(`[name="${key}"]`);
                const formGroup = input.closest('.form-group');

                if (value.trim() === '') {
                    isValid = false;
                    formGroup.classList.add('error');

                    // Create error message if it doesn't exist
                    if (!formGroup.querySelector('.error-message')) {
                        const errorMessage = document.createElement('div');
                        errorMessage.className = 'error-message';
                        errorMessage.textContent = 'This field is required';
                        formGroup.appendChild(errorMessage);
                    }
                } else {
                    formGroup.classList.remove('error');
                    const errorMessage = formGroup.querySelector('.error-message');
                    if (errorMessage) {
                        errorMessage.remove();
                    }
                }

                // Email validation
                if (key === 'email' && value.trim() !== '') {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(value)) {
                        isValid = false;
                        formGroup.classList.add('error');

                        const errorMessage = formGroup.querySelector('.error-message') || document.createElement('div');
                        errorMessage.className = 'error-message';
                        errorMessage.textContent = 'Please enter a valid email address';

                        if (!formGroup.querySelector('.error-message')) {
                            formGroup.appendChild(errorMessage);
                        }
                    }
                }
            }

            if (isValid) {
                // Here you would normally send the form to a server
                // For now, just show a success message
                contactForm.style.display = 'none';

                const successMessage = document.createElement('div');
                successMessage.className = 'form-success';
                successMessage.innerHTML = `
          <h3>Message Sent!</h3>
          <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
          <button class="btn primary" id="send-another">Send Another Message</button>
        `;

                contactForm.parentElement.appendChild(successMessage);

                document.getElementById('send-another').addEventListener('click', function() {
                    successMessage.remove();
                    contactForm.reset();
                    contactForm.style.display = 'block';
                });
            }
        });

        // Clear error state on input
        contactForm.querySelectorAll('input, textarea').forEach(field => {
            field.addEventListener('input', function() {
                const formGroup = this.closest('.form-group');
                formGroup.classList.remove('error');

                const errorMessage = formGroup.querySelector('.error-message');
                if (errorMessage) {
                    errorMessage.remove();
                }
            });
        });
    }
}

// Animate elements on scroll
function setupScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }
}
