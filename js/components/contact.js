/**
 * Contact Section Component
 */
import { personalInfo } from '../data.js';

export function renderContact(containerId = 'contact-root') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <section id="contact" class="py-20 relative bg-slate-950/60 border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="flex flex-col items-center text-center mb-16">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-950/70 border border-cyan-800/60 text-cyan-400 mb-3">
            <span>05 // INITIATE COLLABORATION</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something Meaningful.
          </h2>
          <div class="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-3"></div>
          <p class="text-slate-400 max-w-2xl text-sm sm:text-base mt-4">
            I'm always interested in learning, collaborating, and working on innovative engineering and technology projects.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <!-- Left Column: Direct Channels -->
          <div class="lg:col-span-5 space-y-4">
            
            <div class="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-5">
              <h3 class="text-lg font-bold text-white flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                <span>Direct Contact Channels</span>
              </h3>
              
              <p class="text-xs text-slate-400 leading-relaxed">
                Feel free to reach out directly via email, LinkedIn, or WhatsApp for internship opportunities, technical research, or engineering inquiries.
              </p>

              <!-- Channel 1: Email -->
              <div class="p-4 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 transition group flex items-center justify-between">
                <div class="flex items-center space-x-3 overflow-hidden">
                  <div class="w-10 h-10 rounded-lg bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-cyan-400 flex-shrink-0">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div class="overflow-hidden">
                    <span class="text-[10px] font-mono uppercase text-slate-500 block">Email Address</span>
                    <a href="mailto:${personalInfo.email}" class="text-xs sm:text-sm font-semibold text-slate-200 hover:text-cyan-400 transition truncate block">
                      ${personalInfo.email}
                    </a>
                  </div>
                </div>
                <button 
                  id="copy-email-btn" 
                  class="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition flex-shrink-0 cursor-pointer" 
                  title="Copy email address"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                </button>
              </div>

              <!-- Channel 2: LinkedIn -->
              <a 
                href="${personalInfo.linkedin}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="p-4 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 transition group flex items-center justify-between block"
              >
                <div class="flex items-center space-x-3">
                  <div class="w-10 h-10 rounded-lg bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-cyan-400 flex-shrink-0">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </div>
                  <div>
                    <span class="text-[10px] font-mono uppercase text-slate-500 block">LinkedIn Profile</span>
                    <span class="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-cyan-400 transition">
                      mohamed-ahmed-06525024b
                    </span>
                  </div>
                </div>
                <span class="text-slate-500 group-hover:text-cyan-400 transition">→</span>
              </a>

              <!-- Channel 3: WhatsApp / Phone -->
              <a 
                href="${personalInfo.whatsappUrl}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="p-4 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/50 transition group flex items-center justify-between block"
              >
                <div class="flex items-center space-x-3">
                  <div class="w-10 h-10 rounded-lg bg-emerald-950/80 border border-emerald-800/60 flex items-center justify-center text-emerald-400 flex-shrink-0">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                  </div>
                  <div>
                    <span class="text-[10px] font-mono uppercase text-slate-500 block">WhatsApp / Phone</span>
                    <span class="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-emerald-400 transition">
                      ${personalInfo.phone}
                    </span>
                  </div>
                </div>
                <span class="text-slate-500 group-hover:text-emerald-400 transition">→</span>
              </a>

              <!-- Channel 4: GitHub -->
              <a 
                href="${personalInfo.github}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="p-4 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-slate-600 transition group flex items-center justify-between block"
              >
                <div class="flex items-center space-x-3">
                  <div class="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 flex-shrink-0">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path></svg>
                  </div>
                  <div>
                    <span class="text-[10px] font-mono uppercase text-slate-500 block">GitHub Profile</span>
                    <span class="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white transition">
                      View Repositories &amp; Code
                    </span>
                  </div>
                </div>
                <span class="text-slate-500 group-hover:text-white transition">→</span>
              </a>

              <!-- Channel 5: Location -->
              <div class="pt-3 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                <span class="flex items-center gap-1.5">
                  <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  <span>Primary Location</span>
                </span>
                <span class="text-slate-200 font-semibold">${personalInfo.location}</span>
              </div>
            </div>
          </div>

          <!-- Right Column: Interactive Contact Form -->
          <div class="lg:col-span-7">
            <div class="bg-gradient-to-b from-slate-900/90 to-navy-950/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
              <div class="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                <h3 class="text-lg font-bold text-white flex items-center gap-2">
                  <span>Send an Engineering Message</span>
                </h3>
                <span class="text-xs font-mono text-cyan-400">Response &lt; 24h</span>
              </div>

              <form id="contact-form" class="space-y-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <!-- Name -->
                  <div>
                    <label class="block text-xs font-semibold text-slate-300 mb-1.5 font-sans">Your Name *</label>
                    <input 
                      type="text" 
                      id="form-name" 
                      required 
                      placeholder="e.g. Dr. Sherif / Eng. Sarah" 
                      class="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                    />
                  </div>

                  <!-- Email -->
                  <div>
                    <label class="block text-xs font-semibold text-slate-300 mb-1.5 font-sans">Your Email Address *</label>
                    <input 
                      type="email" 
                      id="form-email" 
                      required 
                      placeholder="e.g. colleague@organization.com" 
                      class="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                    />
                  </div>
                </div>

                <!-- Subject -->
                <div>
                  <label class="block text-xs font-semibold text-slate-300 mb-1.5 font-sans">Subject / Inquiry Type *</label>
                  <select 
                    id="form-subject" 
                    required 
                    class="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-cyan-400 transition"
                  >
                    <option value="Internship / Engineering Opportunity">Engineering Internship / Trainee Opportunity</option>
                    <option value="Circuit & Hardware Collaboration">Circuit Design &amp; PSpice Project Collaboration</option>
                    <option value="Networking & Huawei Infrastructure">Network Infrastructure / Huawei eNSP Inquiry</option>
                    <option value="Cybersecurity / ML Research">Cybersecurity / ML Research &amp; Phish-Shield</option>
                    <option value="General Technical Question">General Technical Question / Academic Discussion</option>
                  </select>
                </div>

                <!-- Message -->
                <div>
                  <label class="block text-xs font-semibold text-slate-300 mb-1.5 font-sans">Message Content *</label>
                  <textarea 
                    id="form-message" 
                    rows="4" 
                    required 
                    placeholder="Describe your technical inquiry, project scope, or opportunity details..."
                    class="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition resize-none"
                  ></textarea>
                </div>

                <!-- Form Notice -->
                <p class="text-[11px] text-slate-400 font-sans">
                  * Submissions launch your email client with pre-filled details and save a local draft backup. No unauthorized data is sent to external trackers.
                </p>

                <!-- Actions -->
                <div class="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button 
                    type="submit" 
                    class="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-size-200 hover:bg-pos-100 text-white font-semibold text-sm shadow-lg shadow-cyan-950/40 hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                    <span>Transmit Message</span>
                  </button>

                  <a 
                    href="mailto:${personalInfo.email}" 
                    class="w-full sm:w-auto text-center px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-sm font-medium transition cursor-pointer"
                  >
                    Open Default Email App
                  </a>
                </div>

                <!-- Live Status Banner -->
                <div id="form-status" class="hidden mt-4 p-3 rounded-xl text-xs font-mono"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  // Attach email copy
  const copyBtn = container.querySelector('#copy-email-btn');
  copyBtn?.addEventListener('click', () => {
    navigator.clipboard.writeText(personalInfo.email).then(() => {
      copyBtn.innerHTML = `<svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`;
      setTimeout(() => {
        copyBtn.innerHTML = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>`;
      }, 2000);
    });
  });

  // Attach form submission
  const form = container.querySelector('#contact-form');
  const statusDiv = container.querySelector('#form-status');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = container.querySelector('#form-name').value.trim();
    const email = container.querySelector('#form-email').value.trim();
    const subject = container.querySelector('#form-subject').value;
    const message = container.querySelector('#form-message').value.trim();

    if (!name || !email || !message) return;

    // Save draft in localStorage
    const draft = { name, email, subject, message, date: new Date().toISOString() };
    try {
      localStorage.setItem('mohamed_ahmed_contact_draft', JSON.stringify(draft));
    } catch (err) {}

    // Formulate mailto URL
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(`[Portfolio] ${subject} - From ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nInquiry Type: ${subject}\n\nMessage:\n${message}\n\nSent from Mohamed Ahmed Portfolio Website`)}`;

    // Show status
    statusDiv.className = 'mt-4 p-3 rounded-xl text-xs font-sans bg-emerald-950/60 border border-emerald-800 text-emerald-300';
    statusDiv.innerHTML = `
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
        <strong class="font-semibold">Message Prepared Successfully!</strong>
      </div>
      <p class="mt-1 text-slate-300">
        Opening your email client to send to <strong class="text-white">${personalInfo.email}</strong>. 
        If your client did not launch automatically, <a href="${mailtoUrl}" class="text-cyan-400 underline font-semibold">click here to send directly</a>.
      </p>
    `;
    statusDiv.classList.remove('hidden');

    // Trigger window location
    window.location.href = mailtoUrl;
  });
}
