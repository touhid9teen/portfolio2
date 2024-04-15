import React, { useState } from "react";
import myPic from "../icons/programmer-3.gif";
import linkdin from "../icons/linkedin.png";
import github from "../icons/github.png";
import hand from "../icons/hand.gif";
import C from "../icons/C_Logo.png";
import Cpp from "../icons/c-.png";
import Java from "../icons/java.png";
import JavaScript from "../icons/js.png";
import ReactLogo from "../icons/react.png";
import Html from "../icons/html-5.png";
import Css from "../icons/css.png";
import Tailwind from "../icons/tailwindl.png";
import react from "../icons/react.png";

function Home() {
    const [hoveredImage, setHoveredImage] = useState(null);

    const techStack = [
        { name: "C", logo: C },
        { name: "C++", logo: Cpp },
        { name: "Java", logo: Java },
        { name: "JavaScript", logo: JavaScript },
        { name: "React", logo: ReactLogo },
        { name: "HTML", logo: Html },
        { name: "CSS", logo: Css },
        { name: "Tailwind CSS", logo: Tailwind },
    ];

    return (
        <div className="flex flex-col items-center justify-center mt-16 font-serif">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="flex flex-col items-center justify-center text-center md:text-left">
                    <h1 className="text-4xl font-bold mb-2 ">
                        Front-End React <br /> Developer
                    </h1>
                    <p className="text-xl">
                        Hi, I'm Touhidul Islam. A passionate Front-end
                        <br /> React Developer from Rajshahi, Bangladesh.
                    </p>
                    <div className="flex gap-4 mt-4">
                        <a
                            href="https://www.linkedin.com/in/touhid19/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={linkdin}
                                className="h-8 w-8 rounded"
                                alt="LinkedIn"
                            />
                        </a>
                        <a
                            href="https://github.com/touhid9teen"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={github}
                                className="h-8 w-8 rounded"
                                alt="GitHub"
                            />
                        </a>
                        <a
                            href="../icons/Latest_Resume_Template_Touhidul_Islam.pdf"
                            download="Latest_Resume_Template_Touhidul_Islam.pdf"
                        >
                            <button className="border border-black p-1 px-4 rounded-xl bg-black text-white hover:bg-white hover:text-black">
                                Resume
                            </button>
                        </a>
                    </div>
                </div>
                <div className="mt-8 md:mt-0">
                    <img
                        src={myPic}
                        alt="Touhidul Islam"
                        className="rounded-full h-64 w-64"
                    />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-32">
                <h1 className="font-bold mb-8 text-3xl text-blue-500">
                    Tech Stack
                </h1>
                <div className="flex flex-wrap justify-center gap-8">
                    {techStack.map((tech, index) => (
                        <div key={index} className="relative h-16 w-16">
                            <img
                                src={tech.logo}
                                alt={`${tech.name} Logo`}
                                className={`${
                                    hoveredImage === tech.name
                                        ? "h-full w-full"
                                        : "h-10 w-10 m-auto"
                                }`}
                                onMouseEnter={() => setHoveredImage(tech.name)}
                                onMouseLeave={() => setHoveredImage("")}
                            />
                            {hoveredImage === tech.name && (
                                <div className="absolute top-full mt-1 w-32 text-center bg-blue-400 text-black p-1 rounded shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-blue-500">
                                    {tech.name}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
