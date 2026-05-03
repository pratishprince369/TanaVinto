import React from 'react';
import './PrideSection.css';

const PrideSection = () => {
  return (
    <section className="section bg-color">
      <div className="container text-center">
        <div className="pride-header">
          <h2 className="pride-title">
            INDIA'S PRIDE. WORLD'S STRONGEST.
          </h2>
          <p className="pride-subtitle">
            Taj is the strongest hotel brand in the world
          </p>
        </div>
        
        <div className="pride-image-container">
          <img 
            src="/images/udaipur.png" 
            alt="Umaid Bhawan Palace" 
            className="pride-image"
          />
        </div>
      </div>
    </section>
  );
};

export default PrideSection;
