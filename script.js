const sidebar = document.querySelector('.sidebar');
const menu = document.querySelector('#menu');
const close = document.querySelector('#close');
const sidebarLinks = document.querySelectorAll('.sidebar a');

const overlay = document.createElement('div');
overlay.style.cssText = `
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.4);
    z-index: 9998;
    display: none;
`;
document.body.appendChild(overlay);

menu.addEventListener('click', () => {
    sidebar.style.display = 'flex';
    overlay.style.display = 'block';
});

close.addEventListener('click', () => {
    sidebar.style.display = 'none';
    overlay.style.display = 'none';
});

overlay.addEventListener('click', () => {
    sidebar.style.display = 'none';
    overlay.style.display = 'none';
});

sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        sidebar.style.display = 'none';
        overlay.style.display = 'none';
    });
});

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal, .reveal-rotate, .reveal-scale').forEach(el => observer.observe(el));