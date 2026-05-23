export const site = {
  name: "Abdul Rafay",
  role: "Penetration Tester | AI Security Automation | CAPT",
  location: "Islamabad, Pakistan",
  email: "abdulrafayjaved58@gmail.com",
  links: {
    github: "https://github.com/abdulrafayishaCkER/",
    linkedin: "https://www.linkedin.com/in/abdul-rafay-19437630b/",
  },
  tagline:
    "Offensive-minded cybersecurity student focused on penetration testing, vulnerability assessment, Python security automation, and AI-assisted security workflows using structured playbooks, local LLM planning, and evidence-based reporting.",
  about: [
    "Cyber Security student at Air University focused on practical penetration testing, vulnerability assessment, Python security automation, and AI-assisted cybersecurity workflows.",
    "Recent work includes contributing to an AI-assisted penetration testing system at Cytomate Solutions and Services, where structured playbooks, scan evidence, confidence scoring, policy gates, and decision receipts support safe next-step recommendations and report-ready findings.",
    "Hands-on experience with PQC and crypto-agility research, including PKI workflows, TLS/SSH posture validation, CBOM-style asset discovery, risk register scoring, and fine-tuned security assistants.",
    "I build projects that I can explain, test, and defend under pressure: scoped security workflows, repeatable evidence capture, clear technical reporting, and practical automation.",
  ],
  highlights: [
    { label: "Certification", value: "CAPT — Certified Associate Penetration Tester" },
    { label: "Internship",    value: "Cytomate Solutions and Services — AI-Assisted Penetration Testing (Doha, Qatar · Remote)" },
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
      title: "Penetration Testing Intern",
      org: "Cytomate Solutions and Services",
      location: "Doha, Qatar · Remote",
      period: "Mar 2026 — May 2026",
      bullets: [
        "Worked on an AI-assisted penetration testing system focused on authorized, evidence-based security assessment and safe next-step recommendation.",
        "Helped build and refine playbook-guided testing logic that maps scan evidence to reconnaissance, enumeration, validation, reporting, and retesting actions.",
        "Supported safety-focused AI planning using structured playbooks, confidence scoring, policy gates, decision receipts, and report-ready evidence.",
        "Contributed to a local/Qwen-compatible security workflow where AI acts as a bounded planner while tool execution remains controlled through safety checks.",
      ],
    },
    {
      title: "Post-Quantum Cryptography & Agentic AI Researcher",
      org: "Cytomate Solutions and Services",
      location: "Doha, Qatar · Remote",
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
      name: "AI-Guided Penetration Testing Planner",
      description:
        "A cybersecurity assessment workflow that uses scan evidence and structured playbooks to recommend the next testing step. The system focuses on reconnaissance, enumeration, validation, policy-gated decisions, confidence scoring, and report-ready evidence.",
      tags: ["Python", "Local LLM / Qwen", "RAG", "Security Playbooks", "Evidence Reporting", "Policy Gates"],
      bullets: [
        "Maps scan results to source-bound playbook steps and safe testing actions.",
        "Uses confidence scoring, policy gates, and decision receipts to keep recommendations auditable.",
        "Supports local/Qwen-compatible AI planning while keeping execution controlled and safety-gated.",
        "Produces evidence-focused outputs for reporting, remediation, and retesting.",
      ],
      links: { repo: "", demo: "" },
      image: "https://github.com/user-attachments/assets/5eb13405-894f-49a6-a3b8-4d0188a19a66",
    },
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
      "Portfolio of Abdul Rafay: Penetration Tester, CAPT certified, AI security automation builder, and PQC researcher. Projects include an AI-guided pentesting planner, CBOM-style cryptographic asset discovery, and a fine-tuned PQC assistant.",
    url: "https://abdulrafay07.netlify.app",
  },
} as const;
