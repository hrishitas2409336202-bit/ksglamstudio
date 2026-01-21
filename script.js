// ===== GALLERY IMAGES AND VIDEOS =====
const galleryItems = {
    nailart: [
        { src: './photo-and-video/nailart1.jpeg', type: 'image' },
        { src: './photo-and-video/nailart2.jpeg', type: 'image' },
        { src: './photo-and-video/nailart3.jpeg', type: 'image' },
        { src: './photo-and-video/nailart4.jpeg', type: 'image' },
        { src: './photo-and-video/nailart5.jpeg', type: 'image' },
        { src: './photo-and-video/nailart6.jpeg', type: 'image' },
        { src: './photo-and-video/nailart7.JPG', type: 'image' }
    ],
    mehendi: [
        { src: './photo-and-video/mehendi.jpeg', type: 'image' },
        { src: './photo-and-video/mehendi-photo1.jpeg', type: 'image' },
        { src: './photo-and-video/mehendi-photo2.jpeg', type: 'image' },
        { src: './photo-and-video/mehendi-photo3.jpeg', type: 'image' },
        { src: './photo-and-video/mehendi-photo4.jpeg', type: 'image' },
        { src: './photo-and-video/mehendi-video1.mp4', type: 'video' },
        { src: './photo-and-video/mehendi-video2.mp4', type: 'video' },
        { src: './photo-and-video/mehendi-video3.mp4', type: 'video' },
        { src: './photo-and-video/mehendi-video4.mp4', type: 'video' }
    ]
};

// ===== LOADER =====
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 1500);
});

// ===== CLOSE BANNER =====
function closeBanner() {
    const banner = document.getElementById('republic-banner');
    if (banner) {
        banner.classList.add('hidden');
    }
}

// ===== COUNTDOWN TIMER - REPUBLIC DAY =====
function updateCountdown() {
    // Republic Day 2026 date
    const republicDate = new Date('January 26, 2026 06:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = republicDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');

        if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
        if (secondsEl) {
            secondsEl.textContent = String(seconds).padStart(2, '0');
            // Add pulse effect on seconds change
            secondsEl.style.transform = 'scale(1.1)';
            setTimeout(() => secondsEl.style.transform = 'scale(1)', 100);
        }
    } else {
        // It's Republic Day!
        const container = document.getElementById('countdown-container');
        if (container) {
            container.innerHTML = '<p style="color: #FF9933; font-size: 1.3rem;">🇮🇳 Happy Republic Day! Book your patriotic look today! 🇮🇳</p>';
        }
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

// ===== BANNER FLAGS ANIMATION =====
function createBannerFlag() {
    const container = document.getElementById('banner-flags');
    if (!container) return;

    const flag = document.createElement('div');
    const flagSymbols = ['★', '✦', '◆', '✧', '●'];
    const colors = ['#FF9933', '#FFFFFF', '#138808', '#000080', '#FFD700'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    if (Math.random() > 0.5) {
        flag.innerHTML = flagSymbols[Math.floor(Math.random() * flagSymbols.length)];
        flag.style.color = randomColor;
    } else {
        flag.innerHTML = '★';
        flag.style.color = randomColor;
    }

    flag.style.cssText = `
        position: absolute;
        font-size: ${10 + Math.random() * 14}px;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        pointer-events: none;
        animation: flagTwinkle ${1.5 + Math.random() * 2}s ease-in-out infinite;
        animation-delay: ${Math.random() * 2}s;
        filter: drop-shadow(1px 1px 2px rgba(0,0,0,0.3));
    `;
    container.appendChild(flag);
}

// Create initial flags for banner
for (let i = 0; i < 12; i++) {
    createBannerFlag();
}

// Add flag twinkle animation
const flagStyles = document.createElement('style');
flagStyles.textContent = `
    @keyframes flagTwinkle {
        0%, 100% { opacity: 0.4; transform: translateY(0) rotate(-5deg); }
        50% { opacity: 1; transform: translateY(-3px) rotate(5deg); }
    }
`;
document.head.appendChild(flagStyles);

// ===== MOBILE MENU =====
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mainNav = document.getElementById('main-nav');

if (mobileMenuToggle && mainNav) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        mainNav.classList.toggle('active');
        mobileMenuToggle.setAttribute('aria-expanded',
            mobileMenuToggle.classList.contains('active'));
    });

    // Close menu when clicking a link
    mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            mainNav.classList.remove('active');
        });
    });
}

// ===== HEADER SCROLL EFFECT =====
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// ===== SCROLL TO TOP =====
const scrollToTopBtn = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ===== SCROLL REVEAL ANIMATIONS =====
const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

revealElements.forEach(el => revealObserver.observe(el));

// ===== SCROLL DOWN INDICATOR =====
const scrollIndicator = document.querySelector('.hero-scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        const nextSection = document.querySelector('.republic-offer') || document.querySelector('.stats-section');
        if (nextSection) {
            const headerHeight = document.querySelector('.main-header').offsetHeight;
            const targetPosition = nextSection.offsetTop - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
}

// ===== STATS COUNTER ANIMATION =====
const statNumbers = document.querySelectorAll('.stat-number');
let statsAnimated = false;

const animateStats = () => {
    if (statsAnimated) return;

    statNumbers.forEach(stat => {
        const target = parseInt(stat.dataset.target);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += step;
            if (current < target) {
                stat.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                stat.textContent = target;
            }
        };

        updateCounter();
    });

    statsAnimated = true;
};

const statsSection = document.querySelector('.stats-section');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
            }
        });
    }, { threshold: 0.3 });

    statsObserver.observe(statsSection);
}

