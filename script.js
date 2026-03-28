// Scroll reveal for sections
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

sections.forEach(s => observer.observe(s));

// Active TOC link highlighting
const tocLinks = document.querySelectorAll('.toc a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      tocLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${id}`
          ? 'var(--dust)'
          : '';
      });
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('section[id]').forEach(s => sectionObserver.observe(s));

const toc = document.querySelector('.toc-wrapper');
const paper = document.querySelector('.paper');
const body = document.querySelector('.body-text');

window.addEventListener('scroll', () => {
  const tocBottom = toc.getBoundingClientRect().bottom;
  if (tocBottom < 0) {
    toc.style.opacity = '0';
    toc.style.pointerEvents = 'none';
    // body.style.marginLeft = '-200px'; /* negative margin pulls it into TOC space */
    // body.style.maxWidth = '900px';
  } else {
    toc.style.opacity = '1';
    toc.style.pointerEvents = 'auto';
    // body.style.marginLeft = '0';
    // body.style.maxWidth = '720px';
  }
});