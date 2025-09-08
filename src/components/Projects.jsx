import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="skills-writting">
        <h2 className="section-heading"><b>Projects</b></h2>
        <p className="skills-p">Here are some of my projects.</p>
      </div>

      <div className="projects-disc">
        <ProjectCard
          title="Computare"
          description="A simple javaScript calculator using event listener and if-else statements."
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
          description="A simple javaScript calculator using event listener and if-else statements."
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
