/**
 * Navigation Bar Component
 */
import { personalInfo } from '../data.js';

export function renderNavbar(containerId = 'navbar-root') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <header class="fixed top-0 left-0 right-0 z-50 bg-[#0B0F17]/85 backdrop-blur-md border-b border-slate-800/80 transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        <!-- Brand / Identity -->
        <a href="#hero" class="flex items-center space-x-3 group">
          <div class="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center p-1.5 shadow-md group-hover:border-cyan-500/60 transition">
            <img src="favicon.svg" alt="MA Logo" class="w-full h-full" />
          </div>
          <div>
            <div class="font-bold text-slate-100 tracking-tight text-base sm:text-lg group-hover:text-cyan-400 transition flex items-center gap-1.5">
              <span>${personalInfo.name}</span>
              <span class="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            </div>
            <div class="text-[11px] text-slate-400 font-mono tracking-tight hidden sm:block">
              Communication & Electronics Engineer
            </div>
          </div>
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="hidden md:flex items-center space-x-1 lg:space-x-2">
          <a href="#about" class="nav-link px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-cyan-400 rounded-lg hover:bg-slate-900/60 transition">About</a>
          <a href="#skills" class="nav-link px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-cyan-400 rounded-lg hover:bg-slate-900/60 transition">Technical Arsenal</a>
          <a href="#projects" class="nav-link px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-cyan-400 rounded-lg hover:bg-slate-900/60 transition">Projects</a>
          <a href="#workflow" class="nav-link px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-cyan-400 rounded-lg hover:bg-slate-900/60 transition">Workflow</a>
          <a href="#contact" class="nav-link px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-cyan-400 rounded-lg hover:bg-slate-900/60 transition">Contact</a>
        </nav>

        <!-- Right Action Button & Mobile Toggle -->
        <div class="flex items-center space-x-3">
          <a 
            href="#contact" 
            class="hidden sm:inline-flex items-center space-x-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-md shadow-cyan-950/40 transition"
          >
            <span class="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            <span>Let's Talk</span>
          </a>

          <!-- Mobile Hamburger Button -->
          <button 
            id="mobile-menu-btn" 
            aria-label="Toggle Navigation Menu" 
            class="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
          >
            <svg id="menu-icon-open" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
            <svg id="menu-icon-close" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Dropdown Menu -->
      <div id="mobile-menu" class="hidden md:hidden border-b border-slate-800 bg-[#0B0F17]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2">
        <a href="#about" class="mobile-nav-link block px-3 py-2 text-base font-medium text-slate-200 hover:text-cyan-400 rounded-lg hover:bg-slate-900">About</a>
        <a href="#skills" class="mobile-nav-link block px-3 py-2 text-base font-medium text-slate-200 hover:text-cyan-400 rounded-lg hover:bg-slate-900">Technical Arsenal</a>
        <a href="#projects" class="mobile-nav-link block px-3 py-2 text-base font-medium text-slate-200 hover:text-cyan-400 rounded-lg hover:bg-slate-900">Projects</a>
        <a href="#workflow" class="mobile-nav-link block px-3 py-2 text-base font-medium text-slate-200 hover:text-cyan-400 rounded-lg hover:bg-slate-900">Workflow</a>
        <a href="#contact" class="mobile-nav-link block px-3 py-2 text-base font-medium text-slate-200 hover:text-cyan-400 rounded-lg hover:bg-slate-900">Contact</a>
        <div class="pt-3 border-t border-slate-800 flex flex-col gap-2">
          <a href="${personalInfo.cvPath}" download class="w-full text-center px-4 py-2 text-sm font-semibold rounded-lg bg-slate-800 border border-slate-700 text-slate-200 hover:text-white">
            Download CV
          </a>
          <a href="#contact" class="mobile-nav-link w-full text-center px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  `;

  // Mobile menu interactions
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const openIcon = document.getElementById('menu-icon-open');
  const closeIcon = document.getElementById('menu-icon-close');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  menuBtn?.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.contains('hidden');
    if (isHidden) {
      mobileMenu.classList.remove('hidden');
      openIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
    } else {
      mobileMenu.classList.add('hidden');
      openIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    }
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      openIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    });
  });

  // Active link scroll spy
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        current = id;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-cyan-400', 'bg-slate-900/60');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('text-cyan-400', 'bg-slate-900/60');
      }
    });
  }, { passive: true });
}
