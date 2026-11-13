/**
 * Technical Arsenal Section Component
 */
import { technicalArsenal, certifications } from '../data.js';

export function renderSkills(containerId = 'skills-root') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <section id="skills" class="py-20 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="flex flex-col items-center text-center mb-16">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-950/70 border border-cyan-800/60 text-cyan-400 mb-3">
            <span>02 // CAPABILITIES & DOMAINS</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Arsenal
          </h2>
          <div class="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-3"></div>
          <p class="text-slate-400 max-w-2xl text-sm sm:text-base mt-4">
            Structured into dedicated engineering disciplines. Grounded in actual lab implementations and verified project repositories—no arbitrary skill percentages.
          </p>
        </div>

        <!-- Technical Categories Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${technicalArsenal.map((cat, idx) => `
            <div class="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-6 hover:border-cyan-500/50 hover:bg-slate-900/80 transition-all duration-300 group flex flex-col justify-between shadow-lg">
              <div>
                <!-- Category Card Header -->
                <div class="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                  <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      ${getCategoryIcon(cat.icon)}
                    </div>
                    <div>
                      <h3 class="font-bold text-white text-base group-hover:text-cyan-300 transition-colors">${cat.category}</h3>
                      <span class="text-[10px] font-mono text-slate-500">SECTION // 0${idx + 1}</span>
                    </div>
                  </div>
                </div>

                <!-- Category Summary -->
                <p class="text-xs text-slate-400 mb-4 leading-relaxed">${cat.summary}</p>

                <!-- Sub-Skills List -->
                <div class="space-y-3">
                  ${cat.skills.map(skill => `
                    <div class="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/60 hover:border-slate-700 transition">
                      <div class="flex items-center justify-between">
                        <span class="text-xs font-semibold text-slate-200">${skill.name}</span>
                        <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      </div>
                      <p class="text-[11px] text-slate-400 mt-0.5 leading-snug">${skill.detail}</p>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Footer Tag -->
              <div class="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Verified in Labs</span>
                <span class="text-cyan-400/80">Active Focus</span>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Certifications Showcase Section -->
        <div class="mt-16 pt-12 border-t border-slate-800">
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <span class="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">// CREDENTIAL VERIFICATION</span>
              <h3 class="text-2xl font-bold text-white mt-1">Industry Certifications &amp; Professional Programs</h3>
            </div>
            <span class="text-xs font-mono text-slate-400 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg">
              Cisco · Huawei · ITI Egypt
            </span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${certifications.map(cert => `
              <div class="bg-gradient-to-b from-slate-900/80 to-navy-950/80 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-cyan-500/40 transition">
                <div class="flex items-center justify-between mb-4">
                  <span class="px-2.5 py-1 text-[10px] font-mono uppercase font-bold rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800/60">
                    ${cert.category}
                  </span>
                  <span class="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                    <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                    Verified
                  </span>
                </div>

                <h4 class="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">${cert.title}</h4>
                <div class="text-xs text-cyan-400 font-mono mb-3">${cert.issuer}</div>
                <p class="text-xs text-slate-400 leading-relaxed mb-4">${cert.description}</p>

                <div class="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                  ${cert.skills.map(s => `
                    <span class="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-950 border border-slate-800 text-slate-300">
                      ${s}
                    </span>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}

function getCategoryIcon(iconName) {
  switch (iconName) {
    case 'cpu':
      return `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>`;
    case 'network':
      return `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>`;
    case 'shield':
      return `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>`;
    case 'code':
      return `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>`;
    case 'activity':
    default:
      return `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>`;
  }
}
