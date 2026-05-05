import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Destinations.css';

const destinations = [
  {
    id: 1,
    title: 'London',
    image: '/images/london.webp',
    hotels: 2,
    description: 'Experience British elegance with Taj luxury.'
  },
  {
    id: 2,
    title: 'Udaipur',
    image: '/images/udaipur.webp',
    hotels: 4,
    description: 'Palaces that float on tranquil waters.'
  },
  {
    id: 3,
    title: 'Goa',
    image: '/images/goa.webp',
    hotels: 5,
    description: 'Sun, sand, and signature Taj hospitality.'
  }
];

const Destinations = () => {
  return (
    <section className="section bg-color-alt">
      <div className="container">
        <h2 className="section-title">Iconic Destinations</h2>
        
        <div className="destinations-grid">
          {destinations.map((dest, index) => (
            <motion.div 
              key={dest.id} 
              className="destination-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="card-image-wrapper">
                <img src={dest.image} alt={dest.title} className="card-image" />
                <div className="card-overlay">
                  <div className="card-content">
                    <h3>{dest.title}</h3>
                    <p>{dest.hotels} Hotels</p>
                    <div className="card-hover-content">
                      <p className="card-desc">{dest.description}</p>
                      <button className="explore-btn">
                        Explore <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: '3rem' }}>
          <button className="btn btn-outline">VIEW ALL DESTINATIONS</button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
