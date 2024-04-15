import React from "react";
import RU from "../icons/Logo_of_rajshahi_university.jpg";
import VS from "../icons/vivasoft.png";

function About() {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center mt-32 gap-8 font-serif">
            <div className="flex flex-col bg-white shadow-lg rounded-lg max-w-md px-6 py-4 hover:shadow-neon transition-shadow duration-500">
                <h1 className="font-bold text-3xl mb-4 text-blue-500">
                    Education
                </h1>
                <h2 className="text-xl font-semibold">
                    Bachelor of Science in Information and Communication
                    Engineering
                </h2>
                <img src={RU} className="h-16 w-16 rounded-full mx-auto mt-4" />
                <h3 className="text-lg font-semibold mt-4">
                    University of Rajshahi
                </h3>
                <h4 className="text-md font-semibold mt-2">
                    January 2019 - July 2024
                </h4>
            </div>
            <div className="flex flex-col bg-white shadow-lg rounded-lg max-w-md px-6 py-4 hover:shadow-neon transition-shadow duration-500">

                <h1 className="font-bold  mb-4 text-3xl text-blue-500">
                    Experiences
                </h1>
                <h2 className="text-lg font-semibold">
                    Internship on Software development (Remote)
                </h2>
                <h3 className="text-lg font-semibold mt-2">
                    Geeky Solution's Learnathon 2.0
                </h3>
                <img src={VS} className="h-24 w-24 rounded-full mx-auto mt-4" />
                <h4 className="text-lg font-semibold mt-4">Vivasoft Limited</h4>
                <h5 className="text-md font-semibold mt-2">
                    Sep 2023 - Feb 2024
                </h5>
                <p className="mt-4 text-gray-600">
                    I've gained proficiency in JavaScript, ReactJS, and NextJS
                    through hands-on learning experiences. I've also
                    collaborated with a dynamic team on an industry-level
                    frontend development project.
                </p>
            </div>
        </div>
    );
}

export default About;
