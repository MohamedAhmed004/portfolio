/**
 * Footer Component
 */
import { personalInfo } from '../data.js';

export function renderFooter(containerId = 'footer-root') {
  const container = document.getElementById(containerId);
  if (!container) return;

  const year = new Date().getFullYear();

  container.innerHTML = `
    <footer class="bg-[#070B12] border-t border-slate-800/80 py-12 text-slate-400 text-xs">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-slate-800/80">
          
          <!-- Identity -->
          <div class="md:col-span-5 space-y-2">
            <div class="flex items-center space-x-2.5">
              <img src="favicon.svg" alt="MA Logo" class="w-7 h-7" />
              <span class="text-base font-bold text-white tracking-tight">${personalInfo.name}</span>
            </div>
            <p class="text-slate-400 max-w-sm">
              ${personalInfo.title} · MTI University
            </p>
            <p class="text-[11px] text-slate-500 font-mono">
              Cairo, Egypt · B.Sc. Expected 2027
            </p>
          </div>

          <!-- Navigation Links -->
          <div class="md:col-span-4 flex flex-wrap gap-x-6 gap-y-2 font-medium">
            <a href="#hero" class="hover:text-cyan-400 transition">Home</a>
            <a href="#about" class="hover:text-cyan-400 transition">About</a>
            <a href="#skills" class="hover:text-cyan-400 transition">Arsenal</a>
            <a href="#projects" class="hover:text-cyan-400 transition">Projects</a>
            <a href="#workflow" class="hover:text-cyan-400 transition">Workflow</a>
            <a href="#contact" class="hover:text-cyan-400 transition">Contact</a>
          </div>

          <!-- Socials & Back to Top -->
          <div class="md:col-span-3 flex items-center md:justify-end gap-3">
            <!-- LinkedIn -->
            <a 
              href="${personalInfo.linkedin}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/60 hover:text-cyan-400 flex items-center justify-center transition"
              title="LinkedIn Profile"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>

            <!-- WhatsApp -->
            <a 
              href="${personalInfo.whatsappUrl}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/60 hover:text-emerald-400 flex items-center justify-center transition"
              title="WhatsApp / Phone"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            </a>

            <!-- Back to top -->
            <button 
              id="back-to-top" 
              class="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/60 hover:text-cyan-400 flex items-center justify-center transition cursor-pointer"
              title="Scroll to Top"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
            </button>
          </div>
        </div>

        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © ${year} ${personalInfo.name}. All engineering rights reserved.
          </div>
          <div class="flex items-center gap-3 font-mono">
            <span>Tailwind CSS</span>
            <span>•</span>
            <span>Modular ES6 Architecture</span>
            <span>•</span>
            <span>GitHub Pages Ready</span>
          </div>
        </div>
      </div>
    </footer>
  `;

  // Attach back to top
  const topBtn = container.querySelector('#back-to-top');
  topBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
