function About() {
  return (
    <section
      className="w-full min-h-screen flex flex-col items-center justify-center text-center text-black px-4 sm:px-6 md:px-12 py-12"
      id="about"
    >
      {/* About Me */}
      <div className="max-w-3xl mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
          About Me
        </h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
          Hi, I’m Tahira Inam. I’m a <span className="text-black">Software Engineering student</span>, learning my way through front-end, back-end, and a bit of creative coding. Along the way, I’ve done <span className="text-black">remote internships</span>, built small projects, and tried things just to see how they work.
        </p>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
          Right now, I’m focused on <span className="text-black">growing my skills</span> and becoming the kind of developer who builds things that are simple, useful, and a little creative.
        </p>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
         <br />Outside of coding, I spend time sketching and exploring new ideas.
        </p>
      </div>

      {/* Skills Section */}
      <div className="max-w-3xl mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold mb-3">
          Languages & Tools
        </h2>
        <p className="text-sm sm:text-base mb-6 text-gray-600">
          Here are some technologies I’ve been working with:
        </p>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {[
            "JavaScript",
            "React.js",
            "Three.js",
            "HTML5",
            "CSS3",
            "Python",
            "Tailwind CSS",
            
            "C++",
            "Git",
            "GitHub",
            "VS Code",
            
          ].map((skill) => (
            <span
              key={skill}
              className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-white border border-gray-400 hover:border-black transition"
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
