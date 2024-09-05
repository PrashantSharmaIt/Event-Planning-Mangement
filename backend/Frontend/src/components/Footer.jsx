import React from "react";
const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="title">
          <h1>Event Planning</h1>
          <p>Events and Weddings</p>
        </div>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <img src="linkedin.jpeg" alt="LinkedIn" className="icon" />
          </a>
          <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
            <img src="Instagram.png" alt="Instagram" className="icon" />
          </a>
          <a href="mailto:your-email@gmail.com">
            <img src="/gmail.jpeg" alt="Gmail" className="icon" />
          </a>
        </div>
        <div className="contact-info">
          <p>Contact: +91-7879459030</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
