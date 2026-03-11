export const site = {
  name: "Abdul Rafay",
  role: "Penetration Tester | CAPT | Boot2Root",
  location: "Islamabad, Pakistan",
  email: "abdulrafayjaved58@gmail.com",
  links: {
    github: "https://github.com/abdulrafayishaCkER/",
    linkedin: "https://www.linkedin.com/in/abdul-rafay-19437630b/",
  },
  tagline:
    "Offensive-minded security researcher and CTF player specializing in penetration testing, red teaming, and the intersection of Post-Quantum Cryptography with Agentic AI.",
  about: [
    "BS Cyber Security student at Air University with a strong focus on practical offensive security, crypto-agility, and evidence-driven security engineering.",
    "Hands-on experience designing an enterprise-grade PQC compliance lab — covering PKI workflows, TLS/SSH posture validation, CBOM-style asset discovery, and risk register scoring.",
    "Comfortable operating across red teaming workflows, ML-assisted security tooling, and automation. I build things I can defend under pressure in a technical interview.",
  ],
  highlights: [
    { label: "Certification", value: "CAPT — Certified Associate Penetration Tester" },
    { label: "Internship",    value: "Cytomate — PQC & Agentic AI Research (Doha, Qatar)" },
    { label: "Education",     value: "BS Cyber Security, Air University (2023–2027)" },
  ],
  skills: {
    offensive: [
      "Web Penetration Testing",
      "Network Reconnaissance",
      "Privilege Escalation",
      "CTF Competitions",
      "Threat Hunting",
    ],
    securityEngineering: [
      "PKI Infrastructure",
      "TLS/SSH Hardening",
      "Threat Modeling",
      "Risk Registers",
      "Compliance Evidence",
    ],
    pqc: [
      "Post-Quantum Cryptography",
      "Hybrid TLS (ML-KEM)",
      "Crypto-Agility Drills",
      "Migration Planning",
      "CBOM",
    ],
    programming: [
      "Python",
      "C++",
      "Docker",
      "Linux",
    ],
    ml: [
      "LLM Fine-Tuning",
      "Dataset Curation",
      "Agentic AI Systems",
    ],
  },
  experience: [
    {
      title: "Post-Quantum Cryptography & Agentic AI Researcher",
      org: "Cytomate",
      location: "Doha, Qatar",
      period: "Jul 2025 — Sep 2025",
      bullets: [
        "Designed and implemented an enterprise-grade PQC compliance & crypto-agility lab with segmented network zones (ADMIN / DMZ / LAN) and full evidence-driven validation pipelines.",
        "Built end-to-end PKI workflows covering root/intermediate CA issuance, CRL management, certificate rotation and rollback — validated TLS/SSH posture across multiple production-like services.",
        "Engineered a Phi-2 PQC assistant: curated a domain-specific dataset (PQC, PKI, TLS/SSH, compliance language), fine-tuned the model, and optimized outputs for defensible enterprise review.",
        "Produced CBOM-style cryptographic inventory outputs and risk-register scoring aligned to enterprise reporting standards.",
      ],
    },
  ],
  projects: [
    {
      name: "PQC-Guard — Phi-2 Fine-Tuned LLM",
      description:
        "A domain-specific fine-tuned language model built to assist enterprises with Post-Quantum Cryptography migration: policy checks, remediation guidance, and safer crypto defaults.",
      tags: ["LLM Fine-Tuning", "Post-Quantum Cryptography", "Dataset Engineering", "Evaluation"],
      bullets: [
        "Curated a high-quality domain dataset covering PQC standards, PKI workflows, TLS/SSH posture, and compliance language to train an adapted Phi-2 model.",
        "Optimized model outputs for actionable enterprise use: structured checklists, remediation steps, and evidence-friendly migration summaries.",
      ],
      links: { repo: "", demo: "" },
      image: "/projects/pqc-guard-preview.svg",
    },
    {
      name: "CBOM Builder — Cryptographic Asset Discovery",
      description:
        "A Python-based scanning workflow that produces a Cryptographic Bill of Materials: TLS/SSH posture, certificate chain analysis, debt flagging, and prioritized risk register records.",
      tags: ["Python", "TLS/SSH Analysis", "CBOM", "Risk Scoring", "Automation"],
      bullets: [
        "Evidence-first design with non-crashing behavior — purpose-built for auditor-ready output on live enterprise endpoints.",
        "Automatically flags cryptographic debt (legacy TLS, weak keys, missing revocation, excessive validity) and maps each finding to a prioritized risk entry.",
      ],
      links: { repo: "", demo: "" },
      image: "/projects/cbom-builder-preview.svg",
    },
  ],
  certifications: [
    {
      name: "Certified Associate Penetration Tester (CAPT)",
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
      name: "Penetration Testing, Threat Hunting & Cryptography",
      issuer: "IBM",
      issued: "Jan 2025",
      credentialId: "WW0VNOV3CNGI",
      tags: ["Threat Hunting", "Cryptography", "Penetration Testing"],
    },
  ],
  ctf: {
    title: "CTF & Hands-On Practice",
    bullets: [
      "Regular practice on Hack The Box and TryHackMe with primary focus on web exploitation and Linux privilege escalation.",
      "Strong command of core tooling: nmap, Burp Suite, ffuf, testssl, dockerized labs, and repeatable evidence capture workflows.",
      "Methodical approach: recon → enumeration → exploitation → privilege escalation → post-exploitation reporting.",
    ],
  },
  education: [
    {
      degree: "BS Cyber Security",
      institution: "Air University",
      location: "Islamabad, Pakistan",
      period: "2023 — 2027",
    },
    {
      degree: "Intermediate, Pre-Engineering",
      institution: "Fazaia Inter College (FIC)",
      location: "Pakistan",
      period: "Jun 2021 — Aug 2023",
    },
  ],
  seo: {
    title: "Abdul Rafay — Offensive Security Portfolio",
    description:
      "Portfolio of Abdul Rafay: Penetration Tester, CAPT certified, PQC & AI Researcher. Projects include CBOM-style cryptographic asset discovery and Phi-2 fine-tuned PQC assistant.",
    url: "https://abdulrafay07.netlify.app",
  },
} as const;
