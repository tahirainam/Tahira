import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section
      className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 py-12 bg-white text-black"
      id="projects"
    >
      {/* Section Heading */}
      <div className="text-center mb-10 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
          Projects
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          Here are some of my projects.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl">
        <ProjectCard
          title="Computare"
          description="A simple JavaScript calculator using event listeners and if-else statements."
          tech="HTML, CSS, JS"
          github="https://github.com/Inahira/Computare"
          demo="https://inahira.github.io/Computare/"
        />

        <ProjectCard
          title="To-Do List"
          description="An interactive to-do list app with CRUD operations."
          tech="HTML, CSS, JS"
          github="https://github.com/Inahira/todo"
          demo="https://inahira.github.io/todo/"
        />

        <ProjectCard
          title="Portfolio Website"
          description="My personal portfolio to showcase projects and skills."
          tech="React, CSS"
          github="https://github.com/Inahira/portfolio"
          demo="https://inahira.vercel.app/"
        />

        <ProjectCard
          title="Computare"
          description="A simple JavaScript calculator using event listeners and if-else statements."
          tech="HTML, CSS, JS"
          github="https://github.com/Inahira/Computare"
          demo="https://inahira.github.io/Computare/"
        />

        <ProjectCard
          title="To-Do List"
          description="An interactive to-do list app with CRUD operations."
          tech="HTML, CSS, JS"
          github="https://github.com/Inahira/todo"
          demo="https://inahira.github.io/todo/"
        />

        <ProjectCard
          title="Portfolio Website"
          description="My personal portfolio to showcase projects and skills."
          tech="React, CSS"
          github="https://github.com/Inahira/portfolio"
          demo="https://inahira.vercel.app/"
        />
      </div>
    </section>
  );
}

export default Projects;
