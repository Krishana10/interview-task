import React from "react";
import Slider from "react-slick";
import { FaRegCalendarAlt, FaRegFolder } from "react-icons/fa";
import "./NewsBlog.css";
import new1 from "../../assets/sl-b-b2-666x450.jpg";
import new2 from "../../assets/sl-b-b6-666x450.jpg";
import new3 from "../../assets/sl-b-b3-666x450.jpg";  
const news = [
  {
    id: 1,
    category: "Uncategorized",
    title: "Mastering The Art Of Strategic Business Planning",
    date: "Feb 3, 2025",
    author: "Techtо",
    img: {new1},
  },
  {
    id: 2,
    category: "Consulting",
    title: "Budgeting For Sustainable Business Growth",
    date: "Jan 21, 2025",
    author: "Techtо",
    img: {new2},
  },
  {
    id: 3,
    category: "Consulting",
    title: "How To Validate Your Creative Business Idea",
    date: "Jan 21, 2025",
    author: "Techtо",
    img: {new3},
  },
];

const NewsBlog = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: Math.min(3, news.length),
    slidesToScroll: 1,
    autoplay: false,
    adaptiveHeight: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 900,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="news-blog-section" aria-label="Featured news and insights">
      <div className="news-header text-center">
        <h2>
          Featured News and <span className="italic">Insights</span>
        </h2>
        <p className="news-subtitle">
          Available but the majority have suffered alteration in some form by injected humor, or randomized words which
        </p>
      </div>
      <Slider {...settings} className="news-slider">
        {news.map(({ id, category, title, date, author, img }) => (
          <article key={id} className="news-card">
            <div className="news-img">
              <img src={new1} alt={title} />
            </div>
            <div className="news-content">
              <div className="news-category">
                <FaRegFolder /> {category}
              </div>
              <h3>{title}</h3>
              <div className="news-meta">
                <span>
                  <FaRegCalendarAlt /> {date}
                </span>
                <span>{author}</span>
              </div>
            </div>
          </article>
        ))}
      </Slider>
    </section>
  );
};

export default NewsBlog;