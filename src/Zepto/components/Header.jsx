import { Link, NavLink } from 'react-router-dom';

/**
 * Header Component
 * Main navigation header with logo, navigation links, search, and actions
 * Uses React Router NavLink for active state styling
 * Follows BEM naming convention
 */
const Header = () => {
  return (
    <header className="header">
      {/* Logo Section */}
      <div className="header__logo-section">
        <Link to="/" className="header__logo-link">
          <img
            src="https://tinyurl.com/2r8am4pz"
            alt="Zepto Logo"
            className="header__logo"
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="header__nav" aria-label="Main navigation">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <NavLink
              to="/men"
              className={({ isActive }) =>
                isActive ? 'header__nav-link header__nav-item--active' : 'header__nav-link'
              }
            >
              Men
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink
              to="/women"
              className={({ isActive }) =>
                isActive ? 'header__nav-link header__nav-item--active' : 'header__nav-link'
              }
            >
              Women
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink
              to="/kids"
              className={({ isActive }) =>
                isActive ? 'header__nav-link header__nav-item--active' : 'header__nav-link'
              }
            >
              Kids
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink
              to="/rockers"
              className={({ isActive }) =>
                isActive ? 'header__nav-link header__nav-item--active' : 'header__nav-link'
              }
            >
              Rockers
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Search Box */}
      <div className="header__search">
        <input
          type="text"
          className="header__search-input"
          placeholder="Search products..."
          aria-label="Search products"
        />
        <button className="btn btn--primary" type="button">
          Search
        </button>
      </div>

      {/* Right Side Buttons */}
      <div className="header__actions">
        <Link to="/signup" className="header__signup-link">
          Sign Up
        </Link>
        <button className="btn btn--dark" type="button">
          Cart
        </button>
      </div>
    </header>
  );
};

export default Header;
