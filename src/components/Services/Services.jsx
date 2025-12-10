import React from "react";
import { FaRegLightbulb, FaChartPie, FaBullseye } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Services.css";
import services1 from "../../assets/b-ser-img1.png";
import services2 from "../../assets/b-ser-img2.png";
import services3 from "../../assets/b-ser-img3.png";
const services = [
  {
    id: 1,
    icon: <FaRegLightbulb />,
    title: "Financial Consulting",
    points: ["Retail Social Media Marketing", "Preliminary Evaluation"],
    img: {services1},
  },
  {
    id: 2,
    icon: <FaChartPie />,
    title: "Competitive Analysis",
    points: ["Revolution Creativity", "Feasibility Studies"],
    img: {services2},
  },
  {
    id: 3,
    icon: <FaBullseye />,
    title: "Strategic Planning",
    points: ["Robust Brand Identity", "Advanced Manufacturing"],
    img: {services3},
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      type: "spring",
      stiffness: 50,
    },
  }),
};

const Services = () => {
  return (
    <section id="services" aria-label="Expert Consulting Solutions" className="services-section">
      <h6 className="section-subtitle">EXPERT CONSULTING SOLUTIONS</h6>
      <h2>
        Innovative Business <span className="italic">Solutions</span>
      </h2>
      <motion.div className="services-grid">
        {services.map(({ id, icon, title, points, img }, i) => (
          <motion.article
            key={id}
            className="service-card"
            custom={i}
            initial="hidden"
            animate="visible"
            variants={cardVariant}
            whileHover={{ scale: 1.05, boxShadow: "0 16px 48px rgb(13 110 253 / 0.4)" }}
          >
            <div className="service-icon">{icon}</div>
            <h3 className="service-title">{title}</h3>
            <ul className="service-points">
              {points.map((p, idx) => (
                <li key={idx}>+ {p}</li>
              ))}
            </ul>
            <div className="service-img">
              <img src={services1} alt={title} />
            </div>
          </motion.article>
        ))}
      </motion.div>
      <button className="btn see-details">See More Details</button>
    </section>
  );
};
export default Services;