import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import './Hero.css';

const Hero = ({ data }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!data.images || data.images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % data.images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [data.images]);

  return (
    <div className="hero-section">
      <div className="hero-background">
        {data.images && data.images.map((img, index) => (
          <img 
            key={index}
            src={img} 
            alt={`Hero ${index}`} 
            className={`hero-image ${index === currentImageIndex ? 'active' : ''}`}
            style={{ 
              opacity: index === currentImageIndex ? 1 : 0,
              transition: 'opacity 1.5s ease-in-out',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        ))}
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content" style={{ position: 'relative', zIndex: 5, textAlign: 'center', color: 'white', paddingTop: '20vh' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '4rem', marginBottom: '1rem', color: 'white' }}>{data.title}</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', color: 'white' }}>{data.subtitle}</p>
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
