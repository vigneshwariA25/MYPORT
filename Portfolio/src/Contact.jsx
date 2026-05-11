import "./Contact.css";
import WhatsAppButton from "./WhatsAppButton";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-card fade-in">
        <h2>Contact Me</h2>
        <hr />
        <p>🚀I’m a fresher Front-End Developer actively looking for internship and entry-level opportunities.</p>
<p> ✨ I’m passionate about learning, building real-world projects, and growing as a developer.</p>
<p>
📩Let’s connect!!</p>
        <div className="contact-links">
          <a
            href="mailto:youremail@example.com"
            target="_blank"
            rel="noreferrer"
          >
          📧 Email
          </a>
          <a
            href=" https://www.linkedin.com/in/vigneshwari-a-233a823a7"
            target="_blank"
            rel="noreferrer"
          >
          🔗 LinkedIn
          </a>
          <a
            href="https://github.com/vigneshwariA25"
            target="_blank"
            rel="noreferrer"
          >
          🐙 GitHub
          </a>
        </div>
      <WhatsAppButton />
      </div>
    </section>
  );
}

export default Contact;