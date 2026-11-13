/**
 * Project Case Study Modal Component
 */
import { projects } from '../data.js';
import { initPhishSimulator, initAluSimulator } from './simulators.js';

export function initProjectModal() {
  const modal = document.getElementById('project-modal');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalContainer = document.getElementById('modal-container');
  const modalClose = document.getElementById('modal-close');
  const modalContent = document.getElementById('modal-content');

  if (!modal) return;

  function closeModal() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }

  modalClose.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  window.openProjectModal = function(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    modalContent.innerHTML = `
      <div class="space-y-6">
        <!-- Header -->
        <div class="border-b border-slate-800 pb-5">
          <div class="flex flex-wrap items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-950/70 border border-cyan-800/60 text-cyan-400">
              ${project.category}
            </span>
            <span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-950/70 border border-blue-800/60 text-blue-300">
              ${project.badge}
            </span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-bold text-white tracking-tight">${project.title}</h2>
          <p class="text-slate-400 mt-2 text-sm sm:text-base leading-relaxed">${project.summary}</p>
        </div>

        <!-- Media Preview -->
        <div class="rounded-xl overflow-hidden border border-slate-800 bg-navy-950/60">
          <img src="${project.image}" alt="${project.title}" class="w-full h-auto max-h-[380px] object-contain mx-auto bg-slate-950/40 p-2" />
        </div>

        <!-- Verified Key Stats Grid -->
        <div>
          <h3 class="text-xs uppercase tracking-wider font-bold text-slate-400 mb-3">Verified Engineering Specifications</h3>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
            ${project.stats.map(s => `
              <div class="bg-slate-900/80 border border-slate-800 p-3 rounded-lg text-center">
                <div class="text-lg font-extrabold text-cyan-400">${s.value}</div>
                <div class="text-[11px] text-slate-400 font-medium mt-0.5">${s.label}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Deep-Dive Description -->
        <div>
          <h3 class="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2">Engineering Context & Methodology</h3>
          <p class="text-slate-300 text-sm leading-relaxed">${project.description}</p>
        </div>

        <!-- Key Engineering Highlights -->
        <div>
          <h3 class="text-xs uppercase tracking-wider font-bold text-slate-400 mb-3">Key Technical Highlights</h3>
          <ul class="space-y-2 text-sm text-slate-300">
            ${project.keyPoints.map(point => `
              <li class="flex items-start gap-2.5">
                <span class="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 text-[10px]">✓</span>
                <span class="leading-relaxed">${point}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- Live Simulator Container (If Available) -->
        ${project.hasLiveSimulator ? `
          <div class="mt-6 pt-4 border-t border-slate-800">
            <h3 class="text-xs uppercase tracking-wider font-bold text-cyan-400 mb-3 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              Interactive In-Browser Engineering Simulation
            </h3>
            <div id="modal-simulator-container"></div>
          </div>
        ` : ''}

        <!-- Secondary Diagram (If Available) -->
        ${project.secondaryImage ? `
          <div>
            <h3 class="text-xs uppercase tracking-wider font-bold text-slate-400 mb-3">Transistor Transient Simulation Waveform</h3>
            <div class="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 p-2">
              <img src="${project.secondaryImage}" alt="Waveform plot" class="w-full h-auto object-contain" />
            </div>
          </div>
        ` : ''}

        <!-- Technologies Used -->
        <div>
          <h3 class="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2">Technologies & Toolchains</h3>
          <div class="flex flex-wrap gap-2">
            ${project.technologies.map(t => `
              <span class="px-2.5 py-1 text-xs font-mono rounded bg-slate-800/90 text-cyan-300 border border-slate-700">
                ${t}
              </span>
            `).join('')}
          </div>
        </div>

        <!-- Modal Actions -->
        <div class="pt-4 border-t border-slate-800 flex flex-wrap gap-3 justify-end">
          <button 
            type="button" 
            onclick="document.getElementById('modal-close').click()" 
            class="px-5 py-2 text-sm rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 font-medium transition cursor-pointer"
          >
            Close Overview
          </button>
          <a 
            href="#contact" 
            onclick="document.getElementById('modal-close').click()" 
            class="px-5 py-2 text-sm rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold transition flex items-center gap-2 cursor-pointer"
          >
            <span>Discuss This Project</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>
      </div>
    `;

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';

    // Mount simulator if present
    if (project.hasLiveSimulator) {
      if (project.demoType === 'simulator-phish') {
        initPhishSimulator('modal-simulator-container');
      } else if (project.demoType === 'simulator-alu') {
        initAluSimulator('modal-simulator-container');
      }
    }
  };
}
