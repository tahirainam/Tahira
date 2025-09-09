function Home() {
  return (
    <section
      className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12 py-12"
      id="home"
    >
      <div className="max-w-5xl mx-auto">
        {/* Intro */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-snug">
          Hi, It's <span className="text-gray-900">Tahira Inam</span>
        </h1>

        <p className="mb-2 text-base sm:text-lg md:text-xl text-gray-700">
          At times, I'm involved in creating stuff.
        </p>

        <p className="text-sm sm:text-base md:text-lg text-gray-600" id="para">
          I'm a student <strong>(BS Software Engineering)</strong> based in Sialkot. <br />
          I have deep interest in <strong>front-end development</strong>. <br />
          Ready to take any challenge!
        </p>

        {/* Button */}
        <div className="mt-8 mb-12">
          <a
            href="mailto:tahirainam1@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-black px-4 sm:px-6 py-2 sm:py-3 border border-black hover:bg-gray-100 hover:text-gray-800 rounded-lg text-base sm:text-lg font-medium transition"
          >
            <i className="fas fa-envelope mr-2"></i> Say hi
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
