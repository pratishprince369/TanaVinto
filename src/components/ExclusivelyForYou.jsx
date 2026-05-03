import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './ExclusivelyForYou.css';

const offers = [
  {
    id: 1,
    title: 'TAJ HOLIDAYS',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=800',
    desc: 'Experience the magic of Taj with curated holidays designed for you.'
  },
  {
    id: 2,
    title: 'WOYAGE - DAYCATIONS',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800',
    desc: 'Replenish your spirit as you escape into your very own world of serenity and indulge in a day of blissful pampering with...'
  },
  {
    id: 3,
    title: 'NEW BEGINNINGS',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800',
    desc: 'Celebrate your special moments with our exclusive new beginnings package.'
  }
];

const ExclusivelyForYou = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === offers.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? offers.length - 1 : prev - 1));
  };

  return (
    <section className="exclusive-section">
      {/* Background Image with blur */}
      <div 
        className="exclusive-bg-image" 
        style={{ backgroundImage: `url(${offers[activeIndex].image})` }}
      ></div>
      <div className="exclusive-bg-overlay"></div>

      <div className="container exclusive-container">
        {/* Header Area */}
        <div className="exclusive-header">
          <div className="exclusive-title-container">
            <div className="exclusive-line"></div>
            <h2 className="exclusive-title">EXCLUSIVELY</h2>
            <h2 className="exclusive-subtitle">FOR YOU</h2>
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
            {offers.map((offer, index) => {
              let position = 'next';
              if (index === activeIndex) position = 'active';
              if (index === activeIndex - 1 || (activeIndex === 0 && index === offers.length - 1)) position = 'prev';

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
