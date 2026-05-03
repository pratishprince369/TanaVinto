import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PrideSection from './components/PrideSection';
import CardGrid from './components/CardGrid';
import Offers from './components/Offers';
import RestaurantSlider from './components/RestaurantSlider';
import ExclusivelyForYou from './components/ExclusivelyForYou';
import Footer from './components/Footer';
import './index.css';

function App() {
  const destinations = [
    { id: 1, title: 'Taj Exotica Resort & Spa', subtitle: 'Goa', image: '/images/goa.png' },
    { id: 2, title: 'Taj Palace, New Delhi', subtitle: 'New Delhi', image: '/images/udaipur.png' },
    { id: 3, title: 'Taj Lands End', subtitle: 'Mumbai', image: '/images/london.png' }
  ];

  const explore = [
    { id: 1, title: 'Taj Holiday Village', subtitle: 'Goa', image: '/images/goa.png' },
    { id: 2, title: 'Rambagh Palace', subtitle: 'Jaipur', image: '/images/udaipur.png' },
    { id: 3, title: 'Taj Mahal Tower', subtitle: 'Mumbai', image: '/images/london.png' }
  ];

  const events = [
    { id: 1, title: 'Meetings', subtitle: 'Corporate events', image: '/images/london.png' },
    { id: 2, title: 'Social', subtitle: 'Gatherings', image: '/images/udaipur.png' },
    { id: 3, title: 'Weddings', subtitle: 'Make it memorable', image: '/images/goa.png' }
  ];

  const restaurants = [
    { id: 1, title: 'Shamiana', subtitle: 'International', image: '/images/london.png' },
    { id: 2, title: 'Wasabi By Morimoto', subtitle: 'Japanese', image: '/images/udaipur.png' },
    { id: 3, title: 'House of Ming', subtitle: 'Chinese', image: '/images/goa.png' }
  ];

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <PrideSection />
      
      <section className="section bg-color-alt">
        <CardGrid title="DESTINATIONS" items={destinations} linkText="View All Destinations" />
      </section>

      <Offers />

      <ExclusivelyForYou />

      <section className="section bg-color-alt">
        <CardGrid title="EXPLORE MORE" items={explore} linkText="View All" />
      </section>

      <RestaurantSlider />

      <section className="section bg-color-alt">
        <CardGrid title="EVENTS AND CONFERENCES" items={events} linkText="View All" />
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title" style={{fontFamily: 'var(--font-heading)'}}>J WELLNESS CIRCLE</h2>
            <a href="#" className="view-all-link">Explore</a>
          </div>
          <div style={{ width: '100%', height: '500px', overflow: 'hidden' }}>
            <img src="/images/hero.png" alt="Wellness" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
