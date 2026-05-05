import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './ExclusivelyForYou.css';

const ExclusivelyForYou = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === data.items.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? data.items.length - 1 : prev - 1));
  };

  return (
    <section className="exclusive-section">
      {/* Background Image with blur */}
      <div 
        className="exclusive-bg-image" 
        style={{ backgroundImage: `url(${data.items[activeIndex].image})` }}
      ></div>
      <div className="exclusive-bg-overlay"></div>

      <div className="container exclusive-container">
        {/* Header Area */}
        <div className="exclusive-header">
          <div className="exclusive-title-container">
            <div className="exclusive-line"></div>
            <h2 className="exclusive-title">{data.title}</h2>
          </div>
          <div className="exclusive-text">
            Refinement and creativity intertwine with dreamlike destinations <br/>
            and soulful moments on each sojourn with Taj.
          </div>
        </div>

        {/* Carousel Area */}
        <div className="exclusive-carousel">
          <button className="carousel-btn prev" onClick={prevSlide}>
            <ChevronLeft size={20} strokeWidth={1.5} />
          </button>
          
          <div className="carousel-track">
            {data.items && data.items.map((offer, index) => {
              let position = 'next';
              if (index === activeIndex) position = 'active';
              if (index === activeIndex - 1 || (activeIndex === 0 && index === data.items.length - 1)) position = 'prev';

              return (
                <div className={`carousel-slide ${position}`} key={offer.id}>
                  {position === 'active' ? (
                    <div className="active-card">
                      <div className="active-card-img-wrapper">
                         <img src={offer.image} alt={offer.title} />
                      </div>
                      <div className="active-card-content">
                        <h3>{offer.title}</h3>
                        <p>{offer.desc}</p>
                        <a href="#" className="more-link">MORE &gt;</a>
                      </div>
                    </div>
                  ) : (
                    <div className="inactive-card" onClick={() => setActiveIndex(index)}>
                      <div className="inactive-text">{offer.title}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <button className="carousel-btn next" onClick={nextSlide}>
            <ChevronRight size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExclusivelyForYou;
