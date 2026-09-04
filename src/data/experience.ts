export type Metric = { value: string; label: string };

export type CaseStudy = {
  title: string;
  summary: string;
  points: string[];
};

export type ExperienceEntry = {
  slug: string;
  company: string;
  role: string;
  location: string;
  dateRange: string;
  companyBlurb: string;
  guide?: string;
  projectTitle: string;
  summary: string;
  resumeBullets: string[];
  metrics: Metric[];
  narrative: string[];
  systemBuild?: {
    title: string;
    intro: string;
    agents: { name: string; description: string }[];
  };
  caseStudies?: CaseStudy[];
  recommendations?: string[];
  certificateHref?: string;
};

export const experience: ExperienceEntry[] = [
  {
    slug: "jindal-steel",
    company: "Jindal Steel Limited",
    role: "Sales & Marketing Intern, SBU Rails",
    location: "Gurugram, Haryana",
    dateRange: "Apr 2026 – Jun 2026",
    companyBlurb:
      "India's only private-sector manufacturer of railway rails — FY26 revenue of ₹53,225 Cr, 9.25 MT record steel production, and plants at Angul, Raigarh, and Patratu supplying freight corridors, metro systems, and national railways worldwide.",
    guide: "Mr. Vijay Kumar, Dy. General Manager, BU Rails",
    projectTitle: "Strategic Automation of Global Rail Supply Opportunity Intelligence",
    summary:
      "Built an AI-powered tender intelligence system for JSL's international rail export desk, then used it to win the company a place in two live tenders worth a combined €10.5M+ and a 433-page World Bank bid built from scratch in five days.",
    resumeBullets: [
      "Developed a 6-agent AI pipeline automating market analysis and lead generation, increasing tender visibility 25×, reducing sourcing costs 88%, and identifying 5 strategic opportunities",
      "Supported business development for a ₹190-crore World Bank railway tender, leveraging market analysis, proposal writing, stakeholder management, and compliance mapping across 433 pages",
      "Identified strategic opportunities through MDB early-warning analysis and DPS mapping, developing interactive dashboards to strengthen market intelligence and opportunity prioritization",
    ],
    metrics: [
      { value: "€292M+", label: "Pipeline value mapped" },
      { value: "88%", label: "Lower cost per lead" },
      { value: "10–25×", label: "More tenders surfaced monthly" },
      { value: "433 pages", label: "World Bank bid, built in 5 days" },
    ],
    narrative: [
      "The brief was deceptively simple: find genuine export opportunities for Jindal Steel's rail products faster than the sales team could by hand. In practice, a plain search for \"railway contracts\" returns thousands of results — almost all of them civil construction, not the steel supply JSL actually sells — and by the time a contract is publicly announced, competitors have often already started their bid. The team was doing this search manually: 3–4 hours a day, more than 90% of results irrelevant, and tenders published in French, Spanish, or Portuguese simply invisible to an English-only search.",
      "I built the answer across two parallel tracks. The first was a 6-agent, Python-based AI pipeline — Scout, Gatekeeper, Analyst, Linguist, Reviewer, and Communicator — that scans procurement portals across Africa, Europe, and Latin America in five-plus languages, 24/7. The second was hands-on: manually tracking and deeply analysing real, active international tenders, including a €10.5 million track-renewal project for Spain's national railway authority (ADIF) and a World Bank-funded rail-supply project in Cameroon worth more than 512,000 metres of track. For each, the work went well beyond spotting the opportunity — specification matching against JSL's actual product catalogue, bid-eligibility checklists, export pricing templates, and a full supply-chain schedule for the largest tender.",
      "By the end of the internship I had also built and delivered a fully functional, browser-based interactive Gantt dashboard — a project-management tool the sales team could use immediately, with zero IT setup, to manage multi-year supply timelines for international bids.",
    ],
    systemBuild: {
      title: "The 6-Agent AI Pipeline",
      intro:
        "A Python pipeline that replaced a 3–4 hour daily manual search with a 15-minute morning review, lifting system precision from roughly 80% to 94–97% through a human-in-the-loop feedback step.",
      agents: [
        {
          name: "Scout",
          description:
            "Scans 15+ procurement portals every 4 hours, plus World Bank, AfDB, and ADB project-pipeline APIs — surfacing MDB-funded opportunities 12–18 months before public tender.",
        },
        {
          name: "Gatekeeper",
          description:
            "A triple filter (blocklist + allowlist + a 0.0–1.0 ML relevance score) that removes about 90% of junk results, leaving roughly 25 qualified leads a week.",
        },
        {
          name: "Analyst",
          description:
            "Extracts 8 structured fields from tender PDFs using pdfplumber and AWS Textract — about $14 per document versus $80 for manual extraction, a 5.7× cost reduction.",
        },
        {
          name: "Linguist",
          description:
            "Machine-translates tenders across French, Arabic, Spanish, and Portuguese, and cross-references a 40-entry rail-specification table (e.g. 54E1 → UIC54, AS50 → AS1085) against JSL's product line.",
        },
        {
          name: "Reviewer",
          description:
            "A human-in-the-loop dashboard for Approve / Skip / Correct-and-teach decisions — the feedback loop that lifts precision from roughly 80% at month one to 94–97% by month seven.",
        },
        {
          name: "Communicator",
          description:
            "Drafts first-contact outreach in five languages from five regional templates, cutting draft time from 45–60 minutes to a 30-second review.",
        },
      ],
    },
    caseStudies: [
      {
        title: "Spain ADIF — €10.5M Track Renewal",
        summary:
          "A 60E1, EN 13674-1 track-renewal tender from Spain's national railway authority, fully spec-matched to JSL's catalogue.",
        points: [
          "Confirmed a 100% specification match on rail profile and standard (60E1 / EN 13674-1)",
          "Verified JSL's eligibility as a non-EU bidder under WTO Government Procurement Agreement principles",
          "Mapped commercial terms — a 2% bid bond and 5% performance guarantee",
          "Delivered a \"proceed with bid\" recommendation to management and sent formal outreach directly to ADIF",
        ],
      },
      {
        title: "Cameroon PCDN — World Bank-Funded, 512,700 Linear Metres",
        summary:
          "A 54kg rail supply tender for CAMRAIL, Cameroon's national railway operator — funding already secured through the World Bank.",
        points: [
          "Built a 433-page, bilingual (French/English) two-envelope bid package covering 38 technical, commercial, ESMS, and compliance requirements in 5 working days",
          "Designed the maritime logistics plan — Paradip Port to Douala, an 18–22 day transit across 6 shipment batches over a 12-month production window",
          "Built an 18-month Gantt chart that was used directly inside the official submission document",
          "Identified a gap in the environmental & social management system (ESMS) requirements and pre-built it into a reusable bid template",
        ],
      },
    ],
    recommendations: [
      "Deploy the 6-agent AI pipeline — already built, tested, and approved by the Business Head; the only blocker is API access",
      "Register for Greece's STASY and Lithuania's national DPS frameworks — a one-time registration that unlocks years of supply call-offs",
      "Appoint a dedicated MDB pipeline monitor to track World Bank / AfDB / EBRD project pipelines 6–12 months ahead of public tender",
      "Formalize the 433-page Cameroon bid as a reusable master template, cutting future bid-prep time from 5 days to roughly 1",
      "Adopt the Gantt dashboard as the standard bid-management tool — already built, delivered, and in live use",
    ],
    certificateHref: "/documents/jindal-steel-completion-certificate.pdf",
  },
  {
    slug: "iqc",
    company: "IQC (International Quality Certifications)",
    role: "Marketing Analyst Intern",
    location: "Noida",
    dateRange: "Jan 2025 – Jun 2025",
    companyBlurb:
      "A certification-services marketing partner supporting businesses through ISO 9001, ISO 22000, ISO 27001, and related management-system certifications.",
    projectTitle: "Inquiry-to-Conversion Segmentation & Lead Scoring",
    summary:
      "Analyzed 1,000+ inquiry-to-conversion records to find the underutilized segment converting at nearly triple the average rate, then built the scoring model the sales team used to prioritize follow-up.",
    resumeBullets: [
      "Analyzed 1,000+ inquiry-to-conversion records to uncover an underutilized high-intent segment, enabling the sales team to shift focus and achieve a 27% boost in conversion efficiency",
      "Conducted market research for high potential companies, across various industries requiring ISO certifications, resulting in a 28% improvement in qualified lead generation",
      "Collected and analyzed customer-feedback responses, uncovering trends that shaped refined outreach strategies and boosted customer conversion rate by 18%",
    ],
    metrics: [
      { value: "1,000+", label: "Inquiry records analyzed" },
      { value: "27%", label: "Lift in conversion efficiency" },
      { value: "31.5%", label: "Best-segment conversion rate" },
      { value: "3", label: "Lead-scoring tiers built" },
    ],
    narrative: [
      "Over three months of data — 1,200 inquiries, 650 qualified leads, 214 conversions — I cleaned and standardized every field (industry, certification type, company size, urgency, conversion stage) that raw sales data usually leaves messy, then calculated conversion rates segment by segment.",
      "Food-processing and manufacturing clients converted at roughly 30%, against 12% for IT and just 6% for retail. Certification type mattered even more: ISO 22000 (food safety) leads converted at 43%, nearly four times ISO 27001's 11%, because FSSAI regulation makes certification effectively mandatory for food suppliers. SMEs converted at 34% versus 9% for large enterprises, since smaller companies decide faster and lean more on external certifiers.",
      "I combined those filters into a 3-tier Hot / Warm / Cold lead-scoring system. A narrow segment — food-processing SMEs needing ISO 22000 within 30–45 days — made up only 9% of total inquiries but drove nearly 28% of conversions. Handing that insight to the sales team let them reallocate follow-up priority toward the top 20–25% of leads, which were driving roughly 70% of all conversions.",
    ],
    certificateHref: "/documents/iqc-experience-letter.pdf",
  },
];
