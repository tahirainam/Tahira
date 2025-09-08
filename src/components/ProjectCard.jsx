function ProjectCard({ title, description, tech, github, demo }) {
  return (
    <div className="card">
      <div className="card-header">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        )}
        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-up-right-from-square"></i>
          </a>
        )}
      </div>
      <div className="card-heading">
        <h3>{title}</h3>
      </div>
      <div className="card-paragraph">
        <p>{description}</p>
        <p>{tech}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
