import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "../css/contact.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const ADMIN_EMAIL = "aarushpal876@gmail.com";

  // Initialize EmailJS on component mount
  useEffect(() => {
    emailjs.init("-5YGX9QmhRqicfzXo"); 
    // Replace with your EmailJS public key
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setSubmitStatus("");

    if (!email) {
      alert("Please enter your email.");
      setLoading(false);
      return;
    }

    try {
      // Email template parameters
      // Note: ensure your EmailJS template 'To' field uses {{to_email}} so the admin receives it
      const templateParams = {
        user_name: name,
        user_email: email,
        user_phone: phone,
        user_message: message,
        admin_email: ADMIN_EMAIL,
        to_email: ADMIN_EMAIL,
      };

      // Send email using EmailJS
      await emailjs.send(
        "service_wpku72j", // Replace with your EmailJS Service ID
        "template_dedjlw4", // Replace with your EmailJS Template ID
        templateParams
      );

      setSubmitStatus("Email sent successfully! We'll get back to you soon.");
      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");

      // Clear status message after 5 seconds
      setTimeout(() => setSubmitStatus(""), 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      // Common EmailJS error: recipient address empty — inform developer/template fix
      const errMsg =
        error && error.text ? error.text : error && error.message ? error.message : "";
      if (errMsg.toLowerCase().includes("recipient") || errMsg.toLowerCase().includes("recep")) {
        alert(
          "EmailJS error: recipient address seems empty. Ensure your EmailJS template 'To' field uses {{to_email}} or configure the recipient in the template."
        );
      }
      setSubmitStatus("Failed to send email. Please try again.");
      setTimeout(() => setSubmitStatus(""), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-overlay"></div>

      <div className="contact-header">
        <span>GET IN TOUCH</span>
        <h2>Start Your Fitness Journey Today</h2>
        <p>
          Have questions? Contact our team and take the first step toward a
          stronger, healthier version of yourself.
        </p>
      </div>

      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <h3>Contact Information</h3>

          <div className="info-box">
            <FaMapMarkerAlt />
            <span>123 Fitness Street, kanpur</span>
          </div>

          <div className="info-box">
            <FaPhoneAlt />
            <span>+91 98765 43210</span>
          </div>

          <div className="info-box">
            <FaEnvelope />
            <span>aarushpal876@gmail.com</span>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          {submitStatus && (
            <div
              className={`status-message ${
                submitStatus.includes("success") ? "success" : "error"
              }`}
            >
              {submitStatus}
            </div>
          )}

          <input
            type="text"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={loading}
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={loading}
          />
          <textarea
            rows="5"
            placeholder="Tell us about your fitness goals..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={loading}
          ></textarea>

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Join Now"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;