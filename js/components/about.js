/**
 * About Me Section Component
 */
import { personalInfo } from '../data.js';

export function renderAbout(containerId = 'about-root') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <section id="about" class="py-20 relative border-t border-slate-800/80 bg-slate-950/40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="flex flex-col items-center text-center mb-16">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-950/70 border border-cyan-800/60 text-cyan-400 mb-3">
            <span>01 // BACKGROUND & PHILOSOPHY</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Mohamed Ahmed
          </h2>
          <div class="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-3"></div>
          <p class="text-slate-400 max-w-2xl text-sm sm:text-base mt-4">
            Bridging hardware design, network architectures, and modern software to develop robust, efficient technical systems.
          </p>
        </div>

        <!-- Main Narrative Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <!-- Narrative Left Column -->
          <div class="lg:col-span-7 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
            <div class="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
              <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2.5">
                <span class="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                <span>Engineering Foundations &amp; Interdisciplinary Drive</span>
              </h3>
              
              <p class="mb-4">
                I am currently pursuing my <strong>B.Sc. in Communication and Electronics Engineering</strong> at <strong>MTI University, Cairo, Egypt</strong> (Expected Graduation: 2027). From fundamental circuit analysis and transistor biasing to complex digital logic and telecommunication protocols, my academic journey is anchored in core engineering principles.
              </p>

              <p class="mb-4">
                What sets my engineering approach apart is an active drive to bridge the physical hardware layer with intelligent software and cybersecurity defenses. Whether I am sizing CMOS transistors for a 2-bit ALU in Cadence PSpice, configuring multi-department VLAN trunks on Huawei switches in eNSP, or engineering offline machine learning feature extractors for phishing URL detection in Python, I focus on building practical, testable, and reliable systems.
              </p>

              <div class="p-4 rounded-xl bg-slate-950/80 border-l-4 border-cyan-500 text-slate-300 italic text-sm">
                "${personalInfo.mission}"
              </div>
            </div>

            <!-- Key Engineering Pillars -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <!-- Pillar 1 -->
              <div class="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition group">
                <div class="w-9 h-9 rounded-lg bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-cyan-400 mb-3 group-hover:scale-110 transition">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <h4 class="font-bold text-white text-sm mb-1.5">Technical Curiosity</h4>
                <p class="text-xs text-slate-400 leading-relaxed">
                  Driven to dissect how systems operate from the silicon gate level up through the network stack and application runtime.
                </p>
              </div>

              <!-- Pillar 2 -->
              <div class="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition group">
                <div class="w-9 h-9 rounded-lg bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center text-cyan-400 mb-3 group-hover:scale-110 transition">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                </div>
                <h4 class="font-bold text-white text-sm mb-1.5">Analytical Thinking &amp; Rigor</h4>
                <p class="text-xs text-slate-400 leading-relaxed">
                  Formulating problems quantitatively, preventing data leakage with GroupKFold, and verifying circuits across exhaustive truth tables.
                </p>
              </div>

              <!-- Pillar 3 -->
              <div class="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition group">
                <div class="w-9 h-9 rounded-lg bg-emerald-950/80 border border-emerald-800/60 flex items-center justify-center text-emerald-400 mb-3 group-hover:scale-110 transition">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                </div>
                <h4 class="font-bold text-white text-sm mb-1.5">Hands-On Engineering</h4>
                <p class="text-xs text-slate-400 leading-relaxed">
                  Prioritizing working prototypes, OrCAD netlist execution, eNSP packet captures, and automated pytest regression suites.
                </p>
              </div>

              <!-- Pillar 4 -->
              <div class="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition group">
                <div class="w-9 h-9 rounded-lg bg-purple-950/80 border border-purple-800/60 flex items-center justify-center text-purple-400 mb-3 group-hover:scale-110 transition">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                </div>
                <h4 class="font-bold text-white text-sm mb-1.5">Continuous Learning</h4>
                <p class="text-xs text-slate-400 leading-relaxed">
                  Actively pursuing industry certifications (CCNA, HCIA-Datacom, ITI Embedded Systems) to stay ahead of technology trends.
                </p>
              </div>
            </div>
          </div>

          <!-- Academic & Credentials Right Column -->
          <div class="lg:col-span-5 space-y-6">
            
            <!-- Education Card -->
            <div class="bg-gradient-to-b from-slate-900/90 to-navy-950/90 border border-slate-800 rounded-2xl p-6 shadow-xl">
              <div class="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                <span class="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">// ACADEMIC PROFILE</span>
                <span class="text-xs px-2.5 py-0.5 rounded-full bg-blue-950 border border-blue-800 text-blue-300">Undergraduate</span>
              </div>

              <div class="space-y-4">
                <div>
                  <h4 class="text-lg font-extrabold text-white">${personalInfo.education.degree}</h4>
                  <p class="text-cyan-400 text-sm font-semibold">${personalInfo.education.institution}</p>
                  <p class="text-xs font-mono text-slate-400 mt-1">Expected Graduation: <span class="text-slate-200 font-bold">${personalInfo.education.expectedGraduation}</span></p>
                </div>

                <div class="pt-3 border-t border-slate-800/80">
                  <span class="text-xs font-semibold text-slate-400 block mb-2">Program Curriculum Focus:</span>
                  <ul class="space-y-2 text-xs text-slate-300">
                    ${personalInfo.education.highlights.map(h => `
                      <li class="flex items-start gap-2">
                        <span class="text-cyan-400 mt-0.5">▸</span>
                        <span>${h}</span>
                      </li>
                    `).join('')}
                  </ul>
                </div>

                <div class="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span>Location: <strong class="text-slate-200">Cairo, Egypt</strong></span>
                  <span>Status: <strong class="text-emerald-400">Enrolled (Senior Cycle)</strong></span>
                </div>
              </div>
            </div>

            <!-- Verified Certifications Quick Card -->
            <div class="bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
              <span class="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-4">// PROFESSIONAL CREDENTIALS</span>
              
              <div class="space-y-3">
                <div class="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between">
                  <div>
                    <div class="text-xs font-bold text-white">CCNA — Cisco Certified Network Associate</div>
                    <div class="text-[11px] text-slate-400">Engovation / Cisco Track</div>
                  </div>
                  <span class="text-[10px] font-mono text-cyan-400 bg-cyan-950/80 border border-cyan-800 px-2 py-0.5 rounded">Certified</span>
                </div>

                <div class="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between">
                  <div>
                    <div class="text-xs font-bold text-white">HCIA-Datacom</div>
                    <div class="text-[11px] text-slate-400">DEPI (Digital Egypt Pioneers Initiative)</div>
                  </div>
                  <span class="text-[10px] font-mono text-cyan-400 bg-cyan-950/80 border border-cyan-800 px-2 py-0.5 rounded">Completed</span>
                </div>

                <div class="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between">
                  <div>
                    <div class="text-xs font-bold text-white">Embedded Systems Training (AVR Focus)</div>
                    <div class="text-[11px] text-slate-400">ITI (Information Technology Institute)</div>
                  </div>
                  <span class="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-2 py-0.5 rounded">Completed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
