const Header = () => {
  return (
    <header className="head">
        <link
          href="https://fonts.googleapis.com/css2?family=Bangers&display=swap"
          rel="stylesheet"
        />


      {/* Left Logo Section */}
      <div className="left">
        <img
          src="https://tinyurl.com/2r8am4pz"
          alt="Logo"
          height="100px"
          width="100px"
        />
      </div>

      {/* Center Navigation Section */}
      <div className="center">
        <ul className="nav-links">
          <li>Mens !x</li>
          <li>Womens !x</li>
          <li>Kids !x</li>
          <li>Rocker"s !x</li>
        </ul>
      </div>


      {/* Search Section */}
      <div className="search-box">
        <input
          className="search"
          placeholder="What are you looking for CAMP !"
        />
        <button className="btn">Search</button>
      </div>

      {/* Right Button Section */}
      <div className="right">
        <div className="signup-text">Sign/up</div>
        <button className="btn1">Add !</button>
      </div>

    </header>
  );
};

export default Header;
