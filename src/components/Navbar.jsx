import { useState, useEffect } from 'react';
import { Menu, Search, User, Globe } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ data }) => {
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
            <img src={data.logo} alt="Logo" className="logo-img" />
          </div>
          <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            {data.links.map((link, i) => (
              <a key={i} href={link.href}>{link.label}</a>
            ))}
          </div>
        </div>

        <div className="navbar-right">
          <button className="btn btn-primary login-btn" style={{ fontSize: '0.75rem', padding: '0.6rem 1.5rem', fontWeight: 600 }}>
            {data.button.label}
          </button>
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
