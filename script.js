// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Dismissable "how to customize" banner
const banner = document.getElementById('howto-banner');
const closeBtn = document.getElementById('howto-close');
if (closeBtn) {
  closeBtn.addEventListener('click', () => banner.remove());
}

// Highlight nav link matching the section in view
const sections = document.querySelectorAll('main section[id], header[id]');
const navLinks = document.querySelectorAll('.nav__links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.style.opacity = link.getAttribute('href') === `#${id}` ? '1' : '0.65';
      });
    }
  });
}, { threshold: 0.5 });

sections.forEach(section => sectionObserver.observe(section));
