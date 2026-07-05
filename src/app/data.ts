// Workshop content — sourced from
// "Dashboard Monitoring & Performance Reporting Workshop" (MazNexa)

export const BENEFITS = [
  {
    title: "A single, unified source of truth",
    body: "All data is consolidated in one reliable place, removing the inconsistencies that arise from multiple, disconnected sources.",
    icon: "database",
  },
  {
    title: "Time and resource savings",
    body: "Automating and streamlining data access reduces the effort, manpower, and cost spent on manual retrieval and verification.",
    icon: "timer",
  },
  {
    title: "Clarity and ease of understanding",
    body: "Data is presented in a simple, well-organized format that's easy to interpret and act on — even for non-technical users.",
    icon: "eye",
  },
  {
    title: "Instant access instead of delays",
    body: "Users get the information they need in real time, eliminating waiting periods caused by manual processes or outdated systems.",
    icon: "zap",
  },
  {
    title: "Continuous updates, no interruption",
    body: "The system stays current automatically, so users always work with the latest information without service gaps or downtime.",
    icon: "refresh",
  },
];

export const KPI_STEPS = [
  {
    n: "01",
    title: "Define your goals before selecting metrics",
    body: "Start by clarifying what you're trying to achieve, so the metrics you choose actually align with your objectives rather than being chosen arbitrarily.",
  },
  {
    n: "02",
    title: "Choose only the important metrics",
    body: "Focus on a small, manageable set of key indicators instead of overwhelming yourself or your audience with too much data.",
  },
  {
    n: "03",
    title: "Use metrics that help you make decisions",
    body: "Prioritize indicators that directly inform action, rather than ones that are just interesting to look at.",
  },
  {
    n: "04",
    title: "Rank the most important metrics at the top",
    body: "Place the highest-priority indicators in the most visible positions so they get attention first.",
  },
  {
    n: "05",
    title: "Avoid numbers that look good but aren't useful",
    body: "Steer clear of \"vanity metrics\" that seem impressive but don't provide meaningful insight or drive better decisions.",
  },
];

export const INTERPRET_STEPS = [
  {
    n: "01",
    title: "Compare current data with previous data",
    body: "Look at how numbers have changed over time to understand progress, decline, or stability — rather than viewing data in isolation.",
  },
  {
    n: "02",
    title: "Look for patterns and trends",
    body: "Identify recurring behaviors or directional movements in the data that reveal deeper insights beyond single data points.",
  },
  {
    n: "03",
    title: "Ask \"why\" when you see changes",
    body: "Don't just note that something changed; dig into the underlying causes to understand what's driving the shift.",
  },
  {
    n: "04",
    title: "Discover unusual things",
    body: "Watch for outliers or anomalies that may signal problems, opportunities, or errors worth investigating.",
  },
  {
    n: "05",
    title: "Turn numbers into actionable insights",
    body: "Go beyond just reporting data by translating findings into clear recommendations or next steps that drive decisions.",
  },
];

export const REPORTING_PRACTICES = [
  {
    title: "Set reporting timing based on each department's needs",
    body: "Adjust the frequency of updates (real-time, daily, weekly, etc.) to match how urgently different teams actually need the information.",
  },
  {
    title: "Create different dashboards for different people",
    body: "Tailor views to each audience's role, showing only the metrics relevant to their responsibilities instead of a one-size-fits-all report.",
  },
  {
    title: "Use simple and clear language",
    body: "Avoid technical jargon so that reports and dashboards are easily understood by all stakeholders, regardless of their background.",
  },
  {
    title: "Alert immediately for critical issues",
    body: "Ensure urgent problems trigger instant notifications rather than waiting to be discovered in a routine report.",
  },
  {
    title: "Continuously ask for feedback from the team",
    body: "Regularly check in with the users of your dashboards to improve relevance, usability, and accuracy over time.",
  },
];

export const TOOLS_TABLE = [
  { tool: "Power BI", type: "Dashboard Software", speed: "Fast", best: "Complex data analysis" },
  { tool: "Zoho Analytics", type: "Dashboard Software", speed: "Very Fast", best: "Budget-friendly dashboards" },
  { tool: "Agency Analytics", type: "Specialized Tool", speed: "Very Fast", best: "Marketing agencies" },
  { tool: "Claude AI", type: "AI Assistant", speed: "Instant", best: "Data interpretation" },
];

