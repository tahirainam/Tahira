function Navbar() {
  return (
    <nav className="max-w-5xl mt-0 mx-auto px-3 fixed w-full bg-white border border-black text-black py-4 sm:visibility-hidden shadow-sm z-50">
      <div className="flex items-center justify-between px-6 text-sm">
        {/* Left side: Logo + Links */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <p className="font-semibold text-xl hover:text-gray-700 transition-colors cursor-pointer">
            tahirainam
          </p>

          {/* Links */}
          <ul className="flex text-gray-700 space-x-6 font-normal ">
            <li>
              <a
                href="#home"
                className="hover:text-black transition-colors hover:underline decoration-2 underline-offset-4"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-black transition-colors hover:underline decoration-2 underline-offset-4"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-black transition-colors hover:underline decoration-2 underline-offset-4"
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
