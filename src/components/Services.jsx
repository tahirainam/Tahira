import ProjectCard from "../components/ProjectCard";
function Services() {
    return (
        <section className="section w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 py-3 text-black" id="services">
            <div className="w-full cardBorder p-8 text-center">
            <h1 className="text-3xl font-bold mb-4">Services I am Providing</h1>
            <div className="section w-full items-center justify-center px-4 sm:px-6 md:px-12 py-3 text-black" id="projects">
                <ProjectCard
                    title="Front-End Development"
                    description="I build responsive and interactive websites using React and modern front-end technologies."
                   
                    button = <a
            href="mailto:tahirainam1@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex  text-white m-2 px-10 text-bold sm:px-6 py-2 sm:py-2 text-base sm:text-lg font-medium border border-black bg-black hover:text-black hover:bg-white transition"
             >
             Request
          </a>
                />
                </div>
                
</div>
        </section>
    );
}
 
export default Services;