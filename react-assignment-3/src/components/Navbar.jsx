function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        Sweet<span>Cafe</span>
      </div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#menu">Menu</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;