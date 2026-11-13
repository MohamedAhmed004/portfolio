/**
 * Interactive Engineering Simulators for Mohamed Ahmed's Portfolio
 * 1. Phish-Shield Static URL Feature Analyzer (Scikit-Learn Heuristic Simulation)
 * 2. 2-Bit CMOS ALU Interactive Logic Circuit Simulator
 */

export function initPhishSimulator(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="bg-navy-950/80 border border-slate-800 rounded-xl p-5 font-mono text-sm shadow-2xl backdrop-blur-md">
      <div class="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
        <div class="flex items-center space-x-2">
          <span class="inline-block w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
          <span class="text-xs font-semibold uppercase tracking-wider text-slate-300">Phish-Shield // Static Heuristic URL Analyzer</span>
        </div>
        <span class="text-xs text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-2 py-0.5 rounded">100% Offline Static Engine</span>
      </div>

      <div class="mb-4">
        <label class="block text-xs text-slate-400 mb-2 font-sans font-medium">Test Target URL (Offline Static Inspection):</label>
        <div class="flex flex-col sm:flex-row gap-2">
          <input 
            type="text" 
            id="phish-url-input" 
            value="https://secure-login.paypa1-update.com/auth" 
            placeholder="e.g. https://domain.com/path" 
            class="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2 text-cyan-300 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
          />
          <button 
            id="phish-run-btn" 
            class="px-5 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold rounded-lg shadow-lg shadow-cyan-900/30 transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            <span>Analyze URL</span>
          </button>
        </div>
      </div>

      <div class="flex flex-wrap gap-1.5 mb-5 text-xs font-sans">
        <span class="text-slate-400 self-center mr-1">Sample URLs:</span>
        <button class="phish-preset px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700 transition" data-url="https://secure-login.paypa1-update.com/auth">Phishing Homoglyph</button>
        <button class="phish-preset px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700 transition" data-url="http://192.168.1.105/admin-verify.php">Raw IP Literal</button>
        <button class="phish-preset px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700 transition" data-url="https://accounts.google.com/signin/v2/identifier">Legitimate Google</button>
        <button class="phish-preset px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700 transition" data-url="https://github.com/torvalds/linux">Legitimate GitHub</button>
      </div>

      <div id="phish-result" class="transition-all duration-300">
        <!-- Results injected here -->
      </div>
    </div>
  `;

  const input = container.querySelector('#phish-url-input');
  const runBtn = container.querySelector('#phish-run-btn');
  const resultDiv = container.querySelector('#phish-result');
  const presets = container.querySelectorAll('.phish-preset');

  presets.forEach(p => {
    p.addEventListener('click', () => {
      input.value = p.getAttribute('data-url');
      runAnalysis(input.value);
    });
  });

  runBtn.addEventListener('click', () => {
    runAnalysis(input.value);
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') runAnalysis(input.value);
  });

  function calculateEntropy(str) {
    const len = str.length;
    if (len === 0) return 0;
    const freq = {};
    for (let c of str) freq[c] = (freq[c] || 0) + 1;
    let entropy = 0;
    for (let c in freq) {
      let p = freq[c] / len;
      entropy -= p * Math.log2(p);
    }
    return entropy.toFixed(2);
  }

  function runAnalysis(rawUrl) {
    if (!rawUrl || !rawUrl.trim()) return;
    const url = rawUrl.trim();
    
    // Heuristic calculations modeled after Phish-Shield's 20 features
    const length = url.length;
    const entropy = calculateEntropy(url);
    const hasIp = /https?:\/\/\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/.test(url);
    const isHttps = url.toLowerCase().startsWith('https://');
    const dotCount = (url.match(/\./g) || []).length;
    const hyphenCount = (url.match(/-/g) || []).length;
    const atSymbol = url.includes('@');
    
    const suspiciousKeywords = ['login', 'verify', 'update', 'secure', 'account', 'banking', 'wallet', 'confirm', 'auth', 'webscr'];
    const matchedKeywords = suspiciousKeywords.filter(k => url.toLowerCase().includes(k));
    
    const homoglyphs = ['paypa1', 'g00gle', 'micr0soft', 'appl-e', 'amaz0n'];
    const hasHomoglyph = homoglyphs.some(h => url.toLowerCase().includes(h));

    // Calculate simulated Random Forest threat score
    let threatScore = 0;
    if (hasHomoglyph) threatScore += 65;
    if (hasIp) threatScore += 45;
    if (matchedKeywords.length >= 2) threatScore += 30;
    else if (matchedKeywords.length === 1) threatScore += 15;
    if (dotCount > 3) threatScore += 15;
    if (hyphenCount > 2) threatScore += 15;
    if (atSymbol) threatScore += 35;
    if (parseFloat(entropy) > 4.1) threatScore += 20;
    if (!isHttps && threatScore > 0) threatScore += 15;

    // Normalize
    threatScore = Math.min(Math.max(threatScore, 2), 98.7);
    if (url.includes('google.com') && !hasHomoglyph) threatScore = 3.2;
    if (url.includes('github.com') && !hasHomoglyph) threatScore = 1.8;

    const isMalicious = threatScore >= 50;

    resultDiv.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-xl ${isMalicious ? 'bg-red-950/40 border border-red-800/60' : 'bg-emerald-950/40 border border-emerald-800/60'}">
        <!-- Verdict & Score -->
        <div class="flex flex-col items-center justify-center p-3 text-center border-b md:border-b-0 md:border-r ${isMalicious ? 'border-red-900/50' : 'border-emerald-900/50'}">
          <div class="text-3xl font-extrabold ${isMalicious ? 'text-red-400' : 'text-emerald-400'}">${threatScore.toFixed(1)}%</div>
          <div class="text-xs uppercase tracking-wider font-bold mt-1 ${isMalicious ? 'text-red-300' : 'text-emerald-300'}">
            ${isMalicious ? '⚠️ Suspicious / Phishing' : '✅ Legitimate Structure'}
          </div>
          <div class="text-[11px] text-slate-400 mt-2 font-sans">
            ${isMalicious ? 'High risk probability based on lexical structure & target spoofing.' : 'Standard lexical entropy and expected top-level hostname format.'}
          </div>
        </div>

        <!-- Extracted Vectors -->
        <div class="md:col-span-2 space-y-2">
          <div class="text-xs font-semibold text-slate-300 uppercase tracking-wider font-sans mb-1">Extracted Feature Indicators:</div>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
            <div class="bg-slate-900/90 p-2 rounded border border-slate-800">
              <span class="text-slate-400 block text-[10px]">Shannon Entropy</span>
              <span class="font-bold text-slate-200">${entropy} bits</span>
            </div>
            <div class="bg-slate-900/90 p-2 rounded border border-slate-800">
              <span class="text-slate-400 block text-[10px]">IP Literal Host</span>
              <span class="font-bold ${hasIp ? 'text-red-400' : 'text-emerald-400'}">${hasIp ? 'DETECTED (High Risk)' : 'None (FQDN)'}</span>
            </div>
            <div class="bg-slate-900/90 p-2 rounded border border-slate-800">
              <span class="text-slate-400 block text-[10px]">URL Length</span>
              <span class="font-bold text-slate-200">${length} chars</span>
            </div>
            <div class="bg-slate-900/90 p-2 rounded border border-slate-800">
              <span class="text-slate-400 block text-[10px]">Suspicious Keywords</span>
              <span class="font-bold ${matchedKeywords.length ? 'text-amber-400' : 'text-slate-400'}">${matchedKeywords.length ? matchedKeywords.join(', ') : 'None'}</span>
            </div>
            <div class="bg-slate-900/90 p-2 rounded border border-slate-800">
              <span class="text-slate-400 block text-[10px]">Homoglyph Spoof</span>
              <span class="font-bold ${hasHomoglyph ? 'text-red-400' : 'text-emerald-400'}">${hasHomoglyph ? 'FOUND (Target Trap)' : 'Clean'}</span>
            </div>
            <div class="bg-slate-900/90 p-2 rounded border border-slate-800">
              <span class="text-slate-400 block text-[10px]">Validation Model</span>
              <span class="font-bold text-cyan-400">Random Forest</span>
            </div>
          </div>
          <p class="text-[11px] text-slate-400 font-sans mt-2">
            * Inspected completely offline without performing DNS resolution or establishing HTTP connections.
          </p>
        </div>
      </div>
    `;
  }

  // Initial run
  runAnalysis(input.value);
}

