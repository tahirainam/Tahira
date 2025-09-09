function ProjectCard({ title, description, tech, github, demo }) {
  return (
    <div className="w-full bg-gray-200 rounded-lg p-6 flex flex-col justify-between shadow-md hover:shadow-xl border border-black transition-shadow duration-300 max-w-sm mx-auto">

      {/* Card Header: Links */}
      <div className="flex justify-end space-x-4 mb-4 text-lg">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            <i className="fab fa-github"></i>
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-colors"
          >
            <i className="fa-solid fa-up-right-from-square"></i>
          </a>
        )}
      </div>

      {/* Card Heading */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-center">{title}</h3>
      </div>

      {/* Card Description */}
      <div className="text-center space-y-2">
        <p>{description}</p>
        <p className="text-sm text-indigo-400">{tech}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
