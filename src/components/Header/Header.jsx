import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import "./Header.css";
import logo from "../../assets/logo-dark.png";  

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleDropdownEnter = (dropdownName) => {
    setActiveDropdown(dropdownName);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const servicesMenu = [
    { name: "Financial Consulting", href: "#financial", icon: "💼" },
    { name: "Business Strategy", href: "#strategy", icon: "🎯" },
    { name: "Market Analysis", href: "#analysis", icon: "📊" },
    { name: "Digital Transformation", href: "#digital", icon: "🚀" },
  ];

  const pagesMenu = [
    { name: "About Us", href: "#about", icon: "ℹ️" },
    { name: "Our Team", href: "#team", icon: "👥" },
    { name: "FAQ", href: "#faq", icon: "❓" },
    { name: "Pricing", href: "#pricing", icon: "💰" },
    { name: "Testimonials", href: "#testimonials", icon: "⭐" },
  ];

  return (
    <>
      <div className="topbar">
        <div className="topbar-left">
          <FaEnvelope /> info@example.com
        </div>
        <div className="topbar-right">
          <FaMapMarkerAlt /> 4648 Rocky, New York
        </div>
      </div>
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="container header-container">
          <div className="logo">
            <img src={logo} alt="Techtologo" />
            
          </div>
          <nav className="nav desktop-nav">
            <ul>
              <li>
                <a href="#home" className="nav-link active">Home</a>
              </li>
              
              <li
                className="has-dropdown"
                onMouseEnter={() => handleDropdownEnter('services')}
                onMouseLeave={handleDropdownLeave}
              >
                <a href="#services" className="nav-link">
                  Services <FaChevronDown className="dropdown-icon" />
                </a>
                <AnimatePresence>
                  {activeDropdown === 'services' && (
                    <motion.div
                      className="dropdown mega-dropdown"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="dropdown-content">
                        {servicesMenu.map((item, index) => (
                          <motion.a
                            key={index}
                            href={item.href}
                            className="dropdown-item"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <span className="item-icon">{item.icon}</span>
                            <span className="item-text">{item.name}</span>
                          </motion.a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              <li
                className="has-dropdown"
                onMouseEnter={() => handleDropdownEnter('pages')}
                onMouseLeave={handleDropdownLeave}
              >
                <a href="#pages" className="nav-link">
                  Pages <FaChevronDown className="dropdown-icon" />
                </a>
                <AnimatePresence>
                  {activeDropdown === 'pages' && (
                    <motion.div
                      className="dropdown"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="dropdown-content">
                        {pagesMenu.map((item, index) => (
                          <motion.a
                            key={index}
                            href={item.href}
                            className="dropdown-item"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <span className="item-icon">{item.icon}</span>
                            <span className="item-text">{item.name}</span>
                          </motion.a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              <li><a href="#blog" className="nav-link">Blog</a></li>
              <li><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
          </nav>
          <div className="header-right">
            <div className="header-contact">
              <FaPhoneAlt /> +990 123 456 789
            </div>
            <button 
              className="mobile-menu-toggle" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                className="mobile-menu-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeMenu}
              />
              <motion.nav
                className="mobile-nav"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
              >
                <ul>
                  <li><a href="#home" onClick={closeMenu}>Home</a></li>
                  <li><a href="#about" onClick={closeMenu}>About Us</a></li>
                  <li><a href="#services" onClick={closeMenu}>Services</a></li>
                  <li><a href="#blog" onClick={closeMenu}>Blog</a></li>
                  <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                </ul>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;