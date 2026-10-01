export type Project = {
  slug: string;
  title: string;
  category: string;
  cardTitle: string;
  cardDescription: string;
  highlights: string[];
  label: string;
  headline: string;
  intro: string;
  role: string;
  scope: string;
  statusShort: string;
  problem: string[];
  features: { title: string; description: string }[];
  workflow: { title: string; description: string }[];
  contribution: string[];
  status: string[];
  technology: string[];
};
export const projects: Project[] = [
  {
    slug: "clinical-platform",
    title: "Connected Patient Management & Clinical Documentation",
    category: "Clinical operations",
    cardTitle: "From first enquiry to a reviewed clinical record.",
    cardDescription:
      "A connected patient journey, with custom business workflows and a voice application that helps doctors prepare clinical documentation.",
    highlights: [
      "Patient coordination and appointments",
      "Focused doctor dictation",
      "Editable drafts and controlled approval",
    ],
    label: "Business platform · AI documentation · Mobile application",
    headline: "One patient journey. Connected at every step.",
    intro:
      "A customized healthcare ERP connected to an external automation platform. It brings patient intake, online orientation, appointments, doctor dictation, and reviewed clinical records into one workflow.",
    role: "Custom ERP development, backend integration, and the doctor-facing mobile workflow.",
    scope:
      "Patient coordination, real-time sessions, AI-assisted documentation, and longitudinal records.",
    statusShort:
      "Core workflows implemented. AI accuracy and reliability are being refined.",
    problem: [
      "Patient information was spread across spreadsheets, phone calls, messaging applications, and manually written case sheets. Staff repeatedly transferred the same details between systems.",
      "Clinical documentation also had to accommodate both modern medicine and Ayurveda, including histories, examinations, prescriptions, diet schedules, procedures, and follow-up plans. The aim was to connect these stages and reduce repeated administrative and documentation work.",
    ],
    features: [
      {
        title: "A connected patient journey",
        description:
          "Capture enquiries, qualify leads, track follow-ups, and move eligible patients through orientation and appointment scheduling.",
      },
      {
        title: "Online orientation with attendance",
        description:
          "Schedule sessions, generate access links, track participation and watch time, and synchronize completion and assessment results.",
      },
      {
        title: "Three stages of doctor dictation",
        description:
          "Capture history, examination, and the treatment plan in focused recordings. Transcription and extraction produce editable clinical sections.",
      },
      {
        title: "Doctor review before approval",
        description:
          "Inspect source text, edit fields and sections, add section-specific dictation, and review the case sheet before it becomes an approved record.",
      },
      {
        title: "Structured clinical records",
        description:
          "Support practice-specific findings, medicines, procedures, diet schedules, clinical attachments, and previous-encounter history.",
      },
      {
        title: "Consent and record controls",
        description:
          "Require consent beyond the draft stage, follow a defined approval lifecycle, and protect approved encounters from normal editing.",
      },
    ],
    workflow: [
      {
        title: "Enquiry and lead capture",
        description:
          "A WhatsApp assistant answers service questions, collects enquiry details, and creates a structured lead linked to follow-up work.",
      },
      {
        title: "Orientation and eligibility",
        description:
          "An online session and assessment feed attendance and completion information into the appointment workflow.",
      },
      {
        title: "Patient and appointment creation",
        description:
          "Reuse or create the patient record, link the original lead, assign a practitioner, and track appointment status.",
      },
      {
        title: "Focused dictation and draft preparation",
        description:
          "The doctor records history, examination, and plan in three stages. Speech and language services organize the information into a draft.",
      },
      {
        title: "Review, approval, and continuity",
        description:
          "The doctor corrects and approves the record. The ERP retains encounter history and produces a printable case sheet and prescription.",
      },
    ],
    contribution: [
      "I customized the ERP around the organization’s patient and clinical workflows, creating the required DocTypes and encounter structures.",
      "I built the external backend and its integration with the ERP, connected the real-time orientation service, and developed the Flutter doctor workflow for recording, reviewing, and finalizing documentation.",
      "The integration includes session storage, synchronization retries, processing logs, health endpoints, and evaluation capture for transcription and extraction testing.",
    ],
    status: [
      "An end-to-end foundation is implemented: lead capture, orientation, eligibility, appointments, focused dictation, structured drafts, doctor review, ERP encounter creation, and printable records.",
      "The AI documentation component is functional and has been tested with realistic recordings. Current work focuses on transcription, consistent field extraction, preservation of negation and context, clinical mappings, latency, provider failures, and doctor-approved evaluation data. Security, monitoring, and scalability are also ongoing development priorities.",
      "Reducing administrative work and saving doctors’ time are product goals. No measured time-saving or clinical-accuracy percentage is claimed in this case study.",
    ],
    technology: [
      "ERPNext / Frappe",
      "FastAPI",
      "PostgreSQL",
      "Flutter",
      "LiveKit",
      "Whisper / ASR",
      "LLM integration",
    ],
  },
  {
    slug: "whatsapp-workspace",
    title: "WhatsApp Campaigns & AI Customer Support",
    category: "Customer communication",
    cardTitle: "Reach customers. Keep the conversation moving.",
    cardDescription:
      "A focused workspace for WhatsApp campaigns, AI assistants grounded in organization knowledge, and real-time chat management.",
    highlights: [
      "WhatsApp campaigns",
      "RAG-based organization answers",
      "Live conversations and manual replies",
    ],
    label: "Messaging platform · Knowledge-based AI",
    headline: "Campaigns, answers, and conversations in one workspace.",
    intro:
      "A custom WhatsApp platform used to create campaigns, configure AI bots with organization knowledge, and manage customer chats with real-time replies.",
    role: "Developed the messaging platform and integrated organization-aware AI assistance.",
    scope:
      "Campaign creation, knowledge-based bots, and real-time chat handling.",
    statusShort:
      "Developed and used for organization campaigns, bots, and chat management.",
    problem: [
      "Customer communication involves more than sending a message. A campaign can lead to service questions, follow-up conversations, and requests that need a personal reply.",
      "This project brings those activities into a focused platform: campaign creation, AI assistance using organization information, and a live inbox for managing conversations.",
    ],
    features: [
      {
        title: "Create WhatsApp campaigns",
        description:
          "Prepare and run campaigns for organization communication through a dedicated messaging platform.",
      },
      {
        title: "Configure knowledge-based bots",
        description:
          "Give the assistant organization knowledge so its replies can draw on information relevant to the business.",
      },
      {
        title: "Retrieve context before answering",
        description:
          "Use retrieval-augmented generation (RAG) to retrieve relevant organization information for the model’s response.",
      },
      {
        title: "Manage chats in real time",
        description:
          "View conversations and reply manually when a customer needs direct attention.",
      },
    ],
    workflow: [
      {
        title: "Prepare the communication",
        description:
          "Create the campaign and the customer message inside the platform.",
      },
      {
        title: "Answer using organization knowledge",
        description:
          "The AI assistant retrieves relevant business context and uses it when responding to questions.",
      },
      {
        title: "Continue the conversation",
        description:
          "Manage incoming chats and send personal replies from the real-time inbox.",
      },
    ],
    contribution: [
      "I developed a focused WhatsApp messaging platform with campaign creation and real-time conversation management.",
      "I also integrated AI bots using organization knowledge and RAG, connecting automated assistance with the wider communication workflow.",
    ],
    status: [
      "The platform has been developed and used for campaigns, organization-aware bots, and manual chat replies.",
      "The interface shown here is a conceptual reconstruction. It illustrates the stated capabilities without displaying internal organization screens, contact information, or campaign data. No delivery, conversion, or response-time metrics are claimed.",
    ],
    technology: [
      "WhatsApp API",
      "RAG",
      "LLM integration",
      "Real-time chat",
      "API integration",
    ],
  },
  {
    slug: "web-development",
    title: "Websites & Custom Web Applications",
    category: "Web development",
    cardTitle: "A business presence, built and maintained.",
    cardDescription:
      "Organization websites and custom applications, from domain setup and development to database integration and ongoing management.",
    highlights: [
      "WordPress websites",
      "Custom sites with database integration",
      "Domain setup and website management",
    ],
    label: "WordPress · Custom web development · Website management",
    headline: "From the domain to the website people use.",
    intro:
      "Website delivery for an organization, covering WordPress builds, custom full-stack websites, database integration, and continued management after launch.",
    role: "Website creation, domain setup, database integration, and management.",
    scope:
      "WordPress sites and custom web applications for organizational needs.",
    statusShort:
      "Developed for the organization; public visuals are fictional concepts.",
    problem: [
      "A business website needs both a clear public presence and someone to keep the underlying setup working. Custom workflows can also require a website to connect with stored business information.",
      "My work covers the website itself and the practical responsibilities around it: domain setup, implementation, data integration, and ongoing management.",
    ],
    features: [
      {
        title: "WordPress website development",
        description:
          "Create and manage organization websites, adapting content and presentation to the business.",
      },
      {
        title: "Custom full-stack websites",
        description:
          "Build web experiences with backend and database integration where the project needs more than static pages.",
      },
      {
        title: "Domain-to-website setup",
        description:
          "Handle domain purchase and the steps needed to bring the organization’s web presence together.",
      },
      {
        title: "Ongoing website management",
        description:
          "Maintain and update the websites as the organization’s needs and content change.",
      },
    ],
    workflow: [
      {
        title: "Understand the website’s purpose",
        description:
          "Identify the audience, content, and any business functions the website needs to support.",
      },
      {
        title: "Build and connect",
        description:
          "Develop the WordPress or custom site and integrate the required data layer.",
      },
      {
        title: "Launch and maintain",
        description:
          "Complete the domain and website setup, then continue managing the site.",
      },
    ],
    contribution: [
      "I created and managed WordPress websites for my organization, including domain purchase and ongoing website responsibilities.",
      "I also developed custom full-stack websites with database integration. The portfolio presentation focuses on those capabilities while keeping organization sites private.",
    ],
    status: [
      "These websites were developed for internal organizational use or its public presence, but the actual sites and branding are not shared in this portfolio.",
      "The preview uses a fictional healthcare website as a visual concept. It is not a screenshot of a delivered site or a claim that the exact pictured design was implemented.",
    ],
    technology: [
      "WordPress",
      "Full-stack development",
      "Database integration",
      "Domain setup",
      "Website management",
    ],
  },
];
