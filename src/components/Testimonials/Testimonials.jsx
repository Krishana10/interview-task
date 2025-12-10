import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    image: "https://i.pravatar.cc/150?u=sarah",
    rating: 5,
    text: "Techto transformed our business strategy completely. Their insights and expertise helped us achieve 200% growth in just 6 months. Highly recommended!",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, GrowthLabs",
    image: "https://i.pravatar.cc/150?u=michael",
    rating: 5,
    text: "Working with Techto was a game-changer. Their team's professionalism and strategic thinking exceeded our expectations. Best consulting firm we've worked with.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Director, InnovateCo",
    image: "https://i.pravatar.cc/150?u=emily",
    rating: 5,
    text: "The consulting services provided by Techto helped us streamline operations and boost productivity. Their data-driven approach delivered real results.",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "VP Operations, ScaleUp",
    image: "https://i.pravatar.cc/150?u=david",
    rating: 5,
    text: "Exceptional service! Techto's team understood our challenges and provided actionable solutions. Our ROI improved significantly within the first quarter.",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 900,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="testimonials-section" aria-label="Client testimonials">
      <motion.div
        className="testimonials-header text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="section-subtitle">TESTIMONIALS</p>
        <h2>
          What Our Clients <span className="italic">Say</span>
        </h2>
        <p className="section-description">
          Don't just take our word for it - hear from businesses we've helped transform
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Slider {...settings} className="testimonials-slider">
          {testimonials.map(({ id, name, role, image, rating, text }) => (
            <div key={id} className="testimonial-slide">
              <div className="testimonial-card">
                <div className="quote-icon">
                  <FaQuoteLeft />
                </div>
                <div className="testimonial-rating">
                  {[...Array(rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="testimonial-text">{text}</p>
                <div className="testimonial-author">
                  <img src={image} alt={name} loading="lazy" />
                  <div>
                    <h4>{name}</h4>
                    <p>{role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </section>
  );
};

export default Testimonials;