import React from 'react';
import { ArrowRight } from 'lucide-react';

const CardGrid = ({ title, items, linkText }) => {
  return (
    <div className="container">
      <div className="section-header">
        <h2 className="section-title" style={{fontFamily: 'var(--font-heading)'}}>{title}</h2>
        <a href="#" className="view-all-link">{linkText} <ArrowRight size={16} /></a>
      </div>
      
      <div className="card-grid">
        {items.map((item) => (
          <div key={item.id} className="card">
            <div className="card-image-container">
              <img src={item.image} alt={item.title} className="card-image" />
            </div>
            <div className="card-content">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-subtitle">{item.subtitle}</p>
              <a href="#" className="card-link">VIEW DETAILS</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
