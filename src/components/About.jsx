function About() {
  return (
    <section
      className="w-full min-h-screen flex flex-col items-center justify-center text-center text-black px-4 sm:px-6 md:px-12 py-12"
      id="about"
    >
      {/* About Me */}
      <div className="max-w-3xl mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
          About
        </h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
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
      <div className="max-w-3xl mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold mb-3">
          Languages & Tools
        </h2>
        <p className="text-sm sm:text-base mb-6 text-gray-600">
          Here are some technologies I’ve worked with:
        </p>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
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
              className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-gray-200 rounded-full border border-gray-400 hover:border-black transition"
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
