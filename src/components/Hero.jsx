import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-background">
        <img src="/images/hero.png" alt="Taj Palace" className="hero-image" />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-bottom-btn">
        <div className="gold-circle">
          <ChevronDown size={20} color="white" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