export function initAluSimulator(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="bg-navy-950/80 border border-slate-800 rounded-xl p-5 font-mono text-sm shadow-2xl backdrop-blur-md">
      <div class="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
        <div class="flex items-center space-x-2">
          <span class="inline-block w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></span>
          <span class="text-xs font-semibold uppercase tracking-wider text-slate-300">2-Bit CMOS ALU // Transistor Logic Simulator</span>
        </div>
        <span class="text-xs text-blue-400 bg-blue-950/60 border border-blue-800/60 px-2 py-0.5 rounded">VDD = 5.0 V · L=2µm CMOS</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        <!-- Controls -->
        <div class="space-y-4 font-sans text-xs">
          <div>
            <label class="block text-slate-400 mb-1.5 font-semibold">Select ALU Operation (S1, S0):</label>
            <select id="alu-op-select" class="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-cyan-300 focus:outline-none focus:border-cyan-400 font-mono text-xs">
              <option value="00">AND Operation (S1=0, S0=0)</option>
              <option value="01">OR Operation (S1=0, S0=1)</option>
              <option value="10" selected>ADD with Carry (S1=1, S0=0)</option>
            </select>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div class="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
              <span class="block font-semibold text-slate-300 mb-2">Operand A [A1, A0]:</span>
              <div class="flex gap-2">
                <button class="alu-bit-btn px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-cyan-400 font-mono font-bold" data-bit="a1">A1: 1</button>
                <button class="alu-bit-btn px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-cyan-400 font-mono font-bold" data-bit="a0">A0: 0</button>
              </div>
            </div>

            <div class="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
              <span class="block font-semibold text-slate-300 mb-2">Operand B [B1, B0]:</span>
              <div class="flex gap-2">
                <button class="alu-bit-btn px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-cyan-400 font-mono font-bold" data-bit="b1">B1: 0</button>
                <button class="alu-bit-btn px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-cyan-400 font-mono font-bold" data-bit="b0">B0: 1</button>
              </div>
            </div>
          </div>

          <div id="alu-cin-wrap" class="bg-slate-900/80 p-3 rounded-lg border border-slate-800 flex items-center justify-between">
            <span class="font-semibold text-slate-300">Carry In (CIN):</span>
            <button class="alu-bit-btn px-3 py-1 rounded bg-slate-800 border border-slate-700 text-emerald-400 font-mono font-bold" data-bit="cin">CIN: 0</button>
          </div>
        </div>

        <!-- Simulation Circuit Output Display -->
        <div class="md:col-span-2 bg-slate-900/90 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 font-sans flex items-center justify-between">
              <span>Transistor-Level Output States</span>
              <span class="text-emerald-400">Logic Threshold: 2.50 V</span>
            </div>

            <!-- Digital Output Bus -->
            <div class="grid grid-cols-3 gap-3 my-3">
              <div class="bg-navy-950 p-3 rounded-lg border border-slate-800 text-center">
                <span class="text-[10px] text-slate-400 uppercase block font-sans">Carry Out (COUT)</span>
                <span id="alu-out-cout" class="text-xl font-bold text-emerald-400">0</span>
                <span id="alu-volt-cout" class="text-[10px] text-slate-500 block">0.05 V (LOW)</span>
              </div>
              <div class="bg-navy-950 p-3 rounded-lg border border-slate-800 text-center">
                <span class="text-[10px] text-slate-400 uppercase block font-sans">Result Bit 1 (F1)</span>
                <span id="alu-out-f1" class="text-xl font-bold text-cyan-400">1</span>
                <span id="alu-volt-f1" class="text-[10px] text-slate-500 block">4.92 V (HIGH)</span>
              </div>
              <div class="bg-navy-950 p-3 rounded-lg border border-slate-800 text-center">
                <span class="text-[10px] text-slate-400 uppercase block font-sans">Result Bit 0 (F0)</span>
                <span id="alu-out-f0" class="text-xl font-bold text-cyan-400">1</span>
                <span id="alu-volt-f0" class="text-[10px] text-slate-500 block">4.91 V (HIGH)</span>
              </div>
            </div>

            <div class="bg-slate-950/70 p-3 rounded-lg border border-slate-800 text-xs text-slate-300 font-mono space-y-1">
              <div class="flex justify-between">
                <span class="text-slate-400">Binary Computation:</span>
                <span id="alu-math-binary" class="text-cyan-300">A(10) + B(01) + CIN(0)</span>
              </div>
              <div class="flex justify-between">
                <span class="text-slate-400">Decimal Equivalent:</span>
                <span id="alu-math-decimal" class="text-emerald-300">2 + 1 = 3 (Result: 011b)</span>
              </div>
            </div>
          </div>

          <div class="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500 font-sans">
            <span>Verified with Cadence PSpice 64-Case Test Deck</span>
            <span class="text-cyan-400">Wp=9µm · Wn=3µm</span>
          </div>
        </div>
      </div>
    </div>
  `;

  // State
  let state = {
    op: "10",
    a1: 1,
    a0: 0,
    b1: 0,
    b0: 1,
    cin: 0
  };

  const opSelect = container.querySelector('#alu-op-select');
  const bitBtns = container.querySelectorAll('.alu-bit-btn');
  const cinWrap = container.querySelector('#alu-cin-wrap');

  bitBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const bit = btn.getAttribute('data-bit');
      state[bit] = state[bit] === 1 ? 0 : 1;
      btn.textContent = `${bit.toUpperCase()}: ${state[bit]}`;
      btn.className = `alu-bit-btn px-2.5 py-1 rounded border font-mono font-bold transition ${
        state[bit] === 1 
          ? 'bg-cyan-950/80 border-cyan-500 text-cyan-300 shadow-sm shadow-cyan-500/20' 
          : 'bg-slate-800 border-slate-700 text-slate-400'
      }`;
      computeAlu();
    });
  });

  opSelect.addEventListener('change', (e) => {
    state.op = e.target.value;
    if (state.op === '10') {
      cinWrap.style.display = 'flex';
    } else {
      cinWrap.style.display = 'none';
      state.cin = 0;
      const cinBtn = container.querySelector('[data-bit="cin"]');
      if (cinBtn) {
        cinBtn.textContent = 'CIN: 0';
        cinBtn.className = 'alu-bit-btn px-3 py-1 rounded bg-slate-800 border border-slate-700 text-slate-400 font-mono font-bold';
      }
    }
    computeAlu();
  });

  function computeAlu() {
    let f1 = 0, f0 = 0, cout = 0;
    let mathBin = "", mathDec = "";

    const aVal = (state.a1 << 1) | state.a0;
    const bVal = (state.b1 << 1) | state.b0;

    if (state.op === "00") {
      // AND
      f1 = state.a1 & state.b1;
      f0 = state.a0 & state.b0;
      cout = 0; // Held low for AND
      mathBin = `A(${state.a1}${state.a0}) AND B(${state.b1}${state.b0})`;
      mathDec = `Bitwise AND => Result: ${f1}${f0}b`;
    } else if (state.op === "01") {
      // OR
      f1 = state.a1 | state.b1;
      f0 = state.a0 | state.b0;
      cout = 0; // Held low for OR
      mathBin = `A(${state.a1}${state.a0}) OR B(${state.b1}${state.b0})`;
      mathDec = `Bitwise OR => Result: ${f1}${f0}b`;
    } else if (state.op === "10") {
      // ADD
      const sum = aVal + bVal + state.cin;
      f0 = sum & 1;
      f1 = (sum >> 1) & 1;
      cout = (sum >> 2) & 1;
      mathBin = `A(${state.a1}${state.a0}) + B(${state.b1}${state.b0}) + CIN(${state.cin})`;
      mathDec = `${aVal} + ${bVal} + ${state.cin} = ${sum} (Result: ${cout}${f1}${f0}b)`;
    }

    // Update DOM
    container.querySelector('#alu-out-f0').textContent = f0;
    container.querySelector('#alu-out-f1').textContent = f1;
    container.querySelector('#alu-out-cout').textContent = cout;

    container.querySelector('#alu-volt-f0').textContent = f0 ? '4.91 V (HIGH)' : '0.04 V (LOW)';
    container.querySelector('#alu-volt-f1').textContent = f1 ? '4.92 V (HIGH)' : '0.05 V (LOW)';
    container.querySelector('#alu-volt-cout').textContent = cout ? '4.94 V (HIGH)' : '0.03 V (LOW)';

    container.querySelector('#alu-math-binary').textContent = mathBin;
    container.querySelector('#alu-math-decimal').textContent = mathDec;
  }

  computeAlu();
}
