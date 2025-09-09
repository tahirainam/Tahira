function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-50 text-black py-3 shadow-sm z-50">
      <div className="flex items-center justify-between px-6 text-sm">
        {/* Left side: Logo + Links */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <p className="font-semibold hover:text-gray-700 transition-colors cursor-pointer">
            Tahira Inam
          </p>

          {/* Links */}
          <ul className="flex text-gray-700 space-x-6 font-normal">
            <li>
              <a
                href="#home"
                className="hover:text-gray-700 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-gray-700 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-gray-700 transition-colors"
              >
                Projects
              </a>
            </li>
          </ul>
        </div>

        {/* Right side: Icons */}
        <div className="flex items-center space-x-4 text-base">
          <a
            href="https://www.linkedin.com/in/tahirainam"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 transition-colors"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/tahirainam"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 transition-colors"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://medium.com/tahirainam"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 transition-colors"
          >
            <i className="fa-brands fa-medium"></i>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
