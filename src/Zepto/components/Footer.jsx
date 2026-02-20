import { Link } from 'react-router-dom';
import { FaInstagram, FaYoutube, FaUsers } from 'react-icons/fa';

/**
 * Footer Component
 * Site footer with company info, newsletter signup, and social links
 * Uses React Router Link for internal navigation
 * Follows BEM naming convention
 */
const Footer = () => {
  return (
    <footer className="footer">
      {/* Left Section - Brand Info */}
      <div className="footer__section footer__section--left">
        <h2 className="footer__logo">About Us</h2>
        <p className="footer__location">
          California, Western United States
        </p>
      </div>

      {/* Center Section - Newsletter */}
      <div className="footer__section footer__section--center">
        <h3 className="footer__title">Newsletter</h3>
        <p className="footer__text">
          Subscribe to get updates about new collections and offers.
        </p>

        <div className="footer__newsletter">
          <input
            type="email"
            placeholder="Enter your Email"
            className="footer__newsletter-input"
            aria-label="Email for newsletter"
          />
          <button
            type="button"
            className="footer__newsletter-btn"
          >
            Subscribe
          </button>
        </div>
      </div>

      {/* Right Section - Social Links */}
      <div className="footer__section footer__section--right">
        <h3 className="footer__title">Social Media</h3>

        <ul className="footer__social-list">
          <li>
            <Link to="/community" className="footer__social-link">
              <span className="footer__social-icon">
                <FaUsers />
              </span>
              Community
            </Link>
          </li>
          <li>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
            >
              <span className="footer__social-icon">
                <FaInstagram />
              </span>
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
            >
              <span className="footer__social-icon">
                <FaYoutube />
              </span>
              YouTube
            </a>
          </li>
        </ul>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <p>&copy; 2026 Zepto Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
