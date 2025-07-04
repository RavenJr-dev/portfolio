import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "An AI-Powered Chat Application Integrated with Google Gemini.",
        description: "A full-stack chatbot leveraging React for the UI, Express.js for server-side logic, MongoDB for data storage, and Google Gemini for AI capabilities. It features a responsive interface and seamless communication between client and server.",
        image: "/projects/project-1.png",
        tags: ["React", "Node.js", "MongoDB", "Express", "APIkeys"],
        demoUrl: "http://localhost:5173/",
        githubUrl: "https://github.com/RavenJr-dev/AI-ChatApplication",
    },
];

export const ProjectSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Featured <span className="text-primary"> Projects </span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here is my recent final year project. This project was carefully 
                crafted with attention to detail, performance and user experience.
            </p> 

            <div className="lg:grid-cols-1">
                {projects.map((project, key) => (
                    <div 
                        key={key} 
                        className="group by-card rounded-lg overflow-hidden shadow-2xs card-hover">
                            <div className="h-140 overflow-hidden">
                                <img src={project.image} 
                                alt={project.title} 
                                // className="transition-transform duration-1200 group-hover:scale-110" 
                                />
                            </div>
                            
                            <div>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-lg font-medium rounded-full bg-secondary text-secondary-foreground">
                                        {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <h1 className="text-2xl font-bold mb-2 "> {project.title} </h1>
                            <p className="text-muted-foreground text-lg mb-4">
                                {project.description}
                            </p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    {/* <a 
                                        href={project.demoUrl} 
                                        target="_blank"
                                        className="text-foreground hover:text-primary transition-colors duration-300"
                                    >
                                        <ExternalLink />
                                    </a> */}
                                    <a 
                                        href={project.githubUrl} 
                                        target="_blank"
                                        className="text-foreground hover:text-primary transition-colors duration-300"
                                    >
                                        <Github />
                                    </a>
                                </div>
                            </div>
                        </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <a 
                className="cosmic-button w-fit flex items-center mx-auto gap-2"
                target="_blank"
                href="https://github.com/RavenJr-dev">
                    Check My Github <ArrowRight size={16} />
                </a>
            </div>
        </div>
    </section>
};