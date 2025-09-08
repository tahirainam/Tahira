function About() {
  return (
    <section className="about" id="about">
      <div className="about-para">
        <h2 className="heading-h"><b> About me</b></h2>
        <p className="section-paragraph-2">
          Hi there, it's Inahira, a <strong>Software Engineering</strong> student
          with a knack for solving problems. I love to spend time on solving <strong>Leetcode
          Problems</strong>. <br />
          Also I have 1+ year of experience in <strong>Front end development</strong>. 
          When I'm not creating stuff or finding solutions, I love exploring 
          <strong> Astronomy</strong>.
        </p>
      </div>

      <div className="about-container">
        <hr color="orange" />
        <div className="education">
          <img src="USKT.jpg" alt="University of Sialkot" />
        </div>
      </div>

      <div className="skill-section">
        <div className="skills-writting">
          <h2 className="section-heading"><b>Languages & Tools</b></h2>
          <p className="skills-p">Here are some languages and tools I've worked with.</p>
        </div>
        <div className="tag-cloud">
          <a href="#" className="tag">HTML5</a>
          <a href="#" className="tag">CSS3</a>
          <a href="#" className="tag">JavaScript ES6</a>
          <a href="#" className="tag">Bootstrap</a>
          <a href="#" className="tag">WordPress</a>
          <a href="#" className="tag">Responsive Web Design</a>
          <a href="#" className="tag">Python</a>
          <a href="#" className="tag">C++</a>
          <a href="#" className="tag">Git</a>
          <a href="#" className="tag">Github</a>
          <a href="#" className="tag">VS code</a>
        </div>
      </div>
    </section>
  );
}
export default About;
