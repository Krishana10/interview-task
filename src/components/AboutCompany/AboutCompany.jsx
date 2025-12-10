import React from "react";
import { motion } from "framer-motion";
import "./AboutCompany.css";
import aboutcompany from "../../assets/b-ser-img1.png";
const AboutCompany = () => {
  return (
    <section aria-label="About company" className="about-company-section">
      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="subheading">About Company</p>
        <h2>
          25+ Years of Delivering Consulting <span className="italic">Solutions</span>
        </h2>
        <p className="about-description">
          If you’re just starting and want a basic idea here’s a quick outline of what a strong business consulting website usually includes Transforming Vision into Strategy. Strategy into Results.
        </p>
        <div className="about-stats">
          <div className="stat-box">
            <p className="stat-value">99%</p>
            <p className="stat-label">Product Completed</p>
          </div>
          <div className="stat-box light-blue">
            <p className="stat-value">95%</p>
            <p className="stat-label">Success Rate</p>
          </div>
        </div>
        <button className="btn about-discover">Discover More</button>
      </motion.div>

      <motion.div
        className="about-img-container"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="image-quad">
          <img src={aboutcompany} alt="Consulting team 1" />
          <img src={aboutcompany} alt="Consulting team 2" />
          <img src={aboutcompany} alt="Consulting team 3" />
          <img src={aboutcompany} alt="Consulting team 4" />
          <div className="circle-center">
            <div className="circle-inner">Experience → Explore →</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutCompany;