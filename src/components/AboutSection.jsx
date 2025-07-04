import { Briefcase, Code, Medal, User } from "lucide-react";

export const AboutSection = () => {
    return (
    <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Entry-Level Web Developer Specializing in React & Python</h3>

                    <p className="  text-justify text-muted-foreground">
                        I’m a passionate web developer with a working knowledge of modern technologies like React, Tailwind CSS, and JavaScript.  
                        My foundation in Python and recent internship in AI Engineering have enhanced my problem-solving and analytical skills.  
                        I thrive in collaborative environments and am driven to build scalable, user-centric digital solutions.
                    </p>
                    <p className=" text-justify text-muted-foreground">
                        As a continuous learner, I actively explore advancements in web development and artificial intelligence.  
                        I aim to contribute to innovative projects that blend creativity with functionality.  
                        With a growth mindset, I’m excited to bring fresh energy and adaptability to every opportunity I pursue.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#Contact" className="cosmic-button"> Get In Touch</a>
                        <a 
                        href="/DevadharshiniJ_CV.pdf"
// px-6 py-2 rounded-full border-primary text-primary hover:bg-primary/10 transition-colors duration-300 
                        className="cosmic-button" download>
                         Download CV </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Web Development</h4>
                                <p className="text-muted-foreground">Creating responsive website and web applications with modern frameworks.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <User className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">User-Centered Design</h4>
                                <p className="text-muted-foreground">Crafting accessible, user-first digital experiences.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Open to Opportunity</h4>
                                <p className="text-muted-foreground">Motivated to learn, grow, and contribute with curiosity and adaptability.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};