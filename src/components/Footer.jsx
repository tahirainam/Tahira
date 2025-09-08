function Footer() {
  return (
    <div className="footer">
      <footer>
        <p>&copy; 2023–{new Date().getFullYear()} ✦ Tahira Inam ✦</p>
        <div className="social-icons">
          <a href="https://github.com/Inahira" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          <a href="mailto:contact.inahira@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope"></i></a>
          <a href="https://linkedin.com/in/Inahira_" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
