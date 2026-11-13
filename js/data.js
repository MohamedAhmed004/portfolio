/**
 * Mohamed Ahmed — Engineering Portfolio Data Store
 * All information is strictly verified against academic records, CV, and project repositories.
 */

export const personalInfo = {
  name: "Mohamed Ahmed",
  fullName: "Mohamed Ahmed Fathy Abdelaziz",
  title: "Aspiring Communication and Electronics Engineer",
  subtitle: "Communication & Electronics Engineering Student | Cybersecurity | Networking | MATLAB | Circuit Design",
  headline: "Engineering Ideas Into Practical Solutions.",
  intro: "I'm Mohamed Ahmed, an aspiring Communication and Electronics Engineer with a growing passion for cybersecurity, networking, programming, MATLAB, and electronic circuit design. I combine a strong academic background with hands-on project experience to develop practical, reliable, and efficient technical solutions.",
  mission: "I'm an engineer who combines electronics, programming, and modern technology to turn ideas into practical solutions.",
  location: "Cairo, Egypt",
  phone: "+20 115 191 5069",
  whatsappUrl: "https://wa.me/201151915069",
  email: "engmohamedahmed004@gmail.com",
  linkedin: "https://linkedin.com/in/mohamed-ahmed-06525024b",
  github: "https://github.com", // verified placeholder for GitHub profile
  cvPath: "assets/cv/Mohamed_Ahmed_Resume.pdf",
  status: "Available for Engineering Internships & Collaborative Projects",
  education: {
    degree: "B.Sc. in Communication and Electronics Engineering",
    institution: "MTI University, Cairo, Egypt",
    expectedGraduation: "2027",
    highlights: [
      "Specialized in Telecommunications, RF Propagation & Digital Electronics",
      "Hands-on laboratory experience with Cadence OrCAD/PSpice, Huawei eNSP, and MATLAB",
      "Strong theoretical and applied foundation in signal processing and circuit synthesis"
    ]
  },
  metrics: [
    { label: "ML URL Dataset Samples", value: "549k+", detail: "Random Forest training with StratifiedGroupKFold" },
    { label: "CMOS ALU Test Cases", value: "64", detail: "Exhaustive transistor-level transient verification" },
    { label: "Professional Credentials", value: "3", detail: "CCNA · HCIA-Datacom · ITI Embedded" },
    { label: "Academic Graduation", value: "2027", detail: "MTI University Communication Engineering" }
  ]
};

export const certifications = [
  {
    id: "ccna",
    title: "CCNA — Cisco Certified Network Associate",
    issuer: "Engovation / Cisco Track",
    category: "Networking & Security",
    icon: "network",
    description: "In-depth routing and switching architectures, IPv4/IPv6 subnetting, VLAN trunking, Spanning Tree Protocol (STP), NAT, ACLs, and network security fundamentals.",
    skills: ["Routing & Switching", "Subnetting", "VLANs", "STP", "ACLs", "NAT"]
  },
  {
    id: "hcia",
    title: "HCIA-Datacom",
    issuer: "DEPI (Digital Egypt Pioneers Initiative)",
    category: "Datacom & Enterprise",
    icon: "shield-check",
    description: "Enterprise network design, routing protocol configuration (OSPF, BGP basics), Huawei VRP command line, and secure campus switching with Huawei eNSP.",
    skills: ["Huawei VRP", "eNSP", "OSPF", "Enterprise Campus", "DHCP Snooping"]
  },
  {
    id: "iti",
    title: "Embedded Systems Training (AVR Focus)",
    issuer: "ITI (Information Technology Institute)",
    category: "Embedded & Hardware",
    icon: "cpu",
    description: "Embedded C programming, ATmega32 microcontroller architecture, register-level hardware interfacing, GPIO, Timers, Interrupts, and serial communication (UART/SPI/I2C).",
    skills: ["Embedded C", "ATmega32", "Microcontrollers", "Timers & Interrupts", "UART/SPI"]
  }
];

