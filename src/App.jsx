import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Brands from "./components/Brands/Brands";
import Services from "./components/Services/Services";
import AboutCompany from "./components/AboutCompany/AboutCompany";
import Process from "./components/Process/Process";
import Testimonials from "./components/Testimonials/Testimonials";
import NewsBlog from "./components/NewsBlog/NewsBlog";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const App = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";

    // Handle anchor link clicks
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const id = target.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => {
      document.removeEventListener("click", handleAnchorClick);
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Brands />
        <Services />
        <AboutCompany />
        <Process />
        <Testimonials />
        <NewsBlog />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default App;