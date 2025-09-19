import ProjectCard from "../components/ProjectCard";
function Services() {
    return (
        <section className="section w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 py-3 text-black" id="services">
            <h1 className="text-3xl font-bold mb-2">Services I am Providing</h1>
            <p className="mb-4">This is my only Service for now :') .</p>
            <div className="section w-full items-center justify-center px-4 sm:px-6 md:px-12 py-3 text-black" id="projects">
                <ProjectCard
                    title="Front-End Development"
                    description="I build responsive and interactive websites using React and modern front-end technologies."
                   
                    button = <a
            href="mailto:tahirainam1@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex  text-black px-10 text-bold sm:px-6 py-2 sm:py-2 hover:text-gray-600 text-base sm:text-lg font-medium transition"
             >
             frontend projects ↗
          </a>
                />
            </div>

        </section>
    );
}
 
export default Services;