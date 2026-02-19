import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="head">

      {/* Logo Section */}
      <div className="left">
        <img
          src="https://tinyurl.com/2r8am4pz"
          alt="Logo"
          className="logo"
        />
      </div>

      {/* Navigation Links */}
      <nav className="center">
        <ul className="nav-links">
          <li><Link to="/men">Men !x</Link></li>
          <li><Link to="/women">Women !x</Link></li>
          <li><Link to="/kids">Kids !x</Link></li>
          <li><Link to="/rockers">Rockers !x</Link></li>
        </ul>
      </nav>

      {/* Search Box */}
      <div className="search-box">
        <input
          type="text"
          className="search"
          placeholder="Search products..."
        />
        <button className="btn">Search</button>
      </div>

      {/* Right Side Buttons */}
      <div className="right">
        <Link to="/signup" className="signup-text">
          Sign Up
        </Link>
        <button className="btn1">Cart</button>
      </div>

    </header>
  );
};

export default Header;
