function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav">
        <ul>
          <li><a href="#home"> home </a></li>
          <li><a href="#about"> about </a></li>
          <li><a href="#projects"> projects </a></li>
          <li>
            <a 
              href="path_to_your_resume.pdf" 
              download="Your_Name_Resume.pdf" 
              className="btn"
            >
              resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
