function Home() {
  return (
    <section
      className="w-full max-w-6xl mx-auto px-6 flex flex-col items-center justify-center text-center bg-gray-900 text-white"
      id="home"
    >
      {/* Intro */}
      <div className="intro max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Hi there, It's <span className="text-indigo-400">Tahira Inam</span>
        </h1>
        <p className="mb-2 text-lg">At times, I'm involved in creating stuff.</p>
        <p className="text-base sm:text-lg" id="para">
          I'm a student <strong>(BS Software Engineering)</strong> based in Sialkot. <br />
          I have deep interest in <strong>front-end development</strong>. <br />
          Ready to take any challenge!
        </p>
      </div>

      {/* Button */}
      <div className="mt-8">
        <a
          href="mailto:tahirainam1@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-indigo-200 hover:bg-indigo-700 rounded-lg shadow-lg text-lg font-medium transition"
        >
          <i className="fas fa-envelope mr-2"></i> Say hi
        </a>
      </div>
    </section>
  );
}

export default Home;
