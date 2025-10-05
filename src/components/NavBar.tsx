function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black shadow-sm">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand fw-bold" href="#">MyLogo</a>
    
        {/* Hamburger toggle (มือถือ) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* เมนู */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-3">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
