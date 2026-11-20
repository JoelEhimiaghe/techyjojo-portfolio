/*
  TECHYJOJO — PROJECT CONTENT
  --------------------------------
  This is the one file to edit when you want to add or update portfolio projects.
  Copy one project object, change its details, and save this file.

  For screenshots, place image files in this same folder and use their filename
  in the images array, for example: images: ["lead-workflow.png"]

  Keep status as "completed", "in-progress", or "planned".
  Leave video, repository, or images empty until you have real evidence to add.
*/

window.PORTFOLIO_PROJECTS = [
  {
    number: "01",
    title: "AI-Powered Customer Support & Enquiry Management System",
    category: "AI & WORKFLOW AUTOMATION",
    status: "completed",
    summary: "An automated workflow that receives customer messages, checks existing records, uses a locally hosted AI model to process the enquiry, and routes the result for notification and record keeping.",
    problem: "Businesses can struggle to process incoming enquiries consistently, keep useful records and make sure the right people are notified.",
    solution: "Built an n8n workflow that receives a chat message, retrieves sheet data, processes the message through JavaScript and an Ollama-powered LLM chain, applies conditional logic, sends an email notification and appends a record to Google Sheets.",
    tools: ["n8n", "Ollama", "JavaScript", "Google Sheets", "Gmail / SMTP"],
    highlights: [
      "Receives incoming customer chat messages",
      "Uses existing Google Sheets records as workflow input",
      "Processes enquiry content with an Ollama language model",
      "Uses conditional routing to control subsequent actions",
      "Sends an email notification and appends enquiry data to a sheet"
    ],
    images: ["workflow-customer-support.png"],
    imageAlt: "n8n workflow for the AI-powered customer support and enquiry management system",
    video: "",
    repository: "https://github.com/JoelEhimiaghe/ai-customer-support-automation",
    demoContact: "mailto:joeldamilare67@gmail.com?subject=Customer%20Support%20Automation%20Walkthrough",
    note: "Workflow screenshot available. Additional execution, spreadsheet and email evidence can be added later."
  },
  {
    number: "02",
    title: "AI-Powered Lead Processing & Routing Automation",
    category: "LEAD MANAGEMENT AUTOMATION",
    status: "completed",
    summary: "A webhook-based workflow that receives lead information, uses an AI model to classify prospects and routes qualified leads for follow-up.",
    problem: "Incoming leads can be difficult to prioritize when every enquiry has to be reviewed and routed manually.",
    solution: "Built an n8n workflow that receives form data through a webhook, analyzes lead information with an LLM, applies conditional routing and sends email notifications for qualified or high-priority leads.",
    tools: ["n8n", "OpenAI / LLMs", "Webhooks", "Google Sheets", "Gmail / SMTP"],
    highlights: ["Receives lead information through a webhook-based form", "Uses an LLM to analyze and classify incoming leads", "Applies IF and Switch logic to route leads", "Sends automated notifications for qualified or high-priority leads", "Connects records and notifications across Google Sheets and email"], images: [], video: "", repository: "", demoContact: "mailto:joeldamilare67@gmail.com?subject=Lead%20Routing%20Automation%20Enquiry",
    note: "Built as a working automation project. A public walkthrough and repository link can be added when ready."
  },
  {
    number: "03",
    title: "E-Commerce Order & Inventory Automation",
    category: "E-COMMERCE AUTOMATION",
    status: "planned",
    summary: "A planned workflow connecting order processing, stock updates and customer notifications.",
    problem: "", solution: "", tools: ["n8n", "Google Sheets", "APIs", "JavaScript"],
    highlights: [], images: [], video: "", repository: "", demoContact: "",
    note: "Planned project — not yet built."
  },
  {
    number: "04",
    title: "Invoice & Payment Management System",
    category: "BUSINESS PROCESS AUTOMATION",
    status: "planned",
    summary: "A planned system for invoice creation, payment tracking and automated payment reminders.",
    problem: "", solution: "", tools: ["n8n", "Google Sheets", "Email automation"],
    highlights: [], images: [], video: "", repository: "", demoContact: "",
    note: "Planned project — not yet built."
  },
  {
    number: "05",
    title: "AI Appointment Booking & Scheduling System",
    category: "SCHEDULING AUTOMATION",
    status: "planned",
    summary: "A planned booking workflow for availability checks, confirmations, reminders and rescheduling.",
    problem: "", solution: "", tools: ["n8n", "Calendar API", "AI / LLMs"],
    highlights: [], images: [], video: "", repository: "", demoContact: "",
    note: "Planned project — not yet built."
  },
  {
    number: "06",
    title: "Automated Business Reporting & Analytics",
    category: "REPORTING & ANALYTICS",
    status: "planned",
    summary: "A planned workflow that gathers business data and distributes scheduled reports with useful summaries.",
    problem: "", solution: "", tools: ["n8n", "Google Sheets", "JavaScript", "AI / LLMs"],
    highlights: [], images: [], video: "", repository: "", demoContact: "",
    note: "Planned project — not yet built."
  },
  {
    number: "07",
    title: "AI-Powered Business Operations Assistant",
    category: "AI AGENTS & INTEGRATION",
    status: "planned",
    summary: "An advanced planned assistant that can interpret requests, retrieve business information and carry out approved operational tasks.",
    problem: "", solution: "", tools: ["n8n", "Ollama / LLMs", "APIs", "JavaScript"],
    highlights: [], images: [], video: "", repository: "", demoContact: "",
    note: "Advanced planned project — not yet built."
  }
];
