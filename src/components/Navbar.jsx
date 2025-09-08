function Navbar() {
  return (
    <nav className="mx-auto my-6 flex items-center justify-between bg-gray-900 text-white px-6 py-3 rounded-lg max-w-4xl text-sm">
      
      {/* Left side: Logo + Links */}
      <div className="flex items-center space-x-8">
        {/* Logo */}
        <p className="font-semibold hover:text-indigo-400 transition-colors cursor-pointer">
          Tahira Inam
        </p>

        {/* Links */}
        <ul className="flex space-x-6 font-normal">
          <li>
            <a href="#home" className="hover:text-indigo-400 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-indigo-400 transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-indigo-400 transition-colors">
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
          className="hover:text-blue-400 transition-colors"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/tahirainam"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-colors"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://medium.com/tahirainam"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400 transition-colors"
        >
          <i className="fa-brands fa-medium"></i>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
