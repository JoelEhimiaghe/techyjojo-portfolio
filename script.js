const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.textContent = isOpen ? '✕' : '☰';
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = '☰';
  });
});

const escapeHTML = (value = '') => String(value).replace(/[&<>"']/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[char]));

function renderProject(project) {
  const statusLabels = {
    completed: 'COMPLETED',
    'in-progress': 'IN DEVELOPMENT',
    planned: 'PLANNED'
  };
  const status = statusLabels[project.status] || 'PROJECT';
  const isCompleted = project.status === 'completed';
  const imageMarkup = (project.images || []).map((image) =>
    `<img class="case-image" src="${escapeHTML(image)}" alt="${escapeHTML(project.imageAlt || project.title)}" loading="lazy">`
  ).join('');
  const toolsMarkup = (project.tools || []).map((tool) => `<span>${escapeHTML(tool)}</span>`).join('');
  const highlightsMarkup = (project.highlights || []).map((item) => `<li>${escapeHTML(item)}</li>`).join('');
  const evidenceMarkup = [
    project.video ? `<a class="text-link" href="${escapeHTML(project.video)}" target="_blank" rel="noreferrer">Watch demonstration ↗</a>` : '',
    project.repository ? `<a class="text-link" href="${escapeHTML(project.repository)}" target="_blank" rel="noreferrer">View source code ↗</a>` : '',
    project.demoContact ? `<a class="text-link" href="${escapeHTML(project.demoContact)}">Request a walkthrough ↗</a>` : ''
  ].filter(Boolean).join('');

  return `<article class="project-card ${isCompleted ? 'featured-project' : 'upcoming-card'}">
    <div class="project-info">
      <div class="project-meta"><span>${escapeHTML(project.category || 'AUTOMATION PROJECT')}</span><span class="project-status ${escapeHTML(project.status)}"><i></i> ${status}</span></div>
      <h3>${escapeHTML(project.title)}</h3>
      <p>${escapeHTML(project.summary || '')}</p>
      <div class="tech-list">${toolsMarkup}</div>
      ${imageMarkup ? `<div class="case-images">${imageMarkup}</div>` : ''}
      ${isCompleted ? `<details class="project-details"><summary>Explore project details</summary>
        ${project.problem ? `<h4>The problem</h4><p>${escapeHTML(project.problem)}</p>` : ''}
        ${project.solution ? `<h4>The solution</h4><p>${escapeHTML(project.solution)}</p>` : ''}
        ${highlightsMarkup ? `<h4>What the workflow does</h4><ul>${highlightsMarkup}</ul>` : ''}
        ${project.note ? `<p class="project-note">${escapeHTML(project.note)}</p>` : ''}
        <div class="project-links">${evidenceMarkup}</div>
      </details>` : `<p class="upcoming-state">${escapeHTML(project.note || status)}</p>`}
    </div>
  </article>`;
}

const projectsList = document.getElementById('projects-list');
if (projectsList && Array.isArray(window.PORTFOLIO_PROJECTS)) {
  projectsList.innerHTML = window.PORTFOLIO_PROJECTS.map(renderProject).join('');
}

document.getElementById('year').textContent = new Date().getFullYear();


// Gentle scroll reveals; content remains visible when motion is reduced or unsupported.
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduceMotion && 'IntersectionObserver' in window) {
  const revealTargets = document.querySelectorAll('.section-kicker, .section-heading, .two-col > div, .project-card, .service-card, .skill-item, .contact-panel');
  revealTargets.forEach((item) => item.classList.add('reveal'));
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach((item) => revealObserver.observe(item));
}

// Subtle pointer-responsive glow for desktop; no effect on touch devices.
const heroVisual = document.querySelector('.hero-visual');
if (heroVisual && window.matchMedia('(pointer: fine)').matches && !reduceMotion) {
  heroVisual.addEventListener('pointermove', (event) => {
    const bounds = heroVisual.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    const glow = heroVisual.querySelector('.visual-glow');
    if (glow) glow.style.translate = `${x * 22}px ${y * 18}px`;
  });
  heroVisual.addEventListener('pointerleave', () => {
    const glow = heroVisual.querySelector('.visual-glow');
    if (glow) glow.style.translate = '0 0';
  });
}
