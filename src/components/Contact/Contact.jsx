import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Simulation)");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <section className="contact-section" aria-label="Get in touch">
      <div className="section-header text-center">
        <p className="section-subtitle">GET IN TOUCH</p>
        <h2>
          We're Ready to <span className="italic">Help!</span>
        </h2>
        <p className="section-description">
          Available but the majority have suffered alteration in some form by injected humor, or randomized words which
        </p>
      </div>

      <div className="contact-container">
        <motion.div
          className="contact-map"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <iframe
            title="Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14320.422128452596!2d80.07280103377038!3d12.907898663182758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f586508a371b%3A0x682ae48a4f4c2bd5!2sPerungalathur%2C%20Tamil%20Nadu!5e1!3m2!1sen!2sin!4v1765393957220!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            frameBorder="0"
          ></iframe>

          <div className="contact-info">
            <div>
              <h4>Email:</h4>
              <a href="mailto:info@example.com">info@example.com</a>
            </div>
            <div>
              <h4>Phone Call:</h4>
              <a href="tel:+14065550120">(406) 555-0120</a>
            </div>
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          noValidate
          aria-label="Contact form"
        >
          <input
            name="fullName"
            type="text"
            placeholder="Full Name*"
            required
            value={formData.fullName}
            onChange={handleChange}
            autoComplete="name"
            aria-required="true"
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address*"
            required
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            aria-required="true"
          />
          <input
            name="phone"
            type="tel"
            placeholder="Phone Number*"
            required
            value={formData.phone}
            onChange={handleChange}
            autoComplete="tel"
            aria-required="true"
          />
          <select
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            aria-required="true"
          >
            <option value="" disabled>
              Type Of Service*
            </option>
            <option value="Consulting">Consulting</option>
            <option value="Marketing">Marketing</option>
            <option value="Strategy">Strategy</option>
          </select>
          <textarea
            name="message"
            rows="4"
            placeholder="Type Here..."
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit" className="btn send-message">
            Send Message →
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;