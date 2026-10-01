import { ArrowLeftRight, ArrowDown } from "lucide-react";
type Node = { title: string; detail: string; tag?: string };
function SystemNode({ title, detail, tag }: Node) {
  return (
    <div className="system-node">
      {tag && <span className="system-tag">{tag}</span>}
      <h3>{title}</h3>
      <p>{detail}</p>
    </div>
  );
}
function Connection({ label }: { label: string }) {
  return (
    <div className="system-connection">
      <ArrowLeftRight aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}
export function ProjectArchitecture({ slug }: { slug: string }) {
  if (slug === "clinical-platform")
    return (
      <section
        className="case-section architecture architecture-clinical"
        id="architecture"
      >
        <h2>How the systems connect</h2>
        <p>
          The external backend connects the doctor application, processing
          services, and custom ERP workflows. This is a high-level integration
          map.
        </p>
        <div className="system-map">
          <div className="system-main">
            <SystemNode
              tag="DOCTOR WORKSPACE"
              title="Flutter application"
              detail="Focused dictation, transcript preview, editable case sheets, and doctor review."
            />
            <Connection label="Recordings & drafts" />
            <SystemNode
              tag="INTEGRATION LAYER"
              title="FastAPI backend"
              detail="Consultation sessions, processing coordination, and synchronization with the ERP."
            />
            <Connection label="Records & events" />
            <SystemNode
              tag="CLINICAL RECORD"
              title="ERPNext / Frappe"
              detail="Leads, appointments, custom encounters, patient history, and printable records."
            />
          </div>
          <div className="system-branch">
            <span>Services connected to the backend</span>
            <ArrowDown aria-hidden="true" />
          </div>
          <div className="system-services">
            <SystemNode
              title="Speech & language services"
              detail="Transcribe recordings and extract structured information for the draft."
            />
            <SystemNode
              title="PostgreSQL"
              detail="Store consultation sessions and processing information."
            />
            <SystemNode
              title="LiveKit"
              detail="Support orientation sessions and synchronize participation results."
            />
          </div>
        </div>
        <div className="architecture-note">
          <h3>Review is part of the architecture</h3>
          <p>
            Generated clinical information returns to the doctor as an editable
            draft. Consent and the encounter approval lifecycle control
            progression into the reviewed ERP record. Synchronization retries
            and processing logs support the integration.
          </p>
        </div>
      </section>
    );
  if (slug === "whatsapp-workspace")
    return (
      <section
        className="case-section architecture architecture-messaging"
        id="architecture"
      >
        <h2>How messages and knowledge connect</h2>
        <p>
          A capability-level view of campaign creation, knowledge-based replies,
          and manual chat management.
        </p>
        <div className="system-map">
          <div className="system-main">
            <SystemNode
              tag="TEAM WORKSPACE"
              title="Campaigns & live inbox"
              detail="Create campaigns, configure bots, and reply to customer conversations."
            />
            <Connection label="Messages & replies" />
            <SystemNode
              tag="COMMUNICATION LAYER"
              title="Messaging platform"
              detail="Connect campaign activity and real-time chat management with AI assistance."
            />
            <Connection label="Send & receive" />
            <SystemNode
              tag="CUSTOMER CHANNEL"
              title="WhatsApp API"
              detail="Connect the platform to conversations with WhatsApp users."
            />
          </div>
          <div className="system-branch">
            <span>Knowledge-based assistant</span>
            <ArrowDown aria-hidden="true" />
          </div>
          <div className="system-services">
            <SystemNode
              title="Organization knowledge"
              detail="Business information provided when configuring the bot."
            />
            <SystemNode
              title="Relevant context"
              detail="RAG retrieves information related to the customer’s question."
            />
            <SystemNode
              title="LLM response"
              detail="The model uses the retrieved context to prepare its answer."
            />
          </div>
        </div>
        <div className="architecture-note">
          <h3>Automation with room for a personal reply</h3>
          <p>
            The platform supports both organization-aware bots and manual
            replies in the live inbox. Organization knowledge gives automated
            answers relevant context, while the live inbox keeps direct customer
            communication accessible.
          </p>
        </div>
      </section>
    );
  return (
    <section
      className="case-section architecture architecture-web"
      id="architecture"
    >
      <h2>Two ways to deliver the website</h2>
      <p>
        This case study covers both WordPress sites and custom web applications.
        Each uses the approach appropriate to its requirements.
      </p>
      <div className="website-architectures">
        <div className="website-architecture">
          <h3>Content-managed websites</h3>
          <div className="web-system-flow">
            <SystemNode
              tag="CONTENT"
              title="WordPress"
              detail="Manage the organization’s pages and website content."
            />
            <ArrowDown aria-hidden="true" />
            <SystemNode
              tag="VISITOR EXPERIENCE"
              title="Business website"
              detail="Present services and information through the public-facing site."
            />
          </div>
        </div>
        <div className="website-architecture">
          <h3>Custom web applications</h3>
          <div className="web-system-flow">
            <SystemNode
              tag="INTERFACE"
              title="Web frontend"
              detail="Provide the screens and interactions required by the organization."
            />
            <ArrowDown aria-hidden="true" />
            <SystemNode
              tag="APPLICATION & DATA"
              title="Backend + database"
              detail="Support application logic and integration with stored business information."
            />
          </div>
        </div>
      </div>
      <div className="architecture-note">
        <h3>Ownership beyond implementation</h3>
        <p>
          My responsibilities also included domain purchase and setup, website
          management, and updates. The concept preview illustrates a visual
          direction; it does not represent the exact design of an organization
          website.
        </p>
      </div>
    </section>
  );
}
