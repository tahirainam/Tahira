import Earth from "./earth";  
function Home() {
  return (
    <>
    <section
      className="section w-full min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-1"
      id="home"
      >
        <Earth />
      <div className="max-w-5xl mx-auto">
        {/* Intro */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl mb-4 leading-snug max-w-[90%] sm:max-w-[80%]">
  Hey, I'm <span className="text-gray-900 font-bold">Tahira Inam</span>.
</h1>

<h2 className="mb-3 text-xl sm:text-3xl md:text-3xl lg:text-3xl text-gray-700 font-light max-w-[90%] sm:max-w-[75%]" id="subheading">
  I like making code look good and work even better.
</h2>

<p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-[95%] sm:max-w-[70%]" id="para">
  I’m a front-end developer meta certified, and a software engineering student exploring back-end, and creative coding.
  I’ve built projects that mix design with logic, and I keep learning with every experiment.
</p>


        {/* Button */}
        <div className="mt-8 mb-12">
          <a
            href="mailto:tahirainam1@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-black px-4 sm:px-6 py-2 sm:py-3 border border-gray-400 bg-white hover:border-black text-base sm:text-lg font-medium transition"
          >
            <i className="fas fa-envelope mr-2"></i> say hi
          </a>
        </div>
      </div>
      </section>
      </>
  );
}

export default Home;
