// Structured content for sections shared across pages (homepage, staff
// augmentation, how-we-work, industries, etc). Kept separate from
// services.ts so each file stays focused and easy to edit.

export const trustValueCards = [
  {
    title: "Access Skilled Talent",
    description:
      "Connect with experienced engineers across software development, QA, cloud, DevOps, data and AI.",
  },
  {
    title: "Flexible Engagement",
    description:
      "Start with a single specialist, build a dedicated team or engage Achutham for a complete project.",
  },
  {
    title: "Faster Team Expansion",
    description:
      "Reduce the time and effort required to identify, evaluate and onboard technical talent.",
  },
  {
    title: "India Delivery Advantage",
    description:
      "Leverage India's deep technology talent pool while maintaining structured engineering processes and communication.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Understand",
    description: "We understand your technology, role, experience and business requirements.",
  },
  {
    number: "02",
    title: "Source",
    description: "We identify suitable candidates from our engineering talent network.",
  },
  {
    number: "03",
    title: "Screen",
    description: "Technical evaluation, communication assessment and role-specific screening.",
  },
  {
    number: "04",
    title: "Interview",
    description: "You interview the shortlisted candidates.",
  },
  {
    number: "05",
    title: "Onboard",
    description: "Selected resources are onboarded and begin contributing to your team.",
  },
];

export const engagementModels = [
  {
    slug: "dedicated-resource",
    title: "Dedicated Resource",
    description: "One engineer dedicated to your team.",
    detail:
      "A single engineer who works exclusively with you, joins your standups, and follows your process — ideal when you know exactly what role you need filled.",
  },
  {
    slug: "staff-augmentation",
    title: "Staff Augmentation",
    description: "Add specialized talent to your existing engineering organization.",
    detail:
      "Extend your current team with one or more specialists across engineering, QA, performance, cloud or AI — without the overhead of a new hiring process.",
  },
  {
    slug: "managed-team",
    title: "Managed Team",
    description: "Achutham provides a complete team with delivery ownership.",
    detail:
      "For a defined scope of work, Achutham assembles and manages the team end-to-end, reporting on progress against agreed milestones.",
  },
  {
    slug: "poc-project",
    title: "POC / Project",
    description: "Start with a focused proof of concept before scaling.",
    detail:
      "A bounded, time-boxed engagement to prove technical or delivery fit before committing to a larger relationship.",
  },
];

export const industries = [
  "SaaS & Software",
  "Healthcare Technology",
  "FinTech",
  "InsurTech",
  "Cloud & Infrastructure",
  "Enterprise Software",
  "E-commerce",
  "Manufacturing",
  "Supply Chain",
  "AI & Data",
];

export const whyAchutham = [
  {
    title: "Technical-first screening",
    description: "Every candidate is technically evaluated before you ever see a profile — not filtered by keywords alone.",
  },
  {
    title: "Flexible engagement models",
    description: "From a single specialist to a fully managed team, the engagement shape adapts to what you actually need.",
  },
  {
    title: "India-based engineering talent",
    description: "Access to a deep, experienced technology talent pool across engineering, QA, cloud, data and AI.",
  },
  {
    title: "Transparent communication",
    description: "Clear timelines, honest status updates, and no overselling what a candidate or team can deliver.",
  },
  {
    title: "Scalable delivery",
    description: "Start small and grow the engagement deliberately, at a pace that matches your confidence, not a sales quota.",
  },
  {
    title: "Cost-efficient engineering capacity",
    description: "Extend your engineering capacity efficiently, without compromising on structured process or quality.",
  },
];

export type CaseStudy = {
  title: string;
  problem: string;
  solution: string;
  result: string; // intentionally a placeholder string until verified
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Enterprise QA Automation",
    problem: "Large regression suite and slow release cycles.",
    solution: "Playwright + API automation + CI/CD.",
    result: "[Add verified result]",
  },
  {
    title: "Performance Engineering",
    problem: "Application degradation under peak load.",
    solution: "Load testing, bottleneck analysis and capacity assessment.",
    result: "[Add verified result]",
  },
  {
    title: "Engineering Team Augmentation",
    problem: "Need for additional engineering capacity.",
    solution: "Dedicated India-based engineers.",
    result: "[Add verified result]",
  },
];

export const staffAugRoles = [
  "Java Developer", "Python Developer", "Full Stack Engineer", "QA Automation Engineer",
  "SDET", "Performance Engineer", "DevOps Engineer", "Cloud Engineer",
  "Data Engineer", "AI Engineer", "Business Analyst", "Project Manager",
];

export const pocCategories = [
  "QA Automation",
  "Performance Testing",
  "AI Automation",
  "Software Development",
  "Cloud/DevOps",
  "Data Engineering",
];

export type BlogPost = {
  title: string;
  category: string;
  excerpt: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: "How US Startups Can Scale Engineering Teams With India-Based Talent",
    category: "Engineering Leadership",
    excerpt:
      "A practical look at when staff augmentation makes sense for an early-stage engineering org, and when it doesn't.",
  },
  {
    title: "Playwright vs Selenium: What Should Your QA Team Choose?",
    category: "QA Automation",
    excerpt:
      "A framework-level comparison for teams deciding where to invest their test automation effort going forward.",
  },
  {
    title: "When Should You Use Staff Augmentation vs Managed Teams?",
    category: "Engineering Leadership",
    excerpt:
      "The tradeoffs between adding individual specialists and handing a defined scope to a fully managed team.",
  },
  {
    title: "Building a High-Quality Offshore QA Team",
    category: "QA Automation",
    excerpt: "What separates a QA function that scales from one that becomes a bottleneck.",
  },
  {
    title: "Performance Testing Before Production: A Practical Guide",
    category: "Performance Engineering",
    excerpt: "A grounded checklist for teams preparing for a launch or a seasonal traffic peak.",
  },
  {
    title: "How AI Is Changing Software Testing",
    category: "AI",
    excerpt: "Where AI-assisted testing genuinely helps today, and where it still needs a human in the loop.",
  },
];

export const blogCategories = [
  "Software Engineering",
  "QA Automation",
  "Performance Engineering",
  "AI",
  "Cloud",
  "IT Staffing",
  "Engineering Leadership",
];

export const footerLegal = ["Privacy Policy", "Terms of Service"] as const;
