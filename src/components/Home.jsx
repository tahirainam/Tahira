function Home() {
  return (
    <section className="home" id="home">
      <div className="intro">
        <h1 className="typing">
          Hey, It's <b>Tahira Inam</b> ... <span>|</span>
        </h1>
        <p className="section-paragraph">At times, i'm involved in creating stuff.</p>
        <p className="section-paragraph-2" id="para">
          I'm a student <strong>(BS Software Engineering)</strong> based in Sialkot. 
          I have deep interest in <strong>front-end development</strong>. 
          Ready to take any challenge!
        </p>
      </div>

      <div className="buttons">
        <button>
          <p>
            <a 
              href="mailto:contact.inahira@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className="fas fa-envelope"></i> Say hi
            </a>
          </p>
        </button>
      </div>
    </section>
  );
}
export default Home;
