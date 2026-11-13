/**
 * Mohamed Ahmed Portfolio — Main Application Entry Point
 */
import { initCircuitCanvas } from './components/circuitCanvas.js';
import { renderNavbar } from './components/navbar.js';
import { renderHero } from './components/hero.js';
import { renderAbout } from './components/about.js';
import { renderSkills } from './components/skills.js';
import { renderProjects } from './components/projects.js';
import { renderWorkflow } from './components/workflow.js';
import { renderContact } from './components/contact.js';
import { renderFooter } from './components/footer.js';
import { initProjectModal } from './components/modal.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Circuit Background Grid
  initCircuitCanvas('circuit-bg');

  // 2. Render Component Tree
  renderNavbar('navbar-root');
  renderHero('hero-root');
  renderAbout('about-root');
  renderSkills('skills-root');
  renderProjects('projects-root');
  renderWorkflow('workflow-root');
  renderContact('contact-root');
  renderFooter('footer-root');

  // 3. Initialize Modal System
  initProjectModal();

  // 4. Smooth Anchor Link Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = 76;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Log successful initialization
  console.log('%c Mohamed Ahmed // Portfolio Initialized ', 'background: #0284c7; color: #ffffff; font-weight: bold; padding: 4px 8px; border-radius: 4px;');
});
