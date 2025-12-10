import React from "react";
import "./Brands.css";
import dropbox from "../../assets/prtnr-1.png";

const brands = [
  { id: 1, src:{dropbox}  ,alt: "Dropbox" },
  { id: 2, src:{dropbox}  ,alt: "Airtable" },
  { id: 3, src:{dropbox}  ,alt: "Contentful" },
  { id: 4, src:{dropbox}  ,alt: "Razorpay" },
  { id: 5, src:{dropbox}  ,alt: "Airtable" },
];

const Brands = () => {
  return (
    <section className="brands-section" aria-label="Brands">
      <div className="brands-container">
        {brands.map(({ id, src, alt }) => (
          <div key={id} className="brand-item" tabIndex="0" aria-label={alt}>
            <img src={dropbox} alt={alt} loading="lazy" />
          </div>
        ))}
      </div>
      
    </section>
    
  );
};

export default Brands;