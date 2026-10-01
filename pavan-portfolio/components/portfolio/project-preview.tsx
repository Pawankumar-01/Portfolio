import {
  AudioLines,
  Check,
  ChevronRight,
  FileText,
  MessageSquare,
  Search,
  Send,
  Stethoscope,
  Users,
} from "lucide-react";

function Clinical() {
  return (
    <div className="preview-canvas clinical-canvas">
      <div className="preview-browser">
        <div className="preview-toolbar">
          <span className="preview-brand">
            <Stethoscope /> Care / workspace
          </span>
          <span>Encounters</span>
          <span className="preview-avatar">DR</span>
        </div>
        <div className="clinical-layout">
          <aside className="clinical-sidebar">
            <span>WORKSPACE</span>
            <p>
              <Users /> Patients
            </p>
            <p className="selected">
              <FileText /> Encounters
            </p>
            <p>
              <AudioLines /> Dictation
            </p>
            <div className="sidebar-bottom">Sample workspace</div>
          </aside>
          <div className="clinical-record">
            <div className="preview-breadcrumb">
              Patients / Demo patient / Encounter
            </div>
            <div className="preview-title-row">
              <h3>Consultation record</h3>
              <span className="preview-pill">Draft</span>
            </div>
            <p className="preview-muted">
              Demo patient · Follow-up consultation
            </p>
            <div className="clinical-tabs">
              <b>Case sheet</b>
              <span>History</span>
              <span>Attachments</span>
            </div>
            <div className="record-block">
              <span className="record-label">01 / HISTORY & COMPLAINTS</span>
              <h4>Presenting concerns</h4>
              <p>
                Review the consultation summary and confirm the recorded
                history.
              </p>
            </div>
            <div className="record-block">
              <span className="record-label">02 / EXAMINATION</span>
              <div className="clinical-fields">
                <span>
                  Vitals<b>Review draft</b>
                </span>
                <span>
                  Clinical findings<b>Review draft</b>
                </span>
              </div>
            </div>
            <div className="record-note">
              <Check /> Doctor review required before approval
            </div>
          </div>
        </div>
      </div>
      <div className="dictation-panel">
        <div className="dictation-heading">
          <AudioLines />
          <span>Doctor dictation</span>
        </div>
        <h4>
          A focused note.
          <br />A structured draft.
        </h4>
        <div className="dictation-steps">
          <p>
            <b>1</b> History <Check />
          </p>
          <p className="active">
            <b>2</b> Examination <AudioLines />
          </p>
          <p>
            <b>3</b> Treatment plan
          </p>
        </div>
        <div className="voice-bars">
          {[12, 23, 16, 34, 27, 43, 23, 38, 18, 30, 42, 24, 14, 29, 20].map(
            (h, i) => (
              <i key={i} style={{ height: `${h}%` }} />
            ),
          )}
        </div>
        <span className="dictation-caption">Recording examination note</span>
      </div>
    </div>
  );
}
function Messaging() {
  return (
    <div className="preview-canvas messaging-canvas">
      <div className="messaging-window">
        <div className="messaging-top">
          <span className="preview-brand">
            <MessageSquare /> Relay
          </span>
          <span>Inbox</span>
          <span>Campaigns</span>
          <span>Knowledge</span>
          <span className="preview-avatar">PK</span>
        </div>
        <div className="messaging-layout">
          <div className="inbox-panel">
            <div className="preview-title-row">
              <h3>Conversations</h3>
              <Search />
            </div>
            <div className="inbox-filter">
              All conversations <ChevronRight />
            </div>
            {[
              ["AS", "Asha S.", "Could I schedule a callback?", "Now"],
              ["RK", "Rohan K.", "Thanks for the information.", "12m"],
              ["MT", "Maya T.", "What services do you offer?", "24m"],
            ].map(([initials, name, message, time], i) => (
              <div
                key={name}
                className={`inbox-row ${i === 0 ? "selected" : ""}`}
              >
                <span className="inbox-avatar">{initials}</span>
                <div>
                  <b>{name}</b>
                  <p>{message}</p>
                </div>
                <small>{time}</small>
              </div>
            ))}
            <div className="inbox-foot">
              <Send /> Campaign conversations
            </div>
          </div>
          <div className="chat-panel">
            <div className="chat-header">
              <span className="inbox-avatar">AS</span>
              <div>
                <b>Asha S.</b>
                <p>Sample conversation</p>
              </div>
              <span className="preview-pill">Manual reply</span>
            </div>
            <div className="chat-messages">
              <span className="chat-date">TODAY</span>
              <p className="chat-bubble incoming">
                Hi, where can I learn more about your services?
              </p>
              <p className="chat-bubble outgoing">
                I can help with that. What would you like to know?
              </p>
              <span className="knowledge-note">
                <FileText /> Organization knowledge used
              </span>
              <p className="chat-bubble incoming">
                Could I schedule a callback?
              </p>
            </div>
            <div className="reply-box">
              <span>Write a personal reply…</span>
              <Send />
            </div>
          </div>
        </div>
        <div className="messaging-foot">
          <span>Campaigns</span>
          <i />
          <span>Knowledge-based answers</span>
          <i />
          <span>Human replies</span>
        </div>
      </div>
    </div>
  );
}
function Website() {
  return (
    <div className="preview-canvas website-canvas">
      <div className="editorial-window">
        <div className="editorial-nav">
          <strong>
            care studio<span>+</span>
          </strong>
          <div>
            <span>Our approach</span>
            <span>Care</span>
            <span>Contact</span>
          </div>
        </div>
        <div className="editorial-hero">
          <div className="editorial-copy">
            <span className="editorial-kicker">
              CARE, WITH YOU AT THE CENTRE
            </span>
            <h3>
              Space to pause.
              <br />
              <em>
                Care to move
                <br />
                forward.
              </em>
            </h3>
            <p>
              Thoughtful conversations.
              <br />A clearer path to your next step.
            </p>
            <span className="editorial-cta">
              Explore our approach <ChevronRight />
            </span>
          </div>
          <div className="editorial-feature">
            <span>01 / OUR PHILOSOPHY</span>
            <h4>
              It starts
              <br />
              with listening.
            </h4>
            <p>
              Time to understand.
              <br />
              Room to ask questions.
              <br />
              Care that feels personal.
            </p>
            <div className="editorial-rule" />
            <span>A THOUGHTFUL APPROACH TO WELLBEING</span>
          </div>
        </div>
        <div className="editorial-bottom">
          <span>
            01 <b>Understand</b>
          </span>
          <span>
            02 <b>Plan together</b>
          </span>
          <span>
            03 <b>Keep in touch</b>
          </span>
        </div>
      </div>
    </div>
  );
}
const labels: Record<string, string> = {
  "clinical-platform":
    "Reconstructed clinical interface in blue and white: editable case sheet, doctor-review notice, and three-stage dictation panel. Fictional content.",
  "whatsapp-workspace":
    "Reconstructed green messaging interface with campaign navigation, a live inbox, organization-knowledge replies, and a manual reply field. Fictional conversations.",
  "web-development":
    "Fictional Care Studio website concept with warm cream, terracotta, expressive typography, and a simple navigation layout.",
};
export function ProjectPreview({ slug }: { slug: string }) {
  return (
    <div
      className={`project-preview preview-${slug}`}
      role="img"
      aria-label={labels[slug]}
    >
      <div aria-hidden="true">
        {slug === "clinical-platform" ? (
          <Clinical />
        ) : slug === "whatsapp-workspace" ? (
          <Messaging />
        ) : (
          <Website />
        )}
      </div>
    </div>
  );
}
