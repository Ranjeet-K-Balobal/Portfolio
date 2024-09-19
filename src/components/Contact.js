import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "../styles/Contact.css";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    emailjs.init("Gq_fyY97zyqkoPE-p"); // Replace with your actual user ID
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_45aldqp",    // Replace with your service ID
      "template_59tloil",    // Replace with your template ID
      e.target
    ).then(
      (result) => {
        alert("Message sent successfully!");
      },
      (error) => {
        console.log(error.text);
        alert("Failed to send the message, please try again.");
      }
    );

    e.target.reset(); // Reset the form
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Get in Touch</h2>
      <p>If you have any questions or just want to say hello, feel free to drop me a message!</p>

      <form className="contact-form" onSubmit={sendEmail}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formState.message}
          onChange={handleInputChange}
          required
        ></textarea>

        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
