
import { FaInstagram, FaYoutube, FaUsers } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      {/* ===== Left Section (Brand Info) ===== */}
      <div className="footer-left">
        <h2 className="footer-logo">About Us !</h2>
        <p className="footer-location">
          California, Western United States
        </p>
      </div>

      {/* ===== Center Section (Newsletter) ===== */}
      <div className="footer-center">
        <h3 className="footer-title">Newsletter</h3>
        <p className="footer-text">
          Subscribe to get updates about new collections and offers.
        </p>

        <div className="newsletter-box">
          <input type="email" placeholder="Enter your Email" />
          <button>Subscribe</button>
        </div>
      </div>

      {/* ===== Right Section (Social Links) ===== */}
      <div className="footer-right">
        <h3 className="footer-title">Social Media"s !</h3>

        <a href="">
          <FaUsers className="icon" /> Community
        </a>

        <a href="">
          <FaInstagram className="icon" /> Instagram
        </a>

        <a href="">
          <FaYoutube className="icon" /> YouTube
        </a>
      </div>

      {/* ===== Bottom Bar ===== */}
      <div className="footer-bottom">
        <p>© 2026 CAMP Store. All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;
