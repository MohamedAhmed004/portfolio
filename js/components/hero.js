/**
 * Hero / Landing Section Component
 */
import { personalInfo } from '../data.js';

export function renderHero(containerId = 'hero-root') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <section id="hero" class="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden">
      <!-- Glow Gradients -->
      <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-blue-600/15 via-cyan-500/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div class="absolute -top-12 -right-12 w-96 h-96 bg-blue-700/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Left Column: Copy & Actions -->
          <div class="lg:col-span-7 space-y-6">
            
            <!-- Availability Pill -->
            <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner">
              <span class="relative flex h-2.5 w-2.5">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span class="text-xs font-medium text-slate-200">${personalInfo.status}</span>
            </div>

            <!-- Title & Main Heading -->
            <div>
              <div class="text-xs sm:text-sm font-mono text-cyan-400 tracking-wider uppercase font-semibold mb-2 flex items-center gap-2">
                <span>// ${personalInfo.title}</span>
              </div>
              <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
                Engineering Ideas Into <br class="hidden sm:inline" />
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-200">
                  Practical Solutions.
                </span>
              </h1>
            </div>

            <!-- Subtitle -->
            <p class="text-base sm:text-lg font-medium text-slate-300 border-l-2 border-cyan-500/60 pl-3">
              ${personalInfo.subtitle}
            </p>

            <!-- Short Professional Introduction -->
            <p class="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl">
              ${personalInfo.intro}
            </p>

            <!-- Action Buttons -->
            <div class="flex flex-wrap items-center gap-3 pt-2">
              <!-- View Projects -->
              <a 
                href="#projects" 
                class="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-size-200 hover:bg-pos-100 text-white font-semibold text-sm shadow-lg shadow-cyan-950/50 hover:shadow-cyan-500/25 transition-all duration-300 flex items-center gap-2 group cursor-pointer"
              >
                <span>View My Projects</span>
                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>

              <!-- Download CV -->
              <a 
                href="${personalInfo.cvPath}" 
                download="Mohamed_Ahmed_Resume.pdf" 
                class="px-6 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 font-semibold text-sm transition-all duration-300 flex items-center gap-2 group cursor-pointer"
              >
                <svg class="w-4 h-4 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                <span>Download CV</span>
              </a>

              <!-- Contact Me -->
              <a 
                href="#contact" 
                class="px-5 py-3 rounded-xl text-slate-300 hover:text-cyan-400 hover:bg-slate-900/50 font-medium text-sm transition flex items-center gap-1.5 cursor-pointer"
              >
                <span>Contact Me</span>
                <span class="text-cyan-400">→</span>
              </a>
            </div>

            <!-- Verified Academic & Technical Tags -->
            <div class="pt-4 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
              <span class="text-slate-500">Core Focus:</span>
              <span class="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">CMOS Circuit Design</span>
              <span class="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">Huawei eNSP</span>
              <span class="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">Python ML Heuristics</span>
              <span class="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">MATLAB Simulation</span>
            </div>
          </div>

          <!-- Right Column: Engineering Visual Card & Badges -->
          <div class="lg:col-span-5 flex justify-center lg:justify-end">
            <div class="relative w-full max-w-md">
              
              <!-- Subtle Backdrop Ring -->
              <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-3xl blur-2xl -z-10"></div>

              <!-- Main Interactive Avatar Container -->
              <div class="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-navy-950/90 border border-slate-800 p-6 shadow-2xl backdrop-blur-xl">
                
                <!-- Terminal Window Header -->
                <div class="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80 font-mono text-xs text-slate-400">
                  <div class="flex items-center space-x-1.5">
                    <span class="w-3 h-3 rounded-full bg-red-500/80"></span>
                    <span class="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span class="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                  </div>
                  <span class="text-[11px] text-cyan-400/90">mohamed_ahmed.identity</span>
                  <span class="text-slate-500">MTI University</span>
                </div>

                <!-- Custom Engineering Avatar Graphic -->
                <div class="relative flex items-center justify-center py-2">
                  <img 
                    src="assets/images/mohamed-avatar.svg" 
                    alt="Mohamed Ahmed — Engineering Avatar" 
                    class="w-64 h-64 sm:w-72 sm:h-72 object-contain drop-shadow-[0_10px_25px_rgba(56,189,248,0.25)] hover:scale-105 transition-transform duration-500" 
                  />
                </div>

                <!-- Bottom Verification Bar -->
                <div class="mt-4 pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-3 text-left">
                  <div class="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/70">
                    <span class="text-[10px] uppercase font-mono text-slate-400 block">Credentials</span>
                    <span class="text-xs font-semibold text-slate-200">CCNA · HCIA · ITI</span>
                  </div>
                  <div class="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/70">
                    <span class="text-[10px] uppercase font-mono text-slate-400 block">Current Degree</span>
                    <span class="text-xs font-semibold text-cyan-400">B.Sc. Comm &amp; Elec '27</span>
                  </div>
                </div>

                <!-- Status Ribbon -->
                <div class="mt-3 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span class="flex items-center gap-1.5">
                    <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                    Cairo, Egypt
                  </span>
                  <a href="#contact" class="text-cyan-400 hover:underline">Get in Touch →</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Metrics Strip -->
        <div class="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
          ${personalInfo.metrics.map(m => `
            <div class="bg-slate-900/50 border border-slate-800/80 rounded-xl p-4 text-center hover:border-cyan-500/40 transition">
              <div class="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 font-mono">
                ${m.value}
              </div>
              <div class="text-xs font-semibold text-slate-200 mt-1">${m.label}</div>
              <div class="text-[11px] text-slate-400 mt-0.5">${m.detail}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
