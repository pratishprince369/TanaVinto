import { Globe, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col brand-col">
            <h2 className="footer-logo" style={{fontFamily: 'var(--font-heading)'}}>TAJ</h2>
            <p className="footer-desc">
              Experience the pinnacle of luxury, heritage, and unparalleled service. 
              Taj Hotels resorts and palaces span the globe, offering an authentic 
              and world-class hospitality experience.
            </p>
            <div className="social-links">
              <a href="#"><Globe size={20} /></a>
              <a href="#"><Mail size={20} /></a>
              <a href="#"><Phone size={20} /></a>
              <a href="#"><MapPin size={20} /></a>
            </div>
          </div>
          
          <div className="footer-col">
            <h3>Destinations</h3>
            <ul>
              <li><a href="#">India</a></li>
              <li><a href="#">United Kingdom</a></li>
              <li><a href="#">United States</a></li>
              <li><a href="#">Maldives</a></li>
              <li><a href="#">Dubai</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3>Company</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press Room</a></li>
              <li><a href="#">Sustainability</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3>Newsletter</h3>
            <p className="newsletter-desc">Subscribe to our newsletter to receive exclusive offers and updates.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Email Address" />
              <button className="btn btn-primary">SUBSCRIBE</button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} The Indian Hotels Company Limited. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
