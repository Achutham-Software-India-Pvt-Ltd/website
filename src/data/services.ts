export type ServiceFaq = { q: string; a: string };

export type ServiceData = {
  slug: string;
  navLabel: string;
  name: string;
  headline: string;
  summary: string;
  problem: string;
  whatWeProvide: string[];
  technologies: string[];
  engagementModels: string[];
  typicalRoles: string[];
  process: string[];
  faq: ServiceFaq[];
  ctaLabel: string;
};

export const services: ServiceData[] = [
  {
    slug: "software-engineering",
    navLabel: "Software Engineering",
    name: "Software Engineering",
    headline: "Engineers who ship production-grade software, not just code samples",
    summary:
      "Full-stack, backend, frontend and mobile engineers who plug into your codebase, your sprint process and your standards.",
    problem:
      "Product roadmaps move faster than internal hiring. Backlogs grow, release cycles slip, and your senior engineers spend more time reviewing junior work than building. Hiring quickly in a tight local market is expensive and slow, and a bad hire is costly to unwind.",
    whatWeProvide: [
      "Individual engineers who join your existing team and workflow",
      "Small dedicated pods for a specific product area or roadmap initiative",
      "Full-stack, backend-only or frontend-only specialists depending on your gap",
      "Engineers experienced working in agile, sprint-based delivery with US/EU-overlap hours",
    ],
    technologies: ["Java", "Python", ".NET", "Node.js", "React", "Angular", "Full Stack", "Backend", "Frontend", "Mobile"],
    engagementModels: [
      "Dedicated Resource — one engineer embedded in your team",
      "Staff Augmentation — add specialists alongside your existing org",
      "Managed Team — Achutham owns delivery for a defined scope",
      "POC / Project — a bounded engagement to prove fit before scaling",
    ],
    typicalRoles: [
      "Full Stack Engineer",
      "Backend Engineer (Java / Python / .NET / Node.js)",
      "Frontend Engineer (React / Angular)",
      "Mobile Engineer",
    ],
    process: [
      "Understand the tech stack, the role and the outcome you need",
      "Source candidates who already work in that stack",
      "Technically screen for hands-on skill, not just resume keywords",
      "You interview the shortlist we present",
      "Selected engineers onboard and start contributing to sprints",
    ],
    faq: [
      {
        q: "How fast can an engineer start?",
        a: "Timelines depend on the role's seniority and stack. Once we understand the requirement, we share a realistic timeline before you commit to anything.",
      },
      {
        q: "Do engineers work in our timezone?",
        a: "We structure engagements around meaningful overlap with US/EU business hours, and adjust based on what your team needs.",
      },
      {
        q: "Can we start with one engineer and grow later?",
        a: "Yes — most engagements start with a single dedicated resource. You scale the team once you've seen how the engineer performs.",
      },
      {
        q: "Who manages performance and delivery?",
        a: "For Dedicated Resource and Staff Augmentation, your team manages day-to-day work directly. For Managed Team engagements, Achutham owns delivery and reports on progress.",
      },
    ],
    ctaLabel: "Explore Software Engineering",
  },
  {
    slug: "qa-automation",
    navLabel: "QA & Test Automation",
    name: "QA & Test Automation",
    headline: "Quality engineering that catches regressions before your customers do",
    summary:
      "Test automation engineers and SDETs who build maintainable frameworks around Playwright, Selenium and your CI/CD pipeline.",
    problem:
      "Manual regression testing doesn't scale with release velocity. Test suites become slow, flaky or abandoned, and quality issues slip into production — usually right when the team is moving fastest.",
    whatWeProvide: [
      "Test automation engineers who design maintainable, non-flaky frameworks",
      "API automation alongside UI automation, not just one or the other",
      "CI/CD-integrated regression suites that run on every build",
      "SDET-level engineers who can also contribute to test strategy, not just scripts",
    ],
    technologies: ["Playwright", "Selenium", "API Automation", "Test Frameworks", "CI/CD", "Regression Automation", "SDET", "Quality Engineering"],
    engagementModels: [
      "Dedicated Resource — one SDET embedded in your release process",
      "Staff Augmentation — extend an existing QA function",
      "Managed Team — Achutham owns test strategy and execution",
      "POC / Project — automate a defined regression suite first",
    ],
    typicalRoles: ["QA Automation Engineer", "SDET", "API Test Engineer", "Quality Engineering Lead"],
    process: [
      "Understand your current test coverage, stack and release cadence",
      "Source automation engineers experienced in your specific tools",
      "Technical screening includes a hands-on automation exercise",
      "You interview the shortlisted candidates directly",
      "Engineers onboard, review existing suites, and begin contributing",
    ],
    faq: [
      {
        q: "Can you work with our existing test suite?",
        a: "Yes. Engineers typically start by reviewing what exists, stabilizing flaky tests, then extending coverage rather than rewriting everything from scratch.",
      },
      {
        q: "Do you support both UI and API automation?",
        a: "Yes — most engagements combine API-level automation (faster, more stable) with targeted UI automation for critical user flows.",
      },
      {
        q: "Is CI/CD integration included?",
        a: "Wiring automated suites into your existing CI/CD pipeline (GitHub Actions, Jenkins, GitLab CI, etc.) is a standard part of the engagement.",
      },
      {
        q: "What if we need performance testing too?",
        a: "That's a separate but complementary discipline — see our Performance Engineering service, or ask for both in the same conversation.",
      },
    ],
    ctaLabel: "Explore QA & Test Automation",
  },
  {
    slug: "performance-engineering",
    navLabel: "Performance Engineering",
    name: "Performance Engineering",
    headline: "Know how your application behaves under real load, before your users find out",
    summary:
      "Load testing, stress testing and bottleneck analysis from engineers who specialize in performance, not generalists doing it part-time.",
    problem:
      "Applications that work fine in staging degrade unpredictably under real traffic — slow response times, timeouts, and outages during the moments that matter most, like a product launch or a seasonal peak.",
    whatWeProvide: [
      "Load, stress and scalability testing against realistic traffic models",
      "Bottleneck analysis across application, database and infrastructure layers",
      "Capacity planning so you know what your current architecture can actually handle",
      "Performance monitoring setup to catch regressions before they reach production",
    ],
    technologies: ["JMeter", "Load Testing", "Stress Testing", "Scalability Testing", "Performance Monitoring", "Bottleneck Analysis", "Capacity Planning"],
    engagementModels: [
      "Dedicated Resource — an embedded performance engineer",
      "Staff Augmentation — extend your SRE/platform team",
      "Managed Team — Achutham owns the performance testing function",
      "POC / Project — a focused load-testing engagement before a launch",
    ],
    typicalRoles: ["Performance Engineer", "SDET (Performance)", "Site Reliability Engineer"],
    process: [
      "Understand your architecture, traffic patterns and risk areas",
      "Source engineers with direct experience in your stack and tools",
      "Technical screening against real-world load-testing scenarios",
      "You interview the shortlisted candidates",
      "Engineers onboard and begin baseline testing against your environment",
    ],
    faq: [
      {
        q: "Do you need production access to run these tests?",
        a: "No — most engagements run against staging or a dedicated performance environment that mirrors production configuration.",
      },
      {
        q: "Can this be a short, focused engagement before a launch?",
        a: "Yes — a POC / Project engagement is a common way to get a load-testing pass done before a specific launch date or peak-traffic event.",
      },
      {
        q: "What do we get at the end?",
        a: "A clear report on bottlenecks, capacity limits and recommended fixes, prioritized by impact — not just raw graphs.",
      },
    ],
    ctaLabel: "Explore Performance Engineering",
  },
  {
    slug: "cloud-devops",
    navLabel: "Cloud & DevOps",
    name: "Cloud & DevOps",
    headline: "Infrastructure and delivery pipelines that scale without constant firefighting",
    summary:
      "Cloud and DevOps engineers experienced across AWS, Azure and GCP, building CI/CD pipelines and infrastructure automation that hold up under real usage.",
    problem:
      "Manual deployments, inconsistent environments and ad-hoc infrastructure changes slow releases and create risk. As teams grow, the lack of automation and monitoring becomes the bottleneck, not the application code itself.",
    whatWeProvide: [
      "Infrastructure automation using modern IaC practices",
      "CI/CD pipeline design and hardening",
      "Containerization and orchestration with Docker and Kubernetes",
      "Cloud monitoring and observability setup across AWS, Azure or GCP",
    ],
    technologies: ["AWS", "Azure", "GCP", "CI/CD", "Infrastructure Automation", "Kubernetes", "Docker", "Monitoring"],
    engagementModels: [
      "Dedicated Resource — one cloud/DevOps engineer embedded with your platform team",
      "Staff Augmentation — extend an existing DevOps function",
      "Managed Team — Achutham owns infrastructure and pipeline delivery",
      "POC / Project — a bounded migration or automation initiative",
    ],
    typicalRoles: ["DevOps Engineer", "Cloud Engineer", "Site Reliability Engineer", "Platform Engineer"],
    process: [
      "Understand your current cloud footprint, pipeline and pain points",
      "Source engineers experienced in your specific cloud provider and tooling",
      "Technical screening on real infrastructure and pipeline scenarios",
      "You interview the shortlisted candidates",
      "Engineers onboard and begin contributing to your infrastructure",
    ],
    faq: [
      {
        q: "Which cloud providers do you support?",
        a: "AWS, Azure and GCP — we match engineers to whichever provider your stack already runs on.",
      },
      {
        q: "Can you help with a cloud migration?",
        a: "Yes — migrations are typically scoped as a Managed Team or POC / Project engagement with clearly defined phases.",
      },
      {
        q: "Do you support Kubernetes specifically?",
        a: "Yes, including cluster setup, workload migration, and ongoing operations.",
      },
    ],
    ctaLabel: "Explore Cloud & DevOps",
  },
  {
    slug: "ai-data",
    navLabel: "AI & Data Engineering",
    name: "AI & Data Engineering",
    headline: "Applied AI and data engineering, grounded in production reality",
    summary:
      "Engineers building AI-enabled features, RAG applications and the data pipelines that make them reliable — not just prototypes.",
    problem:
      "Generative AI moves fast, and most teams don't have in-house depth in applied AI, retrieval architectures or the data engineering needed to support them in production, alongside their existing product roadmap.",
    whatWeProvide: [
      "AI application development, including generative AI features",
      "RAG (retrieval-augmented generation) application design and implementation",
      "Data engineering and pipeline work to support AI and analytics use cases",
      "AI-assisted software engineering practices applied to your existing codebase",
    ],
    technologies: ["AI Applications", "Generative AI", "Machine Learning", "Data Engineering", "AI Automation", "RAG Applications", "AI-Assisted Software Engineering"],
    engagementModels: [
      "Dedicated Resource — one AI/ML or data engineer embedded in your team",
      "Staff Augmentation — extend an existing AI or data function",
      "Managed Team — Achutham owns a defined AI or data initiative",
      "POC / Project — validate an AI use case before committing further",
    ],
    typicalRoles: ["AI Engineer", "Data Engineer", "Machine Learning Engineer"],
    process: [
      "Understand the use case, data landscape and desired outcome",
      "Source engineers with relevant applied-AI or data engineering experience",
      "Technical screening grounded in real implementation, not just theory",
      "You interview the shortlisted candidates",
      "Engineers onboard and begin building against your environment",
    ],
    faq: [
      {
        q: "Can you help us evaluate whether an AI feature is worth building?",
        a: "Yes — a POC / Project engagement is a common way to validate feasibility and value before a larger commitment.",
      },
      {
        q: "Do you work with our existing data infrastructure?",
        a: "Yes, engineers integrate with your existing warehouse, pipelines and tooling rather than proposing a rebuild by default.",
      },
      {
        q: "Is this only for generative AI, or traditional ML too?",
        a: "Both — the team covers applied generative AI, RAG systems, and traditional data engineering / ML work depending on your need.",
      },
    ],
    ctaLabel: "Explore AI & Data Engineering",
  },
  {
    slug: "it-staffing",
    navLabel: "IT Staffing",
    name: "IT Staffing",
    headline: "Skilled IT professionals, sourced and screened for your specific requirement",
    summary:
      "Dedicated engineers, contract resources and managed teams — sourced from India's engineering talent pool and technically screened before you ever see a profile.",
    problem:
      "Sourcing, screening and onboarding technical talent takes time your team doesn't have, especially for hard-to-fill or specialized roles. Generic staffing vendors often prioritize speed over technical fit.",
    whatWeProvide: [
      "Dedicated engineers who work exclusively with your team",
      "Contract and contract-to-hire resources where applicable",
      "Full team augmentation across multiple roles and skill sets",
      "Managed engineering teams with delivery ownership when you need it",
    ],
    technologies: ["Dedicated Engineers", "Contract Resources", "Team Augmentation", "Offshore Development", "Managed Engineering Teams", "Contract-to-Hire"],
    engagementModels: [
      "Dedicated Resource — one engineer dedicated to your team",
      "Staff Augmentation — add specialized talent to your existing org",
      "Managed Team — Achutham provides a complete team with delivery ownership",
      "POC / Project — start with a focused proof of concept before scaling",
    ],
    typicalRoles: [
      "Java Developer", "Python Developer", "Full Stack Engineer", "QA Automation Engineer",
      "SDET", "Performance Engineer", "DevOps Engineer", "Cloud Engineer",
      "Data Engineer", "AI Engineer", "Business Analyst", "Project Manager",
    ],
    process: [
      "We understand your technology, role, experience and business requirements",
      "We identify suitable candidates from our engineering talent network",
      "Technical evaluation, communication assessment and role-specific screening",
      "You interview the shortlisted candidates",
      "Selected resources are onboarded and begin contributing to your team",
    ],
    faq: [
      {
        q: "How is this different from a generic staffing agency?",
        a: "Every candidate goes through role-specific technical screening before you see a profile — we don't forward resumes based on keyword matching alone.",
      },
      {
        q: "Can we start with just one resource?",
        a: "Yes — most relationships start with a single dedicated resource and scale from there once you've seen the quality of work.",
      },
      {
        q: "Is contract-to-hire available?",
        a: "Where applicable and depending on the role and jurisdiction, yes — this is discussed and agreed upfront as part of the engagement terms.",
      },
    ],
    ctaLabel: "Explore IT Staffing",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
