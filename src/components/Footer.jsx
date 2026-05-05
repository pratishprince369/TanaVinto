import { Globe, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = ({ data }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col brand-col">
            <h2 className="footer-logo" style={{fontFamily: 'var(--font-heading)'}}>{data.logo}</h2>
            <p className="footer-desc">
              {data.description}
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
              {data.links.destinations.map((link, i) => (
                <li key={i}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>
          
          <div className="footer-col">
            <h3>Company</h3>
            <ul>
              {data.links.company.map((link, i) => (
                <li key={i}><a href="#">{link}</a></li>
              ))}
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
