function ProjectCard({ title, description, tech, github, demo }) {
  return (
    <div className="section w-full max-w-xs sm:max-w-sm md:max-w-md bg-white p-4 sm:p-6 flex flex-col justify-between shadow-md hover:shadow-2xl border border-gray-400 hover:border-black transition-shadow duration-300 mx-auto">
      
      {/* Card Header: Links */}
      

      {/* Card Heading */}
      <div className="m-0.5 sm:mb-4">
        <h3 className="text-lg sm:text-xl md:text-xl font-semibold text-center">
          {title}
        </h3>
      </div>

      {/* Card Description */}
      <div className=" text-center  sm:space-y-1 p-1">
        <p className="text-sm sm:text-base ">{description}</p>
        <p className="text-xs sm:text-sm md:text-base text-gray-500">{tech}</p>
        <div className="flex justify-center space-x-3 p-1">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500 transition-colors"
            >
              <i className="fab fa-github"></i>
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500 transition-colors"
            >
              <i className="fa-solid fa-up-right-from-square"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
