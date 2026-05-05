import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './RestaurantSlider.css';

const RestaurantSlider = ({ data }) => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.querySelector('.restaurant-card').offsetWidth;
      sliderRef.current.scrollBy({ left: -(cardWidth + 30), behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.querySelector('.restaurant-card').offsetWidth;
      sliderRef.current.scrollBy({ left: cardWidth + 30, behavior: 'smooth' });
    }
  };

  return (
    <section className="section bg-color">
      <div className="container">
        
        {/* Header Layout */}
        <div className="restaurant-header">
          <div className="restaurant-title-container">
            <span className="title-line"></span>
            <h2 className="restaurant-title">
              OUR LEGENDARY<br/>RESTAURANT BRANDS
            </h2>
          </div>
          <div className="restaurant-desc-container">
            <p>
              Step into the realm of our culinary legends where a symphony of
              flavours enchants your taste buds, ambience embraces you in a
              tapestry of elegance and the genuine warmth of our service leaves
              you feeling truly indulged.
            </p>
          </div>
        </div>

        {/* Slider Container */}
        <div className="restaurant-slider-wrapper">
          <button className="slider-btn prev-btn" onClick={scrollLeft}>
            <ChevronLeft size={24} color="#666" />
          </button>
          
          <div className="restaurant-slider" ref={sliderRef}>
            {data.map((restaurant) => (
              <div key={restaurant.id} className="restaurant-card">
                <div className="r-card-image-wrapper">
                  <img src={restaurant.image} alt={restaurant.title} />
                </div>
                <div className="r-card-content">
                  <h3>{restaurant.title}</h3>
                  <p>{restaurant.desc}</p>
                  <a href="#" className="r-card-link">MORE <ChevronRight size={14} style={{display: 'inline', verticalAlign: 'middle'}}/></a>
                </div>
              </div>
            ))}
          </div>

          <button className="slider-btn next-btn" onClick={scrollRight}>
            <ChevronRight size={24} color="#666" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default RestaurantSlider;
