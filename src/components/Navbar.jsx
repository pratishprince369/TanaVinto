import { useState, useEffect } from 'react';
import { Menu, Search, User, Globe } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="navbar-logo">
            <img src="/images/TanaVinto-logo.png" alt="TanaVinto Villas" className="logo-img" />
          </div>
          <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <a href="#">DESTINATIONS</a>
            <a href="#">HOTELS</a>
            <a href="#">OFFERS</a>
            <a href="#">TAJ HOLIDAYS</a>
            <a href="#">DINING</a>
            <a href="#">J WELLNESS CIRCLE</a>
          </div>
        </div>

        <div className="navbar-right">
          <button className="btn btn-primary login-btn" style={{ fontSize: '0.75rem', padding: '0.6rem 1.5rem', fontWeight: 600 }}>Book a Resort</button>
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
