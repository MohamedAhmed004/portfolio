/**
 * Featured Projects Section Component
 */
import { projects } from '../data.js';

export function renderProjects(containerId = 'projects-root') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <section id="projects" class="py-20 relative bg-slate-950/40 border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="flex flex-col items-center text-center mb-12">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-950/70 border border-cyan-800/60 text-cyan-400 mb-3">
            <span>03 // HANDS-ON PROJECTS</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Engineering Projects
          </h2>
          <div class="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-3"></div>
          <p class="text-slate-400 max-w-2xl text-sm sm:text-base mt-4">
            Demonstrating applied engineering across CMOS circuit verification, machine learning threat detection, enterprise campus networking, and algorithmic modeling.
          </p>
        </div>

        <!-- Filter Tabs -->
        <div class="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button class="project-filter-btn px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition cursor-pointer bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-cyan-950/40" data-filter="all">
            All Projects (${projects.length})
          </button>
          <button class="project-filter-btn px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition cursor-pointer bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700" data-filter="cybersecurity">
            Cybersecurity &amp; ML
          </button>
          <button class="project-filter-btn px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition cursor-pointer bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700" data-filter="hardware">
            Hardware &amp; Circuits
          </button>
          <button class="project-filter-btn px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition cursor-pointer bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700" data-filter="networking">
            Networking
          </button>
          <button class="project-filter-btn px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition cursor-pointer bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700" data-filter="software">
            Software &amp; Algorithms
          </button>
        </div>

        <!-- Projects Grid -->
        <div id="projects-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${renderProjectCards(projects)}
        </div>
      </div>
    </section>
  `;

  // Attach filter handler
  const filterBtns = container.querySelectorAll('.project-filter-btn');
  const grid = container.querySelector('#projects-grid');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.className = 'project-filter-btn px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition cursor-pointer bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700';
      });
      btn.className = 'project-filter-btn px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition cursor-pointer bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-cyan-950/40';

      const filter = btn.getAttribute('data-filter');
      const filtered = filter === 'all' ? projects : projects.filter(p => p.filterTag === filter);
      grid.innerHTML = renderProjectCards(filtered);
    });
  });
}

function renderProjectCards(list) {
  return list.map(project => `
    <div class="project-card bg-slate-900/70 border border-slate-800/90 rounded-2xl overflow-hidden hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-950/20 transition-all duration-300 flex flex-col justify-between group">
      <div>
        <!-- Image Preview Container -->
        <div class="relative h-48 bg-navy-950/90 overflow-hidden border-b border-slate-800">
          <img 
            src="${project.image}" 
            alt="${project.title}" 
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"></div>
          
          <!-- Category Pill -->
          <div class="absolute top-3 left-3 flex flex-wrap gap-1.5">
            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase bg-[#0B0F17]/90 border border-cyan-500/40 text-cyan-300 shadow">
              ${project.category}
            </span>
          </div>

          <!-- Feature / Badge -->
          <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
            <span class="text-[11px] font-mono text-slate-300 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-700">
              ${project.badge}
            </span>
            ${project.hasLiveSimulator ? `
              <span class="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/90 border border-emerald-800/80 px-2 py-0.5 rounded">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                Interactive Demo
              </span>
            ` : ''}
          </div>
        </div>

        <!-- Body Content -->
        <div class="p-6">
          <h3 class="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors line-clamp-2">
            ${project.title}
          </h3>
          <p class="text-slate-400 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
            ${project.summary}
          </p>

          <!-- Tech Tags -->
          <div class="flex flex-wrap gap-1.5 mb-4">
            ${project.technologies.slice(0, 4).map(tech => `
              <span class="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-950 border border-slate-800 text-slate-300">
                ${tech}
              </span>
            `).join('')}
            ${project.technologies.length > 4 ? `
              <span class="px-1.5 py-0.5 text-[10px] font-mono rounded bg-slate-950 border border-slate-800 text-slate-400">
                +${project.technologies.length - 4}
              </span>
            ` : ''}
          </div>
        </div>
      </div>

      <!-- Action Footer -->
      <div class="p-6 pt-0 border-t border-slate-800/70 mt-auto flex items-center justify-between gap-2">
        <button 
          onclick="window.openProjectModal('${project.id}')" 
          class="flex-1 py-2 px-3 text-xs font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white transition text-center shadow-md shadow-cyan-950/30 flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <span>View Case Study</span>
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        </button>

        <a 
          href="${project.githubUrl}" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="py-2 px-3 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition flex items-center gap-1.5 cursor-pointer"
          title="GitHub Repository (Code & Documentation)"
        >
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path></svg>
          <span class="hidden sm:inline">GitHub</span>
        </a>
      </div>
    </div>
  `).join('');
}
