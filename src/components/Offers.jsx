import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Offers.css';



const Offers = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const getPrevIndex = () => (currentIndex - 1 + data.length) % data.length;
  const getNextIndex = () => (currentIndex + 1) % data.length;

  return (
    <section className="offers-section">
      {/* Blurred Background */}
      <div 
        className="offers-bg" 
        style={{ backgroundImage: `url(${data[currentIndex].image})` }}
      >
        <div className="offers-bg-overlay"></div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="section-header offers-header">
          <div>
            <h2 className="section-title" style={{fontFamily: 'var(--font-heading)', color: 'white'}}>
              EXCLUSIVELY FOR YOU
            </h2>
          </div>
          <a href="#" className="view-all-link" style={{color: 'white'}}>View All Offers <ArrowRight size={16} /></a>
        </div>
        
        <div className="slider-container">
          
          {/* Left Slide (Previous) */}
          <div className="side-slide left-slide" onClick={prevSlide}>
            <div className="side-nav">
              <div className="nav-circle"><ChevronLeft size={20} color="white" /></div>
              <span className="nav-label">{data[getPrevIndex()].label}</span>
            </div>
          </div>

          {/* Center Slide (Current) */}
          <div className="center-slide">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="offer-card"
              >
                <div className="offer-image-wrapper">
                  <img src={data[currentIndex].image} alt={data[currentIndex].title} className="offer-image" />
                </div>
                <div className="offer-content">
                  <p className="offer-label">{data[currentIndex].label}</p>
                  <h3 className="offer-title">{data[currentIndex].title}</h3>
                  <p className="offer-subtitle">{data[currentIndex].subtitle}</p>
                  <a href="#" className="offer-link">EXPLORE</a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Slide (Next) */}
          <div className="side-slide right-slide" onClick={nextSlide}>
            <div className="side-nav right-nav">
              <span className="nav-label">{data[getNextIndex()].label}</span>
              <div className="nav-circle"><ChevronRight size={20} color="white" /></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Offers;
