import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import site1 from "../icons/todoapp.PNG";
import site2 from "../icons/portfolio2.PNG";

function Project() {
    const projects = [
        {
            title: "Todo App",
            description:
                "My Todo App is a simple yet powerful task management tool designed to help users stay organized and productive. With an intuitive interface and robust features, it offers a seamless experience for managing tasks efficiently.",
            codeLink: "https://github.com/touhid9teen/Todo-app",
            tech: "React, Tailwind CSS",
            image: site1,
        },
        {
            title: "Portfolio Website",
            description:
                "Welcome to my Personal Portfolio Website, where I showcase my skills, projects, and experiences as a developer/designer. With a clean and modern design, this website serves as a central hub for exploring my work and learning more about me.",
            codeLink: "https://github.com/touhid9teen/portfolio2",
            tech: "React, Tailwind CSS",
            image: site2,
        },
        {
            title: "News App",
            description:
                "Introducing Newsify, your go-to app for staying updated with the latest news and trends from around the world. With a sleek and user-friendly interface, Newsify delivers personalized news content tailored to your interests, ensuring you never miss out on important stories.",
            codeLink: "https://github.com/touhid9teen/News-App",
            tech: "React, Tailwind CSS",
            image: "https://via.placeholder.com/150",
        },
    ];

    return (
        <div className=" p-10 flex flex-col items-center justify-center font-serif">
            <h1 className="text-4xl mb-10 font-bold text-blue-500">Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center justify-center">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg p-5 shadow-xl hover:shadow-neon transition-shadow duration-500"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover mb-4 rounded border border-gray-400"
                        />
                        <h2 className="font-bold text-xl mb-2 flex flex-row items-center gap-4">
                            {project.title}{" "}
                            <a
                                href={project.codeLink}
                                className="text-blue-500 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaExternalLinkAlt />
                            </a>
                        </h2>
                        <p className="mb-2">{project.description}</p>
                        <p className="mb-2">
                            <strong>Technology Used:</strong> {project.tech}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;
