function Navbar() {
  return (
    <nav className="navbar w-full flex items-center justify-between p-2 bg-gray-800 text-white">
      <div className="logo text-1xl font-bold">
        <p>Tahira Inam</p>
      </div>
      <div className="nav-links">
        <ul>
          <li><a href="#home"> Home </a></li>
          <li><a href="#about"> About </a></li>
          <li><a href="#projects"> Projects </a></li>
        </ul>
      </div>
      <div className="social-media flex space-x-4 text-1xl">
        <ul>
          <li><a href="https://www.linkedin.com/in/tahirainam" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a></li>
          <li><a href="https://github.com/tahirainam" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a></li>
          <li><a href="https://medium.com/tahirainam" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-medium"></i></a></li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
