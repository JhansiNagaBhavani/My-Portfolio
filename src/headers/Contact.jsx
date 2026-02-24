import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact">
      <h1>Contact Me</h1>
      <h3>Get In Touch</h3>
      <div className="contact-container">
        <div className="contact-info">
          <div className="info-item">
            <h4>Email</h4>
            <p>kodurijhansi441@gmail.com</p>
          </div>
          <div className="info-item">
            <h4>Phone</h4>
            <p>+91 8977896623</p>
          </div>
          <div className="info-item">
            <h4>Location</h4>
            <p>West Godavari
District in Andhra Pradesh
Tanuku, India</p>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
          <button type="submit" disabled={loading}>{loading ? 'Sending...' : 'Send Message'}</button>
          {status && <p className={status.includes('success') ? 'success-msg' : 'error-msg'}>{status}</p>}
        </form>
      </div>
    </div>
  );
}

export default Contact;
