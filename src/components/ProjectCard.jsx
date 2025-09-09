function ProjectCard({ title, description, tech, github, demo }) {
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-gray-200 rounded-lg p-4 sm:p-6 flex flex-col justify-between shadow-md hover:shadow-xl border border-black transition-shadow duration-300 mx-auto">
      
      {/* Card Header: Links */}
      <div className="flex justify-end space-x-3 sm:space-x-4 mb-3 sm:mb-4 text-base sm:text-lg">
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
            className="hover:text-indigo-500 transition-colors"
          >
            <i className="fa-solid fa-up-right-from-square"></i>
          </a>
        )}
      </div>

      {/* Card Heading */}
      <div className="mb-3 sm:mb-4">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center">
          {title}
        </h3>
      </div>

      {/* Card Description */}
      <div className="text-center space-y-1 sm:space-y-2">
        <p className="text-sm sm:text-base">{description}</p>
        <p className="text-xs sm:text-sm md:text-base text-indigo-500">{tech}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
