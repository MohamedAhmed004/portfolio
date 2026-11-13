/**
 * Workflow Section Component
 */
import { workflowSteps } from '../data.js';

export function renderWorkflow(containerId = 'workflow-root') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <section id="workflow" class="py-20 relative border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="flex flex-col items-center text-center mb-16">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-950/70 border border-cyan-800/60 text-cyan-400 mb-3">
            <span>04 // SYSTEMATIC METHODOLOGY</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My Engineering Workflow
          </h2>
          <div class="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-3"></div>
          <p class="text-slate-400 max-w-2xl text-sm sm:text-base mt-4">
            A disciplined four-phase approach translating high-level constraints into verified, resilient engineering hardware and software.
          </p>
        </div>

        <!-- 4 Steps Process Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          ${workflowSteps.map((step, idx) => `
            <div class="relative bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/50 hover:bg-slate-900/80 transition-all duration-300 group flex flex-col justify-between">
              
              <!-- Card Top -->
              <div>
                <div class="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                  <span class="text-2xl font-black font-mono text-cyan-400/80 group-hover:text-cyan-300 transition-colors">
                    ${step.step}
                  </span>
                  <span class="text-xs font-mono uppercase px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800">
                    Phase // ${step.phase}
                  </span>
                </div>

                <h3 class="text-lg font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                  ${step.title}
                </h3>
                
                <p class="text-xs text-cyan-400/90 font-medium mb-3">
                  ${step.tagline}
                </p>

                <p class="text-xs text-slate-400 leading-relaxed mb-4">
                  ${step.description}
                </p>
              </div>

              <!-- Deliverables Checklist -->
              <div class="pt-4 border-t border-slate-800/80">
                <span class="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-2">Phase Deliverables:</span>
                <ul class="space-y-1.5">
                  ${step.deliverables.map(item => `
                    <li class="flex items-start gap-1.5 text-[11px] text-slate-300">
                      <span class="text-cyan-400 font-bold">✓</span>
                      <span>${item}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Engineering Commitment Callout -->
        <div class="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-900/60 to-cyan-950/40 border border-slate-800 text-center max-w-3xl mx-auto">
          <p class="text-sm text-slate-300 leading-relaxed">
            <strong class="text-cyan-400">Engineering Philosophy:</strong> "Never assume a circuit or model operates correctly without empirical verification. Real engineering is proven through netlist checks, waveform captures, zero-leakage partitions, and clean documentation."
          </p>
        </div>
      </div>
    </section>
  `;
}
