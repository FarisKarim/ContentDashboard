import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light-purple px-3">
      <a className="navbar-brand navbar-brand-animated" href="/">
        Dashboard Project
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item me-2">
            <a className="btn custom-btn" href="/">
              Home
            </a>
          </li>
          <li className="nav-item me-2">
            <a className="btn custom-btn" href="/login">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a className="btn custom-btn" href="/signup">
              Signup
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
