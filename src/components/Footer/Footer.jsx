import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-logo">
              <h3>Techto</h3>
            </div>
            <p className="footer-description">
              Transforming businesses through strategic consulting and innovative solutions. Your success is our mission.
            </p>
            <div className="footer-social">
              <a href="#facebook" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#twitter" aria-label="Twitter"><FaTwitter /></a>
              <a href="#linkedin" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="#instagram" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#consulting">Financial Consulting</a></li>
              <li><a href="#analysis">Competitive Analysis</a></li>
              <li><a href="#planning">Strategic Planning</a></li>
              <li><a href="#development">Business Development</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul className="footer-contact">
              <li>
                <FaMapMarkerAlt />
                <span>4648 Rocky, New York</span>
              </li>
              <li>
                <FaEnvelope />
                <a href="mailto:info@example.com">info@example.com</a>
              </li>
              <li>
                <FaPhone />
                <a href="tel:+9901234567890">+990 123 456 789</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container">
          <p>© {new Date().getFullYear()} Techto. All rights reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;