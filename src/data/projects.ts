export type ProjectSection = {
  heading: string;
  body?: string;
  bullets?: string[];
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  course: string;
  type: "Individual Project" | "Group Project";
  tagline: string;
  tools: string[];
  metrics: { value: string; label: string }[];
  sections: ProjectSection[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "habit-brand-strategy",
    title: "Habit — Brand & Digital Marketing Strategy",
    category: "Brand Strategy · Digital Marketing",
    course: "Digital Marketing",
    type: "Individual Project",
    tagline:
      "Built a D2C lifestyle brand end-to-end — positioning, visual identity, and a live, SEO-optimized Next.js storefront — for ambitious young Indians navigating student life, their first job, and beyond.",
    tools: [
      "Brand Strategy",
      "Next.js",
      "Google Analytics 4",
      "Google Tag Manager",
      "Search Console",
      "SEO",
    ],
    metrics: [
      { value: "₹22,000 Cr", label: "Total addressable market sized" },
      { value: "6×", label: "Target LTV : CAC ratio" },
      { value: "5", label: "Shop-by-Journey customer segments" },
    ],
    sections: [
      {
        heading: "The brand",
        body: "Habit (\"Made for the Life You're Building\") is a conceptual D2C lifestyle-accessories brand for 18–32 year-old urban Indians moving through student life, their first job, the daily office grind, remote work, and weekend travel. I built the brand from a blank page: purpose, vision and mission on Simon Sinek's Golden Circle, three core values (Belonging over Status, Considered not Clever, Built to Last), and an Everyman-plus-Creator archetype — deliberately not the aspirational-Hero positioning of a Nike.",
      },
      {
        heading: "Market sizing & positioning",
        bullets: [
          "TAM ~₹22,000 Cr (India's bags & workspace-accessories market, growing 12–14% CAGR); SAM ~₹1,600–4,000 Cr (urban 18–35, online, lifestyle-conscious); SOM ₹30–80 Cr in Year 1",
          "White-space analysis: Wildcraft is too sporty, Mokobara starts above ₹3,000, generic imports carry no brand story — Habit sits deliberately in the ₹1,000–2,500 \"thoughtful design\" gap",
          "Positioning statement: \"For ambitious young Indians, Habit offers considered, durable, premium design at prices you can afford today — not when you've made it.\"",
          "Product range priced on a psychological ladder — ₹399 to ₹1,999 — so the entire catalogue is a no-overthinking purchase",
        ],
      },
      {
        heading: "Website, UX & the \"Shop by Journey\" feature",
        body: "I mapped every homepage section to a stage of the AIDA funnel and designed \"Shop by Journey\" as Jobs-to-be-Done made tangible — letting a customer self-select by life stage (Student Life, First Job, Everyday Office, Work From Anywhere, Weekend Travel) instead of by product category. The site itself — built on Next.js and deployed on Vercel — was wired with GA4, Google Tag Manager, and a Search Console-verified technical SEO stack (Organization + WebSite schema, Open Graph, canonical URLs).",
      },
      {
        heading: "Go-to-market strategy",
        bullets: [
          "Chose a flanking + guerrilla strategy over a frontal attack Habit can't win on ad spend against Wildcraft or Skybags",
          "₹10 lakh channel budget split across Instagram ads, Search, micro-influencer/UGC, SEO, and email/CRM — with a hard rule that no single channel exceeds 35% of spend",
          "Designed a retention architecture (Habit Circle membership, a content-led newsletter, Habit AI chat, a 5-year warranty) explicitly to avoid the discount-led email fatigue seen in comparable brands",
          "A 3-layer sustainability marketing strategy — a sitewide trust banner, brand-depth content, and material-level product-spec proof — built to survive greenwashing skepticism",
        ],
      },
      {
        heading: "Business model & unit economics",
        body: "A full Business Model Canvas across all nine blocks, with target unit economics of 60–65% gross margin, ₹1,500–1,800 AOV, ₹400–700 CAC, and a 6× LTV:CAC ratio — well above the 3× sustainability benchmark. I applied lessons from seven marketing case-study diagnostics (covering targeting, funnel-metric mismatches, SEO intent, social vanity metrics, email fatigue, checkout friction, and budget-scaling discipline) directly back into Habit's own strategy, and built a full TOFU/MOFU/BOFU funnel with a KPI scorecard spanning awareness through retention.",
      },
      {
        heading: "A presentation-defense tool, built to be questioned",
        body: "To prepare for trap questions in the final defense, I built a standalone, dark-themed interactive Q&A dashboard in pure HTML/CSS/JS — eight tabbed sections, accordion Q&A cards rated by difficulty, and source citations for every answer, covering everything from \"why not charge more than ₹1,999?\" to the ROI of a single Instagram post.",
      },
    ],
    links: [{ label: "Live site", href: "https://the-habits-wheat.vercel.app" }],
  },
  {
    slug: "hm-india-decision-system",
    title: "H&M India — Marketing & Retail Decision Support System",
    category: "Retail Analytics · Decision Systems",
    course: "Marketing & Retail Analytics",
    type: "Group Project",
    tagline:
      "Designed and built a role-based decision-support system for a simulated H&M India — two standalone web applications spanning 8 brands, 18 stores, and a data architecture where no KPI is ever stored, only computed.",
    tools: ["Data Modeling", "Chart.js", "DAX-style KPI Design", "RFM Segmentation", "Market-Basket Analysis"],
    metrics: [
      { value: "4", label: "Fact tables, 9 dimension tables" },
      { value: "41%", label: "Of marketing spend most systems silently drop" },
      { value: "8", label: "Role-based dashboards" },
    ],
    sections: [
      {
        heading: "The problem this was built to solve",
        body: "Most retail measurement systems drop roughly 41% of real marketing investment — people costs, offline media, and in-store visual merchandising — because it doesn't fit neatly into a digital-ads spreadsheet. That silently under-reports retail media ROI and over-reports performance-media ROI. The brief: design a decision-making system, not a dashboard — every screen had to trace back to a named business decision, or it was cut.",
      },
      {
        heading: "What we built",
        bullets: [
          "HM India DecisionHub — a role-based interface with 8 dashboards (Leadership, Marketing, Store Operations, Customer, Category, KPI Tracker, Data Entry, Data Model), each serving a named decision at its own natural cadence (quarterly for Leadership, monthly for Marketing/Retail, ad hoc for Customer)",
          "A second full \"Decision System\" application documenting the underlying investment/return taxonomy, a diagnostic engine, the KPI register, and the data model itself",
          "Both run standalone, offline, with zero external dependencies beyond Chart.js — built to work from a USB stick with no network",
        ],
      },
      {
        heading: "Data architecture — computed on read, never stored",
        body: "Four fact tables (investment, return, target, market) and nine dimension tables share one join key set — business unit, channel, location, product category, and month — across both spend and return. No table stores MER, ROAS, CAC, or conversion rate: every ratio is computed at query time from the underlying facts, which is the only reason two screens can never disagree with each other.",
      },
      {
        heading: "Investment & return taxonomy",
        body: "An 8-branch investment tree specifically includes the categories most systems drop — team cost (in-house salaries, agency retainers, store staff hours on promotion) and offline media (OOH, print, mall activations) alongside paid media, so that the 41% doesn't just disappear. A parallel return taxonomy separates direct revenue from brand pull, retention, and acquisition, with units (sessions vs. rupees) kept structurally distinct so they're never accidentally summed.",
      },
      {
        heading: "The diagnostic engine",
        body: "Built to answer \"what broke?\" — a shared screen reached from any KPI that misses target. A user picks a measure and two periods to compare; the engine decomposes the gap by any dimension (region, channel, brand, product) and shows each segment's share of the net change, including the case where a segment's movement exceeds 100% of the net change because other segments moved the opposite way — the signal to stop reading the headline number.",
      },
      {
        heading: "Applied analytics on synthetic data",
        bullets: [
          "RFM segmentation across a simulated 393,000-member loyalty base into 7 segments (Champions through Lost), each with a specific action — early-access drops for Champions, suppression from paid media for Lost",
          "Market-basket analysis surfacing cross-sell pairs (e.g. Denim Jeans → Basic Tee, lift 3.42×) with a recommended merchandising action for each",
          "A 22-campaign performance ranking sorted by ROAS ascending, surfacing the worst performers first, each with an automatically generated recommended action and owner",
        ],
      },
      {
        heading: "Documented limitations, by design",
        body: "The system explicitly states what it cannot do: it measures correlation between tagged spend and tagged return, not causal attribution; driver decomposition explains what moved, not why; branded-search \"brand pull\" is a contaminated proxy; and offline data always arrives late, so the current month is marked incomplete rather than treated as final. Stating the limits was itself a graded design choice — a decision system is only trustworthy if it's honest about where it runs out of certainty.",
      },
    ],
  },
  {
    slug: "india-tourism-power-bi",
    title: "India's Tourism Ecosystem — Power BI Dashboard",
    category: "Business Intelligence · Power BI",
    course: "Business Intelligence & Power BI",
    type: "Group Project",
    tagline:
      "A multi-page Power BI dashboard turning a mixed-granularity national tourism dataset into a decision-ready story — scale, seasonality, source markets, and destination concentration.",
    tools: ["Power BI", "DAX", "Power Query"],
    metrics: [
      { value: "2.32 Bn", label: "Domestic tourist visits, 2019" },
      { value: "4", label: "Analytical lenses" },
      { value: "6", label: "Merged datasets, 1981–2021" },
    ],
    sections: [
      {
        heading: "The dataset",
        body: "Public India tourism statistics compiled across six CSV sources — foreign tourist arrival trends from 1981–2020, India-vs-world comparisons, visitor age and quarterly-seasonality mix, region and purpose of visit, statewise visits, and monument-level footfall. The core challenge was definitional: the data mixes \"arrivals\" (a unique person entering the country), \"visits\" (a person entering a specific state, which allows multiples per arrival), shares, ranks, and coverage counts — a dashboard that blurs these produces misleading comparisons.",
      },
      {
        heading: "Four analytical lenses",
        bullets: [
          "Scale & footprint — how large is the system, and how broad across states, circles, and monuments?",
          "Trend & global positioning — how have arrivals and India's global tourism rank moved over time?",
          "Visitor profile & seasonality — who visits, which age groups dominate, which quarter peaks?",
          "Markets & destinations — which source countries and which destinations carry the largest share?",
        ],
      },
      {
        heading: "Key findings",
        bullets: [
          "India's tourism economy is overwhelmingly domestic-led: ~2.32 billion domestic tourist visits in 2019 against ~31.4 million foreign tourist visits in the same statewise table",
          "Bangladesh is the single largest source country and South Asia the largest source region — inbound demand is broad but still concentrated",
          "The 35–44 age group dominates the visitor base, Q4 (Oct–Dec) is the strongest quarter, and leisure remains the leading purpose of visit",
          "Uttar Pradesh leads domestic visits, Tamil Nadu leads foreign visits, and the Taj Mahal / Agra circle stands out as the flagship attraction",
        ],
      },
      {
        heading: "Method & design choices",
        body: "I separated \"snapshot\" pages (current scale) from \"trend\" pages (longitudinal change) to stop the dashboard from mixing incompatible measures, built DAX measures per analytical lens rather than one catch-all, and validated the story page-by-page against screenshots before presenting. AI tools supported DAX debugging, dynamic-title drafting, and wording for recommendations — every final interpretation was checked by hand against the underlying data before it went in the deck.",
      },
      {
        heading: "Business recommendations",
        bullets: [
          "Protect the domestic backbone — prioritize capacity planning and crowd management in Uttar Pradesh, Tamil Nadu, and Andhra Pradesh",
          "Strengthen foreign-travel hubs — connectivity, multilingual support, and better packaging in Tamil Nadu, Maharashtra, Delhi, and the Agra circuit",
          "Segment source-market strategy differently for nearby South Asian markets, diaspora-linked visitors, and long-haul leisure travelers from Europe and North America",
          "Plan around the Q4 seasonal peak while strengthening the long tail of attractions beyond the flagship heritage clusters",
        ],
      },
      {
        heading: "Certifications earned alongside this project",
        body: "Two Microsoft Learn achievement badges from the Power BI learning path — \"Scope report design requirements\" and \"Design Power BI reports\" — completed in March 2026 as part of building this dashboard.",
      },
    ],
    links: [
      { label: "Design Power BI reports (Microsoft)", href: "/documents/microsoft-design-power-bi-reports.pdf" },
      { label: "Scope report design requirements (Microsoft)", href: "/documents/microsoft-scope-report-design.pdf" },
    ],
  },
  {
    slug: "urban-air-quality-modeling",
    title: "Urban Air Quality Predictive Modeling",
    category: "Business Analytics · Applied Machine Learning",
    course: "Business Analytics",
    type: "Individual Project",
    tagline:
      "An end-to-end Python pipeline — clustering, regression, and a threshold-optimized early-warning classifier — turning five years of municipal air-quality data into a public-health alert system.",
    tools: ["Python", "pandas", "scikit-learn", "statsmodels", "K-Means", "Logistic Regression"],
    metrics: [
      { value: "86.7%", label: "Classifier accuracy" },
      { value: "0.92", label: "ROC-AUC score" },
      { value: "100%", label: "Recall after threshold optimization" },
    ],
    sections: [
      {
        heading: "The question",
        body: "Using five years (2021–2025) of air-quality data across five Indian municipalities — Rohtak, Solapur, Hubli–Dharwad, Siliguri, and Tiruchirappalli — the project moved from purely descriptive analysis to a predictive, actionable early-warning system for hazardous pollution events.",
      },
      {
        heading: "Exploratory findings",
        bullets: [
          "Confirmed dominant winter-peak seasonality (Dec–Feb) driven by thermal inversion, with the cleanest air consistently during the June–Sept monsoon \"washout\"",
          "Identified a \"creeping baseline\" — pollution during transitional months (Mar, Apr, Oct, Nov) drifting upward year over year in several cities, meaning the unsafe season is quietly lengthening",
          "Rohtak emerged as a standalone anomaly: the smallest population and vehicle fleet in the dataset, yet by far the most extreme AQI — proof that population size alone is a poor proxy for pollution severity",
        ],
      },
      {
        heading: "Unsupervised segmentation",
        body: "K-Means clustering (optimal K=3 via the Elbow and Silhouette methods) on standardized AQI, PM2.5, temperature, population, and vehicle-count features mapped the five cities into three risk typologies: a High-Risk outlier (Rohtak), a Low-Risk profile (Tiruchirappalli, aided by a warmer baseline climate), and an Emerging-Risk cluster (Hubli–Dharwad, Siliguri, Solapur) — large, growing populations whose currently moderate air quality is structurally fragile.",
      },
      {
        heading: "Regression & diagnostics",
        body: "A Multiple Linear Regression (OLS) model quantified how population, vehicle count, and temperature drive AQI, explaining 33–37% of variance (R² 0.33 train / 0.37 test) — honestly reported as leaving roughly two-thirds of the variation to uncaptured factors like industrial output and agricultural burning. Every assumption was checked: Variance Inflation Factor for multicollinearity, the Durbin-Watson statistic for residual independence, and Breusch-Pagan/White tests plus a Q-Q plot, which confirmed heteroskedasticity — the model's forecast error grows at the pollution extremes, which is exactly where a false negative is most dangerous.",
      },
      {
        heading: "From forecasting to a public-health decision",
        body: "Because a continuous forecast struggles precisely where accuracy matters most, I reframed the problem as binary classification: will a given municipality-month cross AQI 150 (\"High Risk\")? A Logistic Regression classifier reached 86.7% accuracy and a 0.92 ROC-AUC. At the default 0.5 threshold it caught only 82% of true crises — so I recalibrated the decision boundary to 0.456 using Youden's J Index, achieving 100% recall (zero missed crises) at the deliberate cost of precision falling to 52.4%, on the reasoning that in public-health policy a false alarm is far cheaper than a missed toxic-air event.",
      },
    ],
  },
  {
    slug: "market-research-projects",
    title: "Market Research: Vivo T-Series & H&M Omnichannel Strategy",
    category: "Market Research",
    course: "Marketing / Academic Coursework",
    type: "Individual Project",
    tagline:
      "Two applied strategy exercises — a competitive market-share study for Vivo's T-Series smartphones, and an omnichannel decision system spanning customer segmentation, analytics, and performance management for H&M India.",
    tools: ["SWOT", "PESTEL", "Porter's Five Forces", "Customer Segmentation"],
    metrics: [{ value: "24%", label: "Projected market-share increase (Vivo T-Series)" }],
    sections: [
      {
        heading: "Vivo T-Series — competitive market research",
        body: "Conducted market research on Vivo's T-Series smartphone line to surface competitive insights and shape strategic recommendations, applying SWOT, PESTEL, and Porter's Five Forces frameworks. The analysis projected a 24% potential market-share increase from the recommended positioning changes.",
      },
      {
        heading: "H&M India — omnichannel decision system",
        body: "Designed an omnichannel decision system for H&M India integrating customer segmentation, data analytics, and performance management to optimize marketing spend and profitability — the strategic framing that was later built out in full as the H&M India Marketing & Retail Decision Support System (see the dedicated case study).",
      },
    ],
  },
];
