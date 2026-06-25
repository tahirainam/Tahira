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
          title="Tahira"
          description="This is the second iteration of my personal website, designed and rebuilt from the ground up using React and Vite."
          tech="React.js, Vite, Tailwind CSS"
          github="https://github.com/tahirainam/Tahira"
          demo="https://tahira-khaki.vercel.app/"
        />
        <ProjectCard
          title="Stock Trading Platform"
          description="Zerodha-inspired Full stack Stock Trading Platform, with interactive data visualization dashboards."
          tech="MongoDB, Express.js, React.js, Node.js, Bootstrap"
          github="https://github.com/tahirainam/Stock-Trading-Platform"
          demo="https://stock-trading-platform.vercel.app/"
        />

        <ProjectCard
          title="AlzAI"
          description="AlzAI is an AI-powered web application for Alzheimer's disease Risk Assessment with 95.81% accuracy."
          tech="Python(Flask), AI/ML, HTML, CSS"
          github="https://github.com/tahirainam/AlzAI"
          demo="https://tahirainam.github.io/AlzAI/"
        />

        <ProjectCard
          title="Chess"
          description="Chess is a console-based game developed in Java, allowing two players to play against each other with basic rules and functionalities."
          tech="Java"
          github="https://github.com/tahirainam/chess"
        />

        <ProjectCard
          title="Student Data Management System"
          description="Console based application Developed in C++ to manage student records, including add, search, update, and delete functionalities."
          tech="C++"
          github="https://github.com/tahirainam/Student_Data_Management_System"
        />

        <ProjectCard
          title="Noise"
          description="Noise is a home for my p5.js creative coding projects and experiments, built with React."
          tech="React.js, vite, p5.js"
          github="https://github.com/tahirainam/Noise"
        />
        
        {/*
          <ProjectCard
            title="csXplore"
            description="csXplore is designed to assist computer science students in exploring various CS topics through well-Known learning resources. (Still in progress)"
            tech="React, Tailwind CSS"
            github="https://github.com/tahirainam/csXplore"
            demo="https://tahirainam.github.io/csXplore/"
          />
        */}
      </div>
    </section>
  );
}

export default Projects;
