import React from 'react';
import { Mail, MapPin, DollarSign, Headphones, Star } from 'lucide-react';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="container">
        <div className="topbar-content">
          <div className="topbar-left">
            <div className="topbar-item">
              <Mail size={16} />
              <span>info@example.com</span>
            </div>
            <div className="topbar-item">
              <MapPin size={16} />
              <span>4648 Rocky, New York</span>
            </div>
          </div>
          <div className="topbar-right">
            <a href="#pricing" className="topbar-link">
              <DollarSign size={16} />
              <span>Pricing</span>
            </a>
            <a href="#support" className="topbar-link">
              <Headphones size={16} />
              <span>Support</span>
            </a>
            <a href="#reviews" className="topbar-link">
              <Star size={16} />
              <span>Reviews</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;