export const technicalArsenal = [
  {
    category: "Electronics & Digital Logic",
    icon: "cpu",
    accent: "cyan",
    summary: "Transistor-level CMOS modeling, digital logic synthesis, and circuit simulation.",
    skills: [
      { name: "Circuit Design", detail: "Schematic capture, DC/AC operating point analysis & impedance matching" },
      { name: "Digital Logic Design", detail: "Combinational & sequential logic, ALUs, multiplexers, and state machines" },
      { name: "Cadence OrCAD Capture", detail: "Hierarchical circuit design, netlisting & DBO/Tcl scripting" },
      { name: "PSpice Simulation", detail: "Transistor-level transient, parametric & DC sweep analysis" },
      { name: "CMOS Transistor Sizing", detail: "Pull-up PMOS (Wp=9µm) / Pull-down NMOS (Wn=3µm) ratios and delay balancing" }
    ]
  },
  {
    category: "Computer Networking",
    icon: "network",
    accent: "blue",
    summary: "Enterprise network design, layer 2/3 protocol engineering, and packet simulation.",
    skills: [
      { name: "TCP/IP & OSI Model", detail: "End-to-end packet flow, socket encapsulation, and protocol analysis" },
      { name: "Subnetting & Addressing", detail: "IPv4 VLSM calculation, CIDR blocks, and gateway partitioning" },
      { name: "VLANs & 802.1Q Trunking", detail: "Inter-VLAN routing, sub-interfaces, and broadcast domain isolation" },
      { name: "Spanning Tree Protocol (STP/RSTP)", detail: "Loop prevention, root bridge election, and convergence optimization" },
      { name: "Routing & NAT", detail: "Static routes, OSPF adjacency, NAPT, and dynamic IP pools" },
      { name: "Huawei eNSP & Cisco Packet Tracer", detail: "Campus topology modeling, multi-switch lab testing & validation" }
    ]
  },
  {
    category: "Cybersecurity & Systems",
    icon: "shield",
    accent: "indigo",
    summary: "Threat analysis, static heuristic feature extraction, and ML security defense.",
    skills: [
      { name: "Cybersecurity Fundamentals", detail: "Threat modeling, attack vectors, confidentiality-integrity-availability (CIA)" },
      { name: "Phishing Detection & Heuristics", detail: "Static URL feature extraction (entropy, homoglyphs, brand spoofing)" },
      { name: "Machine Learning for Security", detail: "Random Forest classification, hyperparameter tuning, leakage prevention" },
      { name: "Access Control Lists (ACLs)", detail: "Standard/Extended ACL rule synthesis, firewall filtering policies" },
      { name: "Offline & Air-Gapped Security", detail: "Zero-network inspection architecture to prevent probe attribution" }
    ]
  },
  {
    category: "Programming & Software",
    icon: "code",
    accent: "emerald",
    summary: "Modular software development, scientific scripting, and data structures.",
    skills: [
      { name: "Python", detail: "Scikit-learn, Pandas, NumPy, Tkinter GUIs, and automated test suites" },
      { name: "C Programming", detail: "Pointers, dynamic memory, structs, modular separation, and CLI architecture" },
      { name: "C++", detail: "Object-oriented programming, standard template library (STL), and algorithms" },
      { name: "Embedded C", detail: "Hardware abstraction layers, bit manipulation, and peripheral registers" },
      { name: "Pytest & Test Automation", detail: "Unit testing, regression benches, and dataset verification pipelines" }
    ]
  },
  {
    category: "Engineering Modeling & Simulation",
    icon: "activity",
    accent: "amber",
    summary: "Mathematical computing, signal compression algorithms, and communication physics.",
    skills: [
      { name: "MATLAB", detail: "Mathematical modeling, signal analysis, matrix operations, and script GUIs" },
      { name: "Data Compression Algorithms", detail: "Huffman trees, Shannon-Fano variable-length coding, and LZ78 dictionary" },
      { name: "RF LOS & Fresnel Zone Analysis", detail: "Line-of-sight propagation, knife-edge diffraction, and Fresnel clearance" },
      { name: "Optical Fiber Communications", detail: "Microbending vs. macrobending attenuation, step-index waveguide losses" },
      { name: "Parametric Engineering Reporting", detail: "Automated chart generation, LaTeX/Typst rendering, and empirical validation" }
    ]
  }
];