export const TOOL_DETAILS = [
  {
    n: "1",
    name: "Power BI",
    does: [
      "Advanced data visualization and business intelligence tool",
      "Creates interactive dashboards and reports from any data source",
      "Allows real-time data analysis and sharing",
    ],
    bestFor: [
      "Large companies with complex data",
      "In-depth analytics and forecasting",
      "Interactive, dynamic dashboards",
      "Advanced users comfortable with data",
    ],
    features: [
      "Stunning visual reports that drill down into details",
      "Connects to multiple data sources automatically",
      "Easy to update and refresh",
    ],
  },
  {
    n: "2",
    name: "Zoho Analytics",
    does: [
      "All-in-one business intelligence platform",
      "Creates dashboards, reports, and automated insights",
      "Integrates with other Zoho tools and third-party apps",
    ],
    bestFor: [
      "Small to medium businesses",
      "Quick dashboard setup without coding",
      "Teams already using Zoho products",
      "Affordable solution with great support",
    ],
    features: [
      "Drag-and-drop dashboard builder",
      "Automatic data insights and alerts",
      "Pre-built templates for a quick start",
      "Great for reporting and KPI tracking",
    ],
  },
  {
    n: "3",
    name: "Agency Analytics",
    does: [
      "Specialized tool for marketing agencies and businesses",
      "Tracks marketing campaign performance across platforms",
      "Consolidates data from Google Ads, Facebook, social media, etc.",
    ],
    bestFor: [
      "Marketing agencies managing multiple clients",
      "Tracking ROI on ad spend",
      "Client reporting and performance monitoring",
      "Social media and digital marketing metrics",
    ],
    features: [
      "Pulls data from all marketing platforms in one place",
      "Automated client reporting",
      "Budget tracking and ROI calculation",
      "Easy comparison of campaign performance",
    ],
  },
  {
    n: "4",
    name: "Claude AI",
    does: [
      "AI assistant for interpreting data and generating insight",
      "Explains trends, anomalies, and the \"why\" behind the numbers",
      "Turns raw metrics into clear, plain-language recommendations",
    ],
    bestFor: [
      "Instant data interpretation and summaries",
      "Drafting stakeholder-ready narratives",
      "Spotting outliers and opportunities fast",
      "Teams that want insight, not just charts",
    ],
    features: [
      "Natural-language questions over your data",
      "Fast, on-demand analysis",
      "Actionable next-step recommendations",
      "Pairs with any dashboard tool",
    ],
  },
];

// ── Dashboard examples (screenshots from the workshop, mapped to the tool
//    each was built in, per the slides) ──
export const DASHBOARD_EXAMPLES = [
  {
    img: "/examples/performance.jpg",
    title: "Marketing Performance",
    tool: "Power BI",
    caption: "Cost and lead performance — total cost, cost per lead, website vs native leads, and monthly activity trends.",
  },
  {
    img: "/examples/crm.jpg",
    title: "Sales & CRM Pipeline",
    tool: "Power BI",
    caption: "Lead pipeline health — proposal sources, lead stages, tiering, and commercial activity by employee.",
  },
  {
    img: "/examples/overview.jpg",
    title: "Operations Overview",
    tool: "Zoho Analytics",
    caption: "A single-glance summary — total actions received across social media, calls and WhatsApp, with period comparisons.",
  },
  {
    img: "/examples/agency.jpg",
    title: "Ad Performance Overview",
    tool: "Agency Analytics",
    caption: "Cross-platform ad performance — overall spend, leads, CPM, CTR and clicks, with spend and orders broken down by platform.",
  },
];

