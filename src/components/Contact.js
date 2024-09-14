import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <section id="contact" class="contact-section">
  <h2>Get in Touch</h2>
  <p>If you have any questions or just want to say hello, feel free to drop me a message!</p>

  <form class="contact-form" action="/" method="post">
    <div class="form-row">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required></input>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required></input>
      </div>
    </div>
    
    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="5" required></textarea>

    <button type="submit" class="btn btn-primary">Send Message</button>
  </form>
</section>

  );
}

export default Contact;
