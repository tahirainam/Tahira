function About() {
  return (
    <section
      className="w-full h-screen flex flex-col items-center justify-center text-center text-black"
      id="about"
    >
      {/* About Me */}
      <div className="max-w-3xl mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          About
        </h2>
        <p className="text-base sm:text-lg leading-relaxed">
          Hi there, it's <span className="underline">Tahira Inam</span>, a{" "}
          <strong>Software Engineering</strong> student with a knack for solving problems.  
          I love to spend time solving <strong>Leetcode problems</strong>.  
          <br />
          With 1+ year of experience in{" "}
          <strong>Front-End Development</strong>, I enjoy creating clean and functional UIs.  
          When I’m not coding, I’m exploring <strong>Astronomy</strong>. ✨
        </p>
      </div>

      {/* Skills Section */}
      <div className=" max-w-3xl mb-12 px-4">
        <h2 className="text-2xl font-semibold mb-3">
          Languages & Tools
        </h2>
        <p className="mb-6">
          Here are some technologies I’ve worked with:
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {[
            "HTML5",
            "CSS3",
            "JavaScript ES6",
            "Bootstrap",
            "WordPress",
            "Responsive Web Design",
            "Python",
            "C++",
            "Git",
            "GitHub",
            "VS Code",
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 text-sm bg-gray-200 rounded-full border border-gray-700 hover:border-white transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
