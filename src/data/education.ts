export type EducationEntry = {
  degree: string;
  institute: string;
  city: string;
  score: string;
  year: string;
  note?: string;
};

export const education: EducationEntry[] = [
  {
    degree: "PGDM (Post Graduate Diploma in Management)",
    institute: "Great Lakes Institute of Management",
    city: "Gurgaon",
    score: "3.43 / 4",
    year: "2025 – 2027",
    note: "Dean's Merit List — Rank 1 (2026)",
  },
  {
    degree: "B.A. (Hons.) Economics",
    institute: "Galgotias University",
    city: "Greater Noida",
    score: "8.6 / 10",
    year: "2024",
    note: "3rd Rank in the program",
  },
  {
    degree: "12th (CBSE)",
    institute: "Cambridge School",
    city: "Greater Noida",
    score: "83%",
    year: "2021",
  },
  {
    degree: "10th (CBSE)",
    institute: "Cambridge School",
    city: "Greater Noida",
    score: "75.6%",
    year: "2019",
  },
];

export const awards = [
  {
    title: "Dean's Merit List — Rank 1",
    org: "Great Lakes Institute of Management (PGDM), Gurgaon",
    year: "2026",
  },
  {
    title: "3rd Rank, B.A. Economics (Hons.)",
    org: "Galgotias University",
    year: "2024",
  },
];

export const positions = [
  {
    title: "Sponsorship Coordinator",
    org: "Student Council",
    year: "2024",
    description:
      "Designed persuasive pitch decks and negotiated with corporate partners, securing 68% of total event sponsorship funds.",
  },
  {
    title: "Student Coordinator",
    org: "Student Council",
    year: "2023",
    description:
      "Led event promotion and fundraising, aligned stakeholders, and increased participation by 38% versus 2022.",
  },
];

export const extracurriculars = [
  {
    title: "Economia Club",
    year: "2025",
    description: "Led club programs to foster collaborative discussions and learning.",
  },
  {
    title: "University Fest, Student Council",
    year: "2024",
    description: "Managed budgets, logistics, and sponsorships for a university fest with 2,000+ participants.",
  },
];
