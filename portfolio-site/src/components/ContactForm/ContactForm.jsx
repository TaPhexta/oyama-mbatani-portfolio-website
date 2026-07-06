import Button from "../Button/Button";

import "./ContactForm.css";

function ContactForm() {
  return (
    <form id="contact-form" className="contact-form">
      <input type="text" placeholder="Your Name" />

      <input type="email" placeholder="Email Address" />

      <input type="text" placeholder="Subject" />

      <textarea rows="6" placeholder="Message" />

      <Button>Send Message</Button>
    </form>
  );
}

export default ContactForm;
