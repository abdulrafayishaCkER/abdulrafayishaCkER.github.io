export const site = {
  name: "Abdul Rafay",
  role: "Penetration Tester | Web Application Security",
  location: "Islamabad, Pakistan",
  email: "abdulrafayjaved58@gmail.com",
  links: {
    github: "https://github.com/abdulrafayishaCkER/",
    linkedin: "https://www.linkedin.com/in/abdul-rafay-19437630b/",
    tryhackme: "https://tryhackme.com/p/rafay.ethical07",
  },
  tagline:
    "I work on penetration testing, web application security, vulnerability assessment, and security automation, with experience supporting structured security assessments and building Python-based security tools.",
  taglineSecondary:
    "My work includes reconnaissance, service enumeration, vulnerability analysis, evidence collection, technical reporting, remediation guidance, and retesting.",
  about: [
    "I work on penetration testing, web application security, vulnerability assessment, and Python security automation.",
    "My professional experience includes structured security assessment workflows covering reconnaissance, service enumeration, vulnerability analysis, evidence collection, reporting, remediation, and retesting. I have also contributed to controlled AI-assisted penetration testing systems using local LLM planning, security playbooks, confidence scoring, and structured decision workflows.",
    "Alongside offensive security, I have worked on Post-Quantum Cryptography, PKI, TLS, and SSH research. These remain supporting technical strengths while my primary focus is penetration testing and application security.",
    "I prefer security work that produces clear evidence, repeatable results, and practical remediation.",
  ],
  highlights: [
    { label: "Focus", value: "Web Application Security" },
    { label: "Certification", value: "CAPT — Hackviser" },
    { label: "Projects", value: "CryptoRecon · AI Pentest Planner · PQC Guard" },
  ],
  skills: {
    offensiveSecurity: [
      "Penetration Testing",
      "Web Application Security",
      "Vulnerability Assessment",
      "Network Reconnaissance",
      "Service Enumeration",
      "OWASP Top 10",
    ],
    securityTools: [
      "Burp Suite",
      "Nmap",
      "Metasploit",
      "ffuf",
      "Gobuster",
      "Nikto",
      "Wireshark",
      "Kali Linux",
    ],
    developmentAutomation: [
      "Python",
      "Bash",
      "Docker",
      "Git",
      "GitHub",
    ],
    securityResearch: [
      "AI-Assisted Security Workflows",
      "Local LLMs",
      "PKI",
      "TLS",
      "SSH",
      "Post-Quantum Cryptography",
    ],
  },
  experience: [
    {
      title: "Penetration Testing Intern",
      org: "Cytomate Solutions and Services",
      location: "Remote, Doha, Qatar",
      period: "Mar 2026 – May 2026",
      bullets: [
        "Contributed to structured penetration testing workflows covering reconnaissance, service enumeration, vulnerability assessment, evidence collection, reporting, remediation, and retesting.",
        "Worked on an AI-assisted penetration testing system using local LLM planning, structured security playbooks, confidence scoring, and scan-evidence interpretation.",
        "Prepared structured security findings with affected assets, technical evidence, severity context, remediation guidance, and verification steps.",
        "Helped convert assessment and scanner results into repeatable security workflows and report-ready outputs.",
      ],
    },
    {
      title: "Security Researcher, PQC and AI Research",
      org: "Cytomate Solutions and Services",
      location: "Remote, Doha, Qatar",
      period: "Jul 2025 – Sep 2025",
      bullets: [
        "Worked on cryptographic security research covering PKI, TLS, SSH, crypto-agility, and Post-Quantum Cryptography.",
        "Designed security lab workflows covering certificate review, rotation, revocation evidence, and TLS/SSH posture validation.",
        "Developed PQC Guard using Phi-2, LoRA, and PEFT for domain-focused cryptographic security research.",
        "Produced technical documentation, evaluation results, cryptographic inventory outputs, risk notes, and security guidance.",
      ],
    },
  ],
  projects: [
    {
      name: "CryptoRecon",
      description:
        "Python security scanner for web targets and local files covering TLS and certificate analysis, HTTP security headers, exposed-path discovery, secret detection, DNS security checks, subdomain signals, and structured reporting.",
      tags: ["Python", "TLS", "DNS", "HTTP", "Security Reconnaissance"],
      bullets: [
        "40+ secret-detection patterns",
        "70+ exposed-path checks",
        "35+ common API endpoint probes",
        "TLS and certificate security analysis",
        "DNS and HTTP security checks",
        "JSON and HTML reporting",
      ],
      links: { repo: "https://github.com/abdulrafayishaCkER/crypto-asset-scanner", demo: "" },
      image: "/projects/cryptorecon-preview.svg",
    },
    {
      name: "AI-Guided Penetration Testing Planner",
      description:
        "A security assessment workflow designed to convert scan evidence into structured penetration testing recommendations using local LLMs, source-bound security playbooks, confidence scoring, and controlled decision logic.",
      tags: ["Python", "Local LLMs", "RAG", "Security Playbooks", "Structured Reporting"],
      bullets: [
        "Reconnaissance and enumeration workflow mapping",
        "Scan evidence interpretation",
        "Confidence-based next-step recommendations",
        "Structured security playbooks",
        "Decision receipts",
        "Remediation and retesting guidance",
      ],
      links: { repo: "", demo: "" },
      image: "/projects/ai-guided-pentest-preview.svg",
    },
    {
      name: "PQC Guard",
      description:
        "A fine-tuned Phi-2 model for Post-Quantum Cryptography research developed using LoRA and PEFT.",
      tags: ["Phi-2", "LoRA", "PEFT", "Post-Quantum Cryptography", "PKI", "TLS", "SSH"],
      bullets: [
        "The project uses an approximately 39,000-pair domain-focused QA dataset covering PQC, PKI, TLS, SSH, cryptographic migration, and security guidance.",
        "Phi-2 fine-tuning",
        "LoRA and PEFT",
        "Approximately 39,000 PQC QA pairs",
        "Training and evaluation notebooks",
        "PQC, PKI, TLS, and SSH coverage",
        "Holdout evaluation workflow",
      ],
      links: { repo: "https://github.com/abdulrafayishaCkER/pqc-guard", demo: "" },
      image: "/projects/pqc-guard-preview.svg",
    },
  ],
  certifications: [
    {
      name: "Certified Associate Penetration Tester",
      issuer: "Hackviser",
      issued: "Feb 2026",
      credentialId: "HV-CAPT-BDO3YR7G",
      tags: ["Penetration Testing", "Offensive Security", "Red Teaming"],
    },
    {
      name: "Ethical Hacking Essentials",
      issuer: "EC-Council",
      issued: "May 2025",
      credentialId: null,
      tags: ["Ethical Hacking", "Network Security", "Vulnerability Assessment"],
    },
    {
      name: "Penetration Testing, Threat Hunting and Cryptography",
      issuer: "IBM",
      issued: "Jan 2025",
      credentialId: "WW0VNOV3CNGI",
      tags: ["Threat Hunting", "Cryptography", "Penetration Testing"],
    },
  ],
  ctf: {
    title: "Hands-On Security Practice",
    description: "Hands-on practice through controlled security labs and security training platforms.",
    areas: [
      "Reconnaissance and service enumeration",
      "Web application security",
      "Linux environments",
      "Vulnerability analysis",
      "Security tooling",
      "Evidence collection and reporting",
    ],
    platforms: [
      { name: "TryHackMe", link: "https://tryhackme.com/p/rafay.ethical07" },
      { name: "Hack The Box", link: "" },
    ],
  },
  education: [
    {
      degree: "BS Cyber Security",
      institution: "Air University",
      location: "Islamabad, Pakistan",
      period: "2023 – 2027",
      cgpa: "3.62 / 4.00",
    },
  ],
  seo: {
    title: "Abdul Rafay — Penetration Testing Portfolio",
    description:
      "Portfolio of Abdul Rafay focused on penetration testing, web application security, vulnerability assessment, and Python security automation, with AI-assisted penetration testing workflows and supporting PQC research.",
    url: "https://abdulrafay07.netlify.app",
  },
} as const;
