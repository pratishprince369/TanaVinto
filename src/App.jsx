import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PrideSection from './components/PrideSection';
import CardGrid from './components/CardGrid';
import RestaurantSlider from './components/RestaurantSlider';
import ExclusivelyForYou from './components/ExclusivelyForYou';
import Footer from './components/Footer';
import './index.css';

import { db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';

import initialContent from './content.json';

function App() {
  const [content, setContent] = useState(initialContent);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const docRef = doc(db, 'content', 'website');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setContent(docSnap.data());
        } else {
          console.log('No such document in Firestore, using local fallback');
        }
      } catch (err) {
        console.error('Error fetching from Firebase:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchContent();
  }, []);

  if (loading || !content) return <div className="loading">Loading...</div>;

  return (
    <div className="app">
      <Navbar data={content.navbar} />
      <Hero data={content.hero} />
      <PrideSection data={content.prideSection} />
      
      <section className="section bg-color-alt">
        <CardGrid title={content.destinations.title} items={content.destinations.items} linkText="View All Destinations" />
      </section>

      <ExclusivelyForYou data={content.exclusive} />

      <section className="section bg-color-alt">
        <CardGrid title={content.explore.title} items={content.explore.items} linkText="View All" />
      </section>

      <RestaurantSlider data={content.restaurants} />

      <section className="section bg-color-alt">
        <CardGrid title={content.events.title} items={content.events.items} linkText="View All" />
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
