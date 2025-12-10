import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import businessWoman from "../../assets/BBB_01.jpg";
const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-left">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Innovating Solutions <br /> for Your <span className="italic">Business</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          We specialize in helping businesses unlock their full potential through strategic consulting, operational excellence and growth-focused solutions.
        </motion.p>
        <motion.button
          className="btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Free Consultation
        </motion.button>
        <motion.div
          className="hero-smallcard"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <img src={businessWoman} alt="Dashboard" />
        </motion.div>
      </div>
      <div className="hero-right">
        <img
          src={businessWoman}
          alt="Business Woman"
          className="hero-img"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Hero;