import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section
      className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 py-6 text-black"
      id="projects"
    >
      {/* Section Heading */}
      <div className="text-center mb-10 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">
          Projects
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl">
        <ProjectCard
          title="Portfolio"
          description="My personal portfolio to showcase projects and skills."
          tech="JavaScript, React, Tailwind CSS"
          github="https://github.com/tahirainam/portfolio"
          demo="https://tahirainam.github.io/portfolio/"
        />

        <ProjectCard
          title="AlzAI"
          description="A machine learning model to detect Alzheimer's disease."
          tech="Python, Flask, ML, Tailwind CSS, HTML"
          github="https://github.com/tahirainam/AlzAI"
          demo="https://tahirainam.github.io/AlzAI/"
        />

        <ProjectCard
          title="TINT"
          description="A site with purpose that I forgot right now."
          tech="React, CSS"
          github="https://github.com/Inahira/portfolio"
          demo="https://inahira.vercel.app/"
        />
        
        <ProjectCard
          title="csXplore"
          description="A site where you can explore various computer science topics and concepts from well known and authentic resources."
          tech="React, Tailwind CSS, JS,  MomgoDB"
          github="https://github.com/tahirainam/csXplore"
          demo="https://tahirainam.github.io/csXplore/"
        />

        <ProjectCard
          title="The Visionary Unifier"
          description="A tribute to Professor. Dr. Abdul salaam. The first Muslim Nobel laureate in Physics."
          tech="HTML, CSS"
          github="https://github.com/tahirainam/The-Visionary-Unifier"
          demo="https://tahirainam.github.io/The-Visionary-Unifier/"
        />

        <ProjectCard
          title="Stopwatch Web App"
          description="A simple stopwatch web app built with HTML, CSS, and JavaScript."
          tech="HTML, CSS, JavaScript"
          github="https://github.com/tahirainam/stopWatchWebApp"
          demo="https://tahirainam.github.io/stopWatchWebApp/"
        />
      </div>
    </section>
  );
}

export default Projects;
