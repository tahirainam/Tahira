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
          description="Personal portfolio website to showcase my projects."
          tech="JavaScript, React, Tailwind CSS"
          github="https://github.com/tahirainam/Tahira"
          demo="https://tahirainam.github.io/Tahira/"
        />

        <ProjectCard
          title="Little Lemon"
          description="Little Lemon is a fictional restaurant website built using ReactJS."
          tech="JavaScript, React, CSS"
          github="https://github.com/tahirainam/little-lemon"
          demo="https://tahirainam.github.io/little-lemon/"
        />

        <ProjectCard
          title="WaM"
          description="WaM is a web base Whack-A-Mole game built using ReactJS."
          tech="Vanilla JavaScript, HTML, CSS"
          github="https://github.com/tahirainam/WaM"
          demo="https://WaM.vercel.app/"
        />

        <ProjectCard
          title="Student Data Management System"
          description="Console based application Developed in C++ to manage student records, including add, search, update, and delete functionalities."
          tech="C++"
          github="https://github.com/tahirainam/Student_Data_Management_System"
        />

        <ProjectCard
          title="AlzAI"
          description="AlzAI is an AI-powered web application designed to assist in the early detection of Alzheimer's disease."
          tech="Python, Flask, AI/ML, HTML, CSS"
          github="https://github.com/tahirainam/AlzAI"
          demo="https://tahirainam.github.io/AlzAI/"
        />
        
        <ProjectCard
          title="csXplore"
          description="csXplore is designed to assist computer science students in exploring various CS topics through well-Known learning resources."
          tech="React, Tailwind CSS"
          github="https://github.com/tahirainam/csXplore"
          demo="https://tahirainam.github.io/csXplore/"
        />

        
        

        

        
      </div>
    </section>
  );
}

export default Projects;
