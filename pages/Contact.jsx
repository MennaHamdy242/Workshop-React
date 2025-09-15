import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import "./App.css";

export default function Contact() {
  return (
    <div className="contact-page">
      {/* Top Section */}
      <div className="contact-header">
        <h2>Get In Touch</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
          quaerat unde quam dolor culpa veritatis inventore, aut commodi eum
          veniam vel.
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="contact-cards">
        <div className="contact-card">
          <MapPin className="icon" size={32} />
          <h4>102 Street 2714 Donovan</h4>
          <p>Lorem ipsum dolor sit amet discont</p>
        </div>

        <div className="contact-card">
          <Phone className="icon" size={32} />
          <h4>+02 1234 567 88</h4>
          <p>Lorem ipsum dolor sit amet discont</p>
        </div>

        <div className="contact-card">
          <Mail className="icon" size={32} />
          <h4>info@example.com</h4>
          <p>Lorem ipsum dolor sit amet discont</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <h3>Send Us</h3>
        <p>
          Contact us for all your questions and opinions, or you can solve your
          problems in a shorter time with our contact offices.
        </p>

        <form>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" required />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="text" id="phone" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" rows="5"></textarea>
          </div>

          <div className="form-btn">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
}
