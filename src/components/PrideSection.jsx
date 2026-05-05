import React from 'react';
import './PrideSection.css';

const PrideSection = ({ data }) => {
  return (
    <section className="section bg-color">
      <div className="container text-center">
        <div className="pride-header">
          <h2 className="pride-title">
            {data.title}
          </h2>
          <p className="pride-subtitle">
            {data.subtitle}
          </p>
        </div>
        
        <div className="pride-image-container">
          {data.mediaType === 'video' && data.video ? (
            <video 
              src={data.video} 
              className="pride-image" 
              autoPlay 
              loop 
              muted 
              playsInline
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          ) : (
            <img 
              src={data.image} 
              alt="Pride Image" 
              className="pride-image"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default PrideSection;
