export type Certification = {
  title: string;
  issuer: string;
  year: string;
  duration?: string;
  href?: string;
  /** "featured" = explicitly listed on Rishabh's CV; "supplementary" = supporting sub-badge/certificate. */
  tier: "featured" | "supplementary";
};

export const certifications: Certification[] = [
  // CV-listed certifications (highest priority)
  {
    title: "Google Data Analytics",
    issuer: "Coursera",
    year: "2025",
    duration: "4 weeks",
    tier: "featured",
  },
  {
    title: "Power BI",
    issuer: "Microsoft Learning Path",
    year: "2025",
    duration: "4 weeks",
    tier: "featured",
  },
  {
    title: "Statistical Decision-Making Tools",
    issuer: "Great Learning",
    year: "2025",
    duration: "4 weeks",
    tier: "featured",
  },
  // Supplementary Microsoft Learn sub-badges (earned as part of the Power BI learning path)
  {
    title: "Design Power BI reports",
    issuer: "Microsoft Learn",
    year: "2026",
    href: "/documents/microsoft-design-power-bi-reports.pdf",
    tier: "supplementary",
  },
  {
    title: "Scope report design requirements",
    issuer: "Microsoft Learn",
    year: "2026",
    href: "/documents/microsoft-scope-report-design.pdf",
    tier: "supplementary",
  },
];

export const skillGroups = [
  {
    title: "Research & Strategy",
    skills: [
      "Market Research & Insight",
      "Brand Strategy & Positioning",
      "STP / TAM-SAM-SOM",
      "SWOT / PESTEL / Porter's",
      "AI & Market Intelligence",
    ],
  },
  {
    title: "Analytics & Tools",
    skills: [
      "Power BI & DAX",
      "Python (pandas, scikit-learn, statsmodels)",
      "Google Analytics 4 & Search Console",
      "Statistical & Predictive Modeling",
      "Google Data Analytics toolkit",
    ],
  },
  {
    title: "Business & Stakeholder Skills",
    skills: [
      "B2B Sales & Business Development",
      "Cross-Functional Collaboration",
      "Stakeholder Engagement",
      "Customer Relationship Management",
      "Proposal Writing & Compliance Mapping",
    ],
  },
];
