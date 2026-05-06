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
    fetch('/content.json')
      .then(res => res.json())
      .then(data => setContent(data))
      .catch(err => console.error("Error loading content:", err));
  }, []);

  if (!content) return <div className="loading">Loading...</div>;

  const slugify = (text) => {
    return text.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
  };

  return (
    <div className="app">
      <Navbar data={content.navbar} />
      <Hero data={content.hero} />
      <PrideSection data={content.prideSection} />
      
      <section id={slugify(content.destinations.title)} className="section bg-color-alt">
        <CardGrid title={content.destinations.title} items={content.destinations.items} linkText="View All Destinations" />
      </section>

      <div id={slugify(content.exclusive.title)}>
        <ExclusivelyForYou data={content.exclusive} />
      </div>

      <section id={slugify(content.explore.title)} className="section bg-color-alt">
        <CardGrid title={content.explore.title} items={content.explore.items} linkText="View All" />
      </section>

      <div id={slugify(content.restaurants.title)}>
        <RestaurantSlider data={content.restaurants} />
      </div>

      <section id={slugify(content.events.title)} className="section bg-color-alt">
        <CardGrid title={content.events.title} items={content.events.items} linkText="View All" />
      </section>

      <section id={slugify(content.wellness.title)} className="section">
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