export const projects = [
  {
    id: "phish-shield",
    title: "Phish-Shield: ML-Powered Phishing URL Detector",
    shortTitle: "Phish-Shield Detector",
    category: "Cybersecurity & ML",
    filterTag: "cybersecurity",
    featured: true,
    image: "assets/images/phish-shield-preview.svg",
    badge: "549k Samples · 20 Features",
    summary: "An offline machine learning system that classifies suspicious URLs with 20 static structural and linguistic features, strict domain leakage prevention, and zero internet requests.",
    description: "Phishing attacks are the top vector for credential theft and social engineering. Phish-Shield extracts 20 structural, lexical, and typographical features from raw URL text without contacting the destination host. Trained on over 549,000 verified URL samples using a Random Forest Classifier and StratifiedGroupKFold domain grouping, it prevents data leakage between training and testing splits. Includes an interactive terminal interface, a Tkinter desktop GUI, and 41 automated pytest test suites.",
    keyPoints: [
      "20 Static Lexical & Structural Features: Shannon entropy, IPv4/IPv6 literal detection, subdomain depth, homoglyph traps, and character ratios",
      "Leakage-Free Validation: Grouped by domain hostname via StratifiedGroupKFold to guarantee generalization to completely new domains",
      "100% Offline & Safe: Submitted URLs are never contacted, visited, or executed, avoiding attacker detection",
      "Dual Interface: Interactive ANSI terminal CLI + dark desktop GUI with probability gauges and actionable warnings",
      "Rigorous Test Suite: 41 automated tests verifying feature integrity, schema validation, and model serialization"
    ],
    technologies: ["Python", "Scikit-learn", "Random Forest", "Pandas", "NumPy", "Tkinter", "Pytest", "Joblib"],
    demoType: "simulator-phish",
    stats: [
      { label: "Dataset Size", value: "549,000+ URLs" },
      { label: "Static Features", value: "20 Vectors" },
      { label: "Pytest Pass Rate", value: "41 / 41 (100%)" },
      { label: "Network Call Overhead", value: "0 ms (Offline)" }
    ],
    githubUrl: "https://github.com",
    hasLiveSimulator: true
  },
  {
    id: "alu-2bit",
    title: "2-Bit CMOS Arithmetic Logic Unit (ALU) Design & Verification",
    shortTitle: "2-Bit CMOS ALU",
    category: "Electronics & Hardware",
    filterTag: "hardware",
    featured: true,
    image: "assets/projects/alu_schematic.png",
    secondaryImage: "assets/projects/alu_waveform_add.png",
    badge: "Cadence OrCAD · PSpice · 64 Cases",
    summary: "A transistor-level CMOS 2-bit ALU designed in OrCAD Capture 17.4 with custom PSpice simulation decks and automated Python verification testing 64 truth-table combinations.",
    description: "This project implements a complete 2-bit Arithmetic Logic Unit at the CMOS transistor level. Supporting AND, OR, and ADD operations, the circuit uses Cadence MbreakP4 and MbreakN4 devices operating at VDD = 5.0 V with precision transistor sizing (L = 2 µm, Wp = 9 µm, Wn = 3 µm). An automated Python test suite executes four self-contained PSpice decks, sampling outputs against a 2.5 V logic threshold to exhaustively verify all 64 operational states (16 AND pairs, 16 OR pairs, and 32 ADD carry combinations).",
    keyPoints: [
      "Transistor-Level CMOS Topology: Designed with Cadence MbreakP4/MbreakN4 devices at VDD = 5.0 V",
      "Precision Gate Sizing: PMOS Wp = 9 µm, NMOS Wn = 3 µm, channel length L = 2 µm for balanced rise/fall propagation delays",
      "Automated Verification Suite: Custom Python harness running psp_cmd.exe to parse .dat and .out waveform files",
      "Exhaustive 64-Case Truth Table: 16 AND operations, 16 OR operations, and 32 ADD input/carry states evaluated at 2.5 V logic threshold",
      "OrCAD Capture Scripting: Automated Tcl/DBO hierarchical pruning and net-alias cleanup script"
    ],
    technologies: ["OrCAD Capture", "PSpice", "CMOS", "Transistor Logic", "Python", "Tcl/Tk", "Digital Design"],
    demoType: "simulator-alu",
    stats: [
      { label: "Operating Voltage", value: "5.0 V DC" },
      { label: "CMOS Channel Length", value: "2.0 µm" },
      { label: "Verified Cases", value: "64 Exhaustive" },
      { label: "Logic Threshold", value: "2.5 V" }
    ],
    githubUrl: "https://github.com",
    hasLiveSimulator: true
  },
  {
    id: "enterprise-network",
    title: "Enterprise Multi-Department Network Infrastructure",
    shortTitle: "Enterprise Network Design",
    category: "Networking",
    filterTag: "networking",
    featured: true,
    image: "assets/images/network-topology.svg",
    badge: "Huawei eNSP · VLANs · NAT · ACLs",
    summary: "Hierarchical campus network simulation featuring multi-department segmentation, redundant core switching, dynamic DHCP allocation, and enterprise ACL security policies.",
    description: "Engineered in Huawei eNSP, this enterprise campus network infrastructure connects multiple functional departments (Engineering R&D, Executive Management, IT Security, and Guest DMZ). Incorporating Huawei AR2220 series routers and S5700 Gigabit switches, the architecture features 802.1Q VLAN trunking, MSTP loop prevention, inter-VLAN routing, NAPT for Internet egress, and strict Access Control Lists (ACL 3001) to isolate critical engineering assets from public segments.",
    keyPoints: [
      "Departmental Isolation: Partitioned broadcast domains across VLAN 10 (R&D), VLAN 20 (Exec), VLAN 30 (IT), and VLAN 99 (DMZ)",
      "Redundant Switching Architecture: Huawei S5700 core switches configured with Eth-Trunk link aggregation and MSTP",
      "Traffic Control & Security: Extended ACLs applied to core interfaces to block unauthorized inter-departmental probing",
      "Dynamic Services: Centralized DHCP pools with subnet reservations, lease timers, and NAT address translation",
      "Rigorous Verification: Packet-level ping sweeps, traceroute path validation, and link failure failover tests"
    ],
    technologies: ["Huawei eNSP", "Cisco Packet Tracer", "VLANs", "802.1Q", "NAT/NAPT", "ACLs", "MSTP", "OSPF"],
    demoType: "network-spec",
    stats: [
      { label: "VLAN Segments", value: "4 Dedicated" },
      { label: "Core Switching", value: "Huawei S5700" },
      { label: "Routing Engine", value: "Huawei AR2220" },
      { label: "Convergence Protocol", value: "MSTP + OSPF" }
    ],
    githubUrl: "https://github.com",
    hasLiveSimulator: false
  },
  {
    id: "matlab-compression",
    title: "Data Compression Algorithms Studio & GUI",
    shortTitle: "MATLAB Compression Studio",
    category: "Software & Algorithms",
    filterTag: "software",
    featured: false,
    image: "assets/images/compression-matlab.svg",
    badge: "MATLAB · Huffman · Shannon-Fano · LZ78",
    summary: "Interactive MATLAB engineering tool implementing Huffman, Shannon-Fano, and LZ78 data compression algorithms with step-by-step tree visualization and entropy analytics.",
    description: "Developed in MATLAB, this application provides an interactive graphical interface to analyze source coding and information theory fundamentals. It implements Huffman optimal prefix coding, Shannon-Fano probabilistic partitioning, and LZ78 dictionary-based compression from scratch. The system calculates empirical source entropy H(X), average code length L, coding efficiency η, and redundancy, plotting comparative compression ratios across varying text and signal datasets.",
    keyPoints: [
      "Algorithms Built From Scratch: Native implementation of Huffman priority trees, Shannon-Fano partitioning, and LZ78 sliding dictionaries",
      "Information Theory Metrics: Live computation of Shannon entropy H(X), average codeword length L, and coding efficiency η (reaching >98%)",
      "Graphical Synthesis: Interactive visual tree rendering showing binary code branches and symbol probabilities",
      "Benchmarking Engine: Evaluates data size reduction across arbitrary text, sensor streams, and simulated telemetry",
      "MATLAB App Designer UI: Clean desktop controls for dataset loading, step-by-step encoding, and dictionary inspection"
    ],
    technologies: ["MATLAB", "Information Theory", "Data Compression", "Huffman Coding", "Shannon-Fano", "LZ78", "Algorithms"],
    demoType: "matlab-spec",
    stats: [
      { label: "Algorithms", value: "3 Core Methods" },
      { label: "Max Efficiency η", value: "> 98.1%" },
      { label: "Entropy Calculation", value: "Exact H(X)" },
      { label: "Runtime Engine", value: "MATLAB App" }
    ],
    githubUrl: "https://github.com",
    hasLiveSimulator: false
  },
  {
    id: "cmos-xor-loadline",
    title: "CMOS 2-Input XOR Gate & DC Load Line Characterization",
    shortTitle: "CMOS XOR & DC Load Line",
    category: "Electronics & Hardware",
    filterTag: "hardware",
    featured: false,
    image: "assets/projects/circuit_dc_loadline.png",
    badge: "PSpice · DC Load Line · CMOS",
    summary: "Transistor-level CMOS XOR gate simulation in Cadence PSpice combined with BJT DC load-line analysis and Q-point stability evaluation.",
    description: "An electronic circuit design study combining digital CMOS logic with analog biasing analysis. Implemented a 2-input CMOS XOR gate at the transistor level in Cadence PSpice, analyzing switching waveforms, voltage transfer characteristics (VTC), and propagation delays under capacitive load. Additionally, conducted DC load-line parametric modeling for bipolar transistor amplifiers to determine quiescent operating points (Q-point), saturation limits, and thermal stability boundaries.",
    keyPoints: [
      "CMOS XOR Gate Netlisting: Built from complementary PMOS pull-up and NMOS pull-down networks",
      "Voltage Transfer Characteristics (VTC): Evaluated noise margins (NML, NMH) and logic threshold switching voltages",
      "DC Load-Line Modeling: Parametric load lines computed to optimize dynamic voltage swing and avoid cutoff distortion",
      "Transient Response: Measured rise time, fall time, and propagation delay under varying output loads",
      "PSpice Simulation Profiles: Executed DC sweeps and transient analyses with exact device models"
    ],
    technologies: ["Cadence PSpice", "CMOS", "Electronic Circuits", "DC Load Lines", "Analog Biasing", "Semiconductor Physics"],
    demoType: "circuit-spec",
    stats: [
      { label: "Logic Gate", value: "2-Input XOR" },
      { label: "Analysis Profiles", value: "DC Sweep + Transient" },
      { label: "Characterization", value: "VTC & Q-Point" },
      { label: "Toolchain", value: "Cadence PSpice" }
    ],
    githubUrl: "https://github.com",
    hasLiveSimulator: false
  },
  {
    id: "optical-communication",
    title: "Optical Fiber Communication Parametric Suite",
    shortTitle: "Optical Comm Loss Suite",
    category: "Electronics & Hardware",
    filterTag: "hardware",
    featured: false,
    image: "assets/projects/optical_comm_sheet.png",
    badge: "Optical Fiber · Micro/Macrobending · Typst",
    summary: "Parametric loss modeling and illustrated engineering study evaluating optical fiber attenuation, microbending vs. macrobending losses, and dispersion limits.",
    description: "Investigated fiber-optic transmission impairments in modern telecommunication channels (ELTE 313 curriculum). Modeled power loss equations for single-mode and multimode fibers, comparing perturbation-induced microbending against critical-radius macrobending radiative losses. Synthesized mathematical models with automated chart generators and high-precision technical documentation rendered in Typst and Python.",
    keyPoints: [
      "Attenuation Physics: Quantitative evaluation of Rayleigh scattering, absorption bands (OH- ions), and geometric bending losses",
      "Microbending vs. Macrobending: Comprehensive comparison of mechanical stress micro-distortions versus curvature radiation losses",
      "Parametric Modeling: Python-generated power-budget plots and critical bend-radius threshold curves",
      "Engineering Reference Guide: Authored an illustrated technical reference guide and quick-lookup cheat sheet",
      "System Link Budget: Calculated maximum repeaterless transmission distance across standard telecommunication windows (1310 nm & 1550 nm)"
    ],
    technologies: ["Optical Communications", "Fiber Optics", "Python", "Typst", "Parametric Modeling", "Telecommunications"],
    demoType: "optical-spec",
    stats: [
      { label: "Wavelength Windows", value: "1310 / 1550 nm" },
      { label: "Loss Mechanisms", value: "Micro + Macrobend" },
      { label: "Reporting Format", value: "Typst + Python" },
      { label: "Course Focus", value: "ELTE 313 Telecom" }
    ],
    githubUrl: "https://github.com",
    hasLiveSimulator: false
  },
  {
    id: "clinic-management",
    title: "Clinic & Patient Management System",
    shortTitle: "Clinic Management in C",
    category: "Software & Algorithms",
    filterTag: "software",
    featured: false,
    image: "assets/images/phish-shield-preview.svg", // clean card fallback
    badge: "C Programming · Modular Design",
    summary: "A robust console application built in pure C featuring dual Admin/User privilege modes, dynamic patient record management, and appointment scheduling.",
    description: "Engineered in C with strict modular design and separation of concerns. Features dedicated Admin mode (patient registration, medical history editing, slot reservation) and User mode (patient record lookup and appointment viewing). Employs memory-safe struct arrays, input validation guards, and modular file organization.",
    keyPoints: [
      "Role-Based Privileges: Password-protected Admin access and read-only User view modes",
      "Appointment Slot Management: Real-time conflict checking for daily reservation blocks",
      "Data Structures: Efficient struct-based database architecture with search, update, and cancellation logic",
      "Defensive Programming: Comprehensive input validation preventing buffer overflows and invalid inputs"
    ],
    technologies: ["C", "Data Structures", "Algorithms", "Modular Architecture", "CLI"],
    demoType: "c-spec",
    stats: [
      { label: "Language", value: "ANSI C" },
      { label: "Architecture", value: "Modular Structs" },
      { label: "Privilege Tiers", value: "Admin & User" },
      { label: "Input Guards", value: "Full Sanitization" }
    ],
    githubUrl: "https://github.com",
    hasLiveSimulator: false
  }
];