// ===== GALLERY =====
function loadGallery(type) {
    const container = document.getElementById('gallery-grid');
    if (!container) return;

    container.innerHTML = '';

    galleryItems[type].forEach((item, index) => {
        let element;

        if (item.type === 'video') {
            // Create video element
            element = document.createElement('video');
            element.src = item.src;
            element.autoplay = true;
            element.loop = true;
            element.muted = true;
            element.playsInline = true;
            element.setAttribute('aria-label', `${type.charAt(0).toUpperCase() + type.slice(1)} Video ${index + 1}`);
        } else {
            // Create image element
            element = document.createElement('img');
            element.src = item.src;
            element.alt = `${type.charAt(0).toUpperCase() + type.slice(1)} Design ${index + 1}`;
            element.loading = 'lazy';
        }

        element.style.animationDelay = `${index * 0.1}s`;
        element.classList.add('reveal-up');
        element.addEventListener('click', () => showModal(item.src, item.type));
        container.appendChild(element);

        // Trigger animation
        setTimeout(() => element.classList.add('active'), 100);
    });
}


// ===== IMAGE/VIDEO MODAL =====
function showModal(src, type = 'image') {
    // Remove existing modal
    const existingModal = document.getElementById('image-modal');
    if (existingModal) existingModal.remove();

    // Create modal
    const modal = document.createElement('div');
    modal.id = 'image-modal';
    modal.style.cssText = `
        position: fixed; inset: 0; background: rgba(0,0,0,0.9);
        display: flex; align-items: center; justify-content: center;
        z-index: 10000; animation: fadeIn 0.3s ease;
    `;

    // Close button
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.cssText = `
        position: absolute; top: 20px; right: 30px;
        font-size: 3rem; color: #fff; background: none;
        border: none; cursor: pointer; z-index: 10001;
    `;
    closeBtn.addEventListener('click', () => modal.remove());

    // Create media element (image or video)
    let mediaElement;
    if (type === 'video') {
        mediaElement = document.createElement('video');
        mediaElement.src = src;
        mediaElement.controls = true;
        mediaElement.autoplay = true;
        mediaElement.style.cssText = `
            max-width: 90vw; max-height: 85vh; border-radius: 1rem;
            box-shadow: 0 20px 60px rgba(0,0,0,0.5);
            animation: zoomIn 0.3s ease;
        `;
    } else {
        mediaElement = document.createElement('img');
        mediaElement.src = src;
        mediaElement.style.cssText = `
            max-width: 90vw; max-height: 85vh; border-radius: 1rem;
            box-shadow: 0 20px 60px rgba(0,0,0,0.5);
            animation: zoomIn 0.3s ease;
        `;
    }

    modal.appendChild(closeBtn);
    modal.appendChild(mediaElement);
    document.body.appendChild(modal);

    // Close on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });

    // Close on Escape key
    document.addEventListener('keydown', function escHandler(e) {
        if (e.key === 'Escape') {
            modal.remove();
            document.removeEventListener('keydown', escHandler);
        }
    });
}

// Add modal animations
const modalStyles = document.createElement('style');
modalStyles.textContent = `
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes zoomIn { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }
`;
document.head.appendChild(modalStyles);

// ===== FILTER BUTTONS =====
document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            filterBtns.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-pressed', 'false');
            });
            this.classList.add('active');
            this.setAttribute('aria-pressed', 'true');
            loadGallery(this.dataset.filter);
        });
    });

    // Load default gallery
    loadGallery('nailart');
});

// ===== FORM HANDLING =====
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const phone = '919326303630';
        const name = document.getElementById('name').value;
        const userphone = document.getElementById('phone').value;
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value;
        const phoneError = document.getElementById('phone-error');

        // Validate phone number
        if (!/^[6-9][0-9]{9}$/.test(userphone)) {
            phoneError.textContent = 'Please enter a valid 10-digit Indian mobile number (starting with 6, 7, 8, or 9).';
            phoneError.style.display = 'block';
            document.getElementById('phone').focus();
            return;
        } else {
            phoneError.style.display = 'none';
        }

        // Build WhatsApp message
        const text = `New Booking Request!%0A` +
            `Name: ${encodeURIComponent(name)}%0A` +
            `Phone: ${encodeURIComponent(userphone)}%0A` +
            `Service: ${encodeURIComponent(service)}%0A` +
            `Message: ${encodeURIComponent(message)}`;

        const waUrl = `https://wa.me/${phone}?text=${text}`;
        window.open(waUrl, '_blank');

        // Show success message
        const formMessage = document.getElementById('form-message');
        formMessage.textContent = '✓ Redirecting to WhatsApp...';
        formMessage.style.display = 'block';

        // Reset form after delay
        setTimeout(() => {
            contactForm.reset();
            formMessage.style.display = 'none';
        }, 3000);
    });
}

// ===== FESTIVE DECORATIONS REMOVED =====
// Keeping the website clean without flying animations
// The festive theme is visible through the banner and offer section

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.main-header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== BUTTON RIPPLE EFFECT =====
document.querySelectorAll('.btn-ripple').forEach(button => {
    button.addEventListener('click', function (e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute; background: rgba(255,255,255,0.4);
            border-radius: 50%; transform: scale(0);
            animation: rippleEffect 0.6s linear;
            left: ${x}px; top: ${y}px;
            width: 100px; height: 100px;
            margin-left: -50px; margin-top: -50px;
            pointer-events: none;
        `;

        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
const rippleStyles = document.createElement('style');
rippleStyles.textContent = `
    @keyframes rippleEffect {
        to { transform: scale(4); opacity: 0; }
    }
`;
document.head.appendChild(rippleStyles);

console.log('🇮🇳 KS Glam Studio - Republic Day Special Edition! Jai Hind! 🇮🇳');
