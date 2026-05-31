import { useState } from 'react';
import React from "react";
export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="section page-section">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">Contact</p>
          <h1>Contact CineScope</h1>
          
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your name" required />
          <input type="email" placeholder="Your email" required />
          <textarea placeholder="Your message" rows="5" required></textarea>
          <button className="btn" type="submit">Send Message</button>
          {sent && <p className="success-msg">Message sent successfully.</p>}
        </form>
      </div>
    </section>
  );
}
