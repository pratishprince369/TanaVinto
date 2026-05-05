import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PrideSection from './components/PrideSection';
import CardGrid from './components/CardGrid';
import RestaurantSlider from './components/RestaurantSlider';
import ExclusivelyForYou from './components/ExclusivelyForYou';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch('/src/content.json')
      .then(res => res.json())
      .then(data => setContent(data))
      .catch(err => console.error('Error loading content:', err));
  }, []);

  if (!content) return <div>Loading...</div>;

  return (
    <div className="app">
      <Navbar data={content.navbar} />
      <Hero data={content.hero} />
      <PrideSection data={content.prideSection} />
      
      <section className="section bg-color-alt">
        <CardGrid title="DESTINATIONS" items={content.destinations} linkText="View All Destinations" />
      </section>

      <ExclusivelyForYou data={content.exclusive} />

      <section className="section bg-color-alt">
        <CardGrid title="EXPLORE MORE" items={content.explore} linkText="View All" />
      </section>

      <RestaurantSlider data={content.restaurants} />

      <section className="section bg-color-alt">
        <CardGrid title="EVENTS AND CONFERENCES" items={content.events} linkText="View All" />
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title" style={{fontFamily: 'var(--font-heading)'}}>{content.wellness.title}</h2>
            <a href="#" className="view-all-link">Explore</a>
          </div>
          <div style={{ width: '100%', height: '500px', overflow: 'hidden' }}>
            <img src={content.wellness.image} alt="Wellness" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      <Footer data={content.footer} />
    </div>
  );
}

export default App;
