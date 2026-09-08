// Marks the current page in the navigation so it can be styled and announced.
document.querySelectorAll('nav.site a').forEach((link) => {
  const here = location.pathname.split('/').pop() || 'index.html';
  if (link.getAttribute('href') === here) link.setAttribute('aria-current', 'page');
});