export const workflowSteps = [
  {
    step: "01",
    phase: "Understand",
    title: "Problem Formulation & Requirements",
    tagline: "Analyze constraints, define specs & formulate boundary conditions.",
    description: "Every engineering problem starts with rigorous decomposition. I analyze the technical requirements, review protocol or physical constraints (e.g., voltage levels, bandwidth, security threat vectors), and establish measurable acceptance criteria.",
    deliverables: ["Quantitative Specification Sheet", "Threat / Constraint Modeling", "System Boundary Definition"],
    icon: "search"
  },
  {
    step: "02",
    phase: "Design",
    title: "Architecture & Schematic Blueprint",
    tagline: "Formulate circuit schematics, topologies & algorithmic workflows.",
    description: "I translate requirements into concrete engineering blueprints: drafting transistor schematics in OrCAD Capture, architecting VLAN subnets and IP schemes in eNSP, or choosing optimal machine learning pipelines in Scikit-learn.",
    deliverables: ["Hierarchical Schematics & Netlists", "Network Topology Blueprints", "Algorithmic Flowcharts"],
    icon: "layout"
  },
  {
    step: "03",
    phase: "Implement & Simulate",
    title: "Fabrication, Modeling & Verification",
    tagline: "Build the solution, run exhaustive simulations & execute unit benches.",
    description: "The concept is brought to life through clean implementation and simulation: running transient PSpice simulations across full truth tables, verifying end-to-end packet routing with ping and traceroute in eNSP, and executing automated pytest suites.",
    deliverables: ["PSpice Waveform Verification (.dat/.out)", "Functional Network Lab Deployments", "Automated Regression Test Suites"],
    icon: "terminal"
  },
  {
    step: "04",
    phase: "Improve",
    title: "Optimization & Rigorous Documentation",
    tagline: "Evaluate empirical results, refine efficiency & deliver documentation.",
    description: "I review performance metrics against targets: tuning transistor aspect ratios for minimal propagation delay, eliminating data leakage with GroupKFold validation, optimizing coding efficiency in MATLAB, and compiling detailed documentation.",
    deliverables: ["Performance Metric Benchmarks", "Leakage-Free Validation Reports", "Comprehensive Technical Manuals"],
    icon: "trending-up"
  }
];
