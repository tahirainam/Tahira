function About() {
  return (
    <section
      className="section w-full min-h-screen flex flex-col items-center justify-center text-center text-black px-4 sm:px-6 md:px-12 py-12"
      id="about"
    >
      {/* About Me */}
      <div className="text-left max-w-3xl mb-12">
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
          A little bit about me
        </h2>
        <div className="flex flex-row gap-1">
        <div className="text-left pr-6">
          <p className="text-sm mb-2 sm:text-base md:text-lg leading-relaxed text-gray-700">
           I’m currently pursuing a BS in Software Engineering, finding my way through front-end, back-end, and a little creative experimenting too. Along the way, I’ve tried few remote internships.
         </p>
         <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
           Right now, I’m focused on building things that are simple, actually useful, and a little creative while studying artificial intelligence.
         </p>
         <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
         <br />Outside of coding, you’ll usually find me sketching or chasing new ideas :')
          </p>
          </div>
          <div className="w-1/2 p-4 flex flex-col border border-gray-500 outline outline-1 outline-gray-300 p-4">
            <h2 className="font-bold mb-4">CERTIFICATIONS</h2>
            <a href="https://www.coursera.org/account/accomplishments/professional-cert/004WQSTB7RML" className="text-sm underline hover:no-underline mb-3">Meta Front End Developer</a>
            <a href="https://www.coursera.org/account/accomplishments/records/4YUGC76J5W0C" className="text-sm underline hover:no-underline mb-3">UI/UX Design</a>
            <a href="https://www.coursera.org/account/accomplishments/verify/MBN9BBX0VBT0" className="text-sm underline hover:no-underline mb-3">Detecting COVID-19 with Chest X-Ray using PyTorch</a>
            
          </div>
          </div>
      </div>
      

      {/* Skills Section */}
      <div className="text-left coding max-w-3xl mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold mb-3">
          What I’ve been using
        </h2>
        <p className="text-sm sm:text-base mb-6 text-gray-600">
          Here are some technologies I’ve been working with...
        </p>

        <div className="section flex flex-wrap justify-left gap-2 sm:gap-3">
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