// ── What each tool can integrate with (representative connectors) ──
export const TOOL_INTEGRATIONS: {
  tool: string;
  note: string;
  items: { name: string; icon: string }[];
}[] = [
  {
    tool: "Power BI",
    note: "100+ data connectors — from spreadsheets to enterprise databases and cloud apps.",
    items: [
      { name: "Excel", icon: "excel" },
      { name: "Google Sheets", icon: "sheets" },
      { name: "CSV / JSON", icon: "csv" },
      { name: "SQL Server", icon: "microsoft" },
      { name: "MySQL", icon: "database" },
      { name: "PostgreSQL", icon: "database" },
      { name: "Azure", icon: "microsoft" },
      { name: "SharePoint", icon: "microsoft" },
      { name: "Dynamics 365", icon: "microsoft" },
      { name: "Salesforce", icon: "salesforce" },
      { name: "Google Analytics", icon: "google" },
      { name: "BigQuery", icon: "google" },
      { name: "Snowflake", icon: "database" },
      { name: "Web / REST API", icon: "api" },
    ],
  },
  {
    tool: "Zoho Analytics",
    note: "500+ connectors across the Zoho suite, marketing, finance and databases.",
    items: [
      { name: "Zoho CRM", icon: "crm" },
      { name: "Zoho Books", icon: "books" },
      { name: "Zoho Desk", icon: "desk" },
      { name: "Google Ads", icon: "google" },
      { name: "Google Analytics", icon: "google" },
      { name: "Meta Ads", icon: "meta" },
      { name: "Salesforce", icon: "salesforce" },
      { name: "HubSpot", icon: "hubspot" },
      { name: "Mailchimp", icon: "mailchimp" },
      { name: "QuickBooks", icon: "invoice" },
      { name: "Shopify", icon: "shopify" },
      { name: "Stripe", icon: "stripe" },
      { name: "Microsoft Ads", icon: "microsoft" },
      { name: "Google Sheets", icon: "sheets" },
    ],
  },
  {
    tool: "Agency Analytics",
    note: "80+ marketing integrations built for agencies and client reporting.",
    items: [
      { name: "Google Analytics", icon: "google" },
      { name: "Google Ads", icon: "google" },
      { name: "Search Console", icon: "search" },
      { name: "Google Business", icon: "google" },
      { name: "Meta Ads", icon: "meta" },
      { name: "Instagram", icon: "instagram" },
      { name: "TikTok Ads", icon: "tiktok" },
      { name: "LinkedIn", icon: "linkedin" },
      { name: "X (Twitter)", icon: "x" },
      { name: "Snapchat", icon: "snapchat" },
      { name: "YouTube", icon: "youtube" },
      { name: "Microsoft Ads", icon: "microsoft" },
      { name: "Mailchimp", icon: "mailchimp" },
      { name: "Shopify", icon: "shopify" },
      { name: "SEMrush", icon: "seo" },
      { name: "CallRail", icon: "phone" },
    ],
  },
];

// ── Marketing Budget 2026 (from Marketing budget 2026.xlsx) ──
export const BUDGET_TOTAL = 21765289; // SAR — Plan Marketing Budget 2026
export const BUDGET_ONLINE = 7984533;
export const BUDGET_OFFLINE = 13780756;

export const BUDGET_BY_BRAND = [
  { name: "NOLTE", value: 7320289 },
  { name: "BQ KSA", value: 6200000 },
  { name: "OPPEIN", value: 2200000 },
  { name: "E-commerce", value: 1660000 },
  { name: "Bed House", value: 1560000 },
  { name: "LA-Z-BOY", value: 1380000 },
  { name: "MAZWOOD", value: 1085000 },
  { name: "BedZ", value: 360000 },
];

export const BUDGET_BY_MONTH = [
  { name: "Jan", value: 630260 },
  { name: "Feb", value: 3520545 },
  { name: "Mar", value: 6302848 },
  { name: "Apr", value: 781548 },
  { name: "May", value: 831838 },
  { name: "Jun", value: 879182 },
  { name: "Jul", value: 837400 },
  { name: "Aug", value: 824228 },
  { name: "Sep", value: 3314489 },
  { name: "Oct", value: 984045 },
  { name: "Nov", value: 1392952 },
  { name: "Dec", value: 1474954 },
];

// Online ad spend distribution by platform (actual, to date)
export const BUDGET_BY_PLATFORM = [
  { name: "META", value: 1299552, color: "#1877F2" },
  { name: "Snap", value: 774183, color: "#E4B000" },
  { name: "Google", value: 755625, color: "#34A853" },
  { name: "TikTok", value: 658771, color: "#5053C8" },
  { name: "X (Twitter)", value: 789, color: "#71767B" },
];

export const SECTIONS = [
  { id: "why", label: "Why Dashboards" },
  { id: "structure", label: "Structure & KPIs" },
  { id: "interpret", label: "Interpretation" },
  { id: "reporting", label: "Reporting" },
  { id: "examples", label: "Examples" },
  { id: "budget", label: "Budget 2026" },
  { id: "tools", label: "Tools" },
];
