function Home() {
  return (
    <section
      className="w-full h-screen flex flex-col items-center justify-center text-center py-12"
      id="home"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Intro */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Hi, It's <span>Tahira Inam</span>
        </h1>
        <p className="mb-2 text-lg">
          At times, I'm involved in creating stuff.
        </p>
        <p className="text-base sm:text-lg" id="para">
          I'm a student <strong>(BS Software Engineering)</strong> based in Sialkot. <br />
          I have deep interest in <strong>front-end development</strong>. <br />
          Ready to take any challenge!
        </p>

        {/* Button */}
        <div className="mt-8 mb-12 ">
          <a
            href="mailto:tahirainam1@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-black px-6 py-3 border border-black hover:bg-gray-100 hover:text-gray-800 rounded-lg text-lg font-medium transition"
          >
            <i className="fas fa-envelope mr-2 "></i> Say hi
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
