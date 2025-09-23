import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section
      className="section w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 py-3 text-black"
      id="projects"
    >
      {/* Section Heading */}
      <div className=" mb-10 sm:mb-12">
        <h2 className="text-left text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">
          Projects I’ve built
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 w-full max-w-6xl">
        <ProjectCard
          title="Portfolio"
          description="This is project description"
          tech="JavaScript, React, Tailwind CSS"
          github="https://github.com/tahirainam/portfolio"
          demo="https://tahirainam.github.io/portfolio/"
        />

        <ProjectCard
          title="AlzAI"
          description="This is project description"
          tech="JavaScript, React, Tailwind CSS"
          github="https://github.com/tahirainam/AlzAI"
          demo="https://tahirainam.github.io/AlzAI/"
        />
        <ProjectCard
          title="TINT"
          description="This is project description"
          tech="JavaScript, React, Tailwind CSS"
          github="https://github.com/Inahira/portfolio"
          demo="https://inahira.vercel.app/"
        />

        <ProjectCard
          title="The Visionary Unifier"
          description="This is project description"
          tech="JavaScript, React, Tailwind CSS"
          github="https://github.com/tahirainam/The-Visionary-Unifier"
          demo="https://tahirainam.github.io/The-Visionary-Unifier/"
        />

        <ProjectCard
          title="Stopwatch Web App"
          description="This is project description"
          tech="JavaScript, React, Tailwind CSS"
          github="https://github.com/tahirainam/stopWatchWebApp"
          demo="https://tahirainam.github.io/stopWatchWebApp/"
        />
      </div>
    </section>
  );
}

export default Projects;
