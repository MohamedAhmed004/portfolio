# Mohamed Ahmed — Engineering Portfolio

[![Status: Production Ready](https://img.shields.io/badge/Status-Production%20Ready-brightgreen.svg)]()
[![Stack: HTML5 · Tailwind CSS · ES6](https://img.shields.io/badge/Stack-Tailwind%20%7C%20ES6%20Modules-blue.svg)]()
[![Deploy: GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages%20Ready-blueviolet.svg)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> **"Engineering Ideas Into Practical Solutions."**  
> Portfolio website for **Mohamed Ahmed**, an aspiring Communication & Electronics Engineer specializing in CMOS circuit design, computer networking, cybersecurity, MATLAB, and machine learning heuristics.

---

## 1. Project Overview & Architecture

Inspired by modern technology and engineering portfolios, this project delivers a fast, responsive, and authentic digital portfolio. All technical claims, projects, and certifications are strictly aligned with Mohamed Ahmed's verified academic and lab records:

- **B.Sc. in Communication and Electronics Engineering**, MTI University (Expected Graduation: 2027).
- **Certified Credentials**:
  - `CCNA` (Cisco Certified Network Associate) — Engovation.
  - `HCIA-Datacom` — DEPI (Digital Egypt Pioneers Initiative).
  - `Embedded Systems Training (AVR Focus)` — ITI Egypt.
- **Featured Technical Projects**:
  1. **Phish-Shield: ML-Powered Phishing URL Detector** (549k URLs dataset, Random Forest, 20 static features, 41 unit tests).
  2. **2-Bit CMOS Arithmetic Logic Unit (ALU)** (Cadence OrCAD Capture 17.4, PSpice, 64-case transient testbench).
  3. **Enterprise Multi-Department Network Infrastructure** (Huawei eNSP, VLANs, OSPF, NAT, ACL 3001, STP).
  4. **Data Compression Algorithms Studio & GUI** (MATLAB, Huffman, Shannon-Fano, LZ78, entropy analysis).
  5. **CMOS 2-Input XOR Gate & DC Load-Line Characterization** (PSpice DC sweep, VTC, and BJT load lines).
  6. **Optical Fiber Communication Parametric Suite** (Microbending vs. macrobending loss modeling).
  7. **Clinic & Patient Management System** (ANSI C modular architecture, role-based privileges).

---

## 2. Key Interactive Features

- **Engineering Circuit Background**: Lightweight HTML5 Canvas rendering subtle coordinate grids, junction pads, and animated signal pulses with reduced-motion support.
- **Interactive In-Browser Simulators**:
  - *Phish-Shield Simulator*: Test sample URLs (homoglyphs, IP literals, brand traps) with real-time heuristic feature extraction and threat score calculation.
  - *2-Bit CMOS ALU Simulator*: Select operations (AND, OR, ADD), toggle binary input operands and carry-in, and view output bits alongside simulated transistor voltage thresholds (2.50V).
- **Project Case Study Modal**: Deep-dive architecture breakdowns, verified technical specifications, and transistor simulation waveforms.
- **Interactive Contact Form**: Client-side validation, localStorage draft caching, and one-click email transmission fallback.
- **Direct CV Download**: Seamlessly triggers download of Mohamed Ahmed's verified resume PDF.

---

## 3. Directory Structure

```text
mohamed-ahmed-portfolio/
├── index.html                 # Primary HTML5 entry point with SEO & JSON-LD
├── 404.html                   # Engineering-themed 404 fallback page
├── favicon.svg                # High-res SVG favicon with MA monogram
├── package.json               # Project manifest and lifecycle scripts
├── README.md                  # Comprehensive documentation & deployment guide
│
├── assets/
│   ├── cv/
│   │   └── Mohamed_Ahmed_Resume.pdf  # Verified resume PDF
│   ├── images/
│   │   ├── mohamed-avatar.svg        # Custom engineering monogram avatar
│   │   ├── phish-shield-preview.svg  # ML cybersecurity dashboard preview
│   │   ├── network-topology.svg      # Huawei eNSP campus topology
│   │   └── compression-matlab.svg    # MATLAB compression and Huffman tree
│   └── projects/
│       ├── alu_schematic.png         # Cadence OrCAD ALU schematic
│       ├── alu_waveform_add.png      # PSpice ADD transient waveform
│       ├── circuit_dc_loadline.png   # DC load-line parametric plot
│       └── optical_comm_sheet.png    # Optical fiber cheat sheet
│
├── css/
│   └── style.css              # Custom styling, scrollbars, and design tokens
│
├── js/
│   ├── app.js                 # Application bootstrap & event coordination
│   ├── data.js                # Single source of truth for bio, skills & projects
│   └── components/
│       ├── navbar.js          # Sticky blur navigation & mobile drawer
│       ├── hero.js            # Hero section with avatar and metrics
│       ├── about.js           # Engineering narrative & pillars
│       ├── skills.js          # Technical Arsenal (no fake percentages)
│       ├── projects.js        # Filterable project portfolio cards
│       ├── workflow.js        # 4-step engineering methodology
│       ├── contact.js         # Direct contact channels & validated form
│       ├── footer.js          # Footer links, back-to-top & copyright
│       ├── modal.js           # Accessible case study modal
│       ├── simulators.js      # Phish-Shield & 2-Bit ALU in-browser simulators
│       └── circuitCanvas.js   # Background hardware circuit grid animation
│
└── scripts/
    ├── serve.js               # Zero-dependency local Node.js static server
    ├── serve.py               # Zero-dependency Python static server
    └── verify.js              # Comprehensive asset & syntax integrity checker
```

---

## 4. Local Development & Preview

### Option A: Using Node.js or `agy-node`

```bash
# From the project root folder:
node scripts/serve.js
```
The server will boot at `http://localhost:8080/`.

### Option B: Using Python

```bash
# From the project root folder:
python scripts/serve.py
```
Or with standard Python 3:
```bash
python -m http.server 8080
```

### Option C: Run Integrity Verification

```bash
node scripts/verify.js
```

---

## 5. GitHub Pages Deployment Guide

This repository is pre-configured for GitHub Pages without requiring any complex build step.

### Step 1: Initialize Git Repository
```bash
git init
git add .
git commit -m "feat: complete modern engineering portfolio for Mohamed Ahmed"
```

### Step 2: Push to GitHub
Create a repository named `portfolio` (or `MohamedAhmed004.github.io`) on GitHub, then link and push:
```bash
git remote add origin https://github.com/MohamedAhmed004/portfolio.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub.
2. Navigate to **Settings** > **Pages** (under the "Code and automation" section).
3. Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
4. Set branch to `main` and folder to `/ (root)`.
5. Click **Save**.
6. Your portfolio will be live at:  
   `https://MohamedAhmed004.github.io/portfolio/`

---

## 6. Personal Branding & Contact Information

- **Name**: Mohamed Ahmed (Mohamed Ahmed Fathy Abdelaziz)
- **Email**: [engmohamedahmed004@gmail.com](mailto:engmohamedahmed004@gmail.com)
- **LinkedIn**: [linkedin.com/in/mohamed-ahmed-06525024b](https://linkedin.com/in/mohamed-ahmed-06525024b)
- **WhatsApp / Phone**: [+20 115 191 5069](https://wa.me/201151915069)
- **Location**: Cairo, Egypt

---

## 7. License

Released under the [MIT License](LICENSE).
