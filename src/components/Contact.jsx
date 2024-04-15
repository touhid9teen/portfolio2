import React from "react";
import FB from "../icons/facebook2.png";
import LI from "../icons/linkedin (1).png";
import GH from "../icons/github2.png";
import SO from "../icons/stackoverflow.png";
import MD from "../icons/medium.png";
import mail from "../icons/gmail2.png";

const socialLinks = [
    {
        href: "https://github.com/touhid9teen",
        src: GH,
        alt: "GitHub",
    },
    {
        href: "https://www.linkedin.com/in/touhid19",
        src: LI,
        alt: "LinkedIn",
    },
    {
        href: "mailto:touhid.ru66@gmail.com",
        src: mail,
        alt: "Gmail",
    },
    {
        href: "https://www.facebook.com/toouhid19",
        src: FB,
        alt: "Facebook",
    },
    {
        href: "https://medium.com/@toouhid",
        src: MD,
        alt: "StackOverflow",
    },

    {
        href: "https://stackoverflow.com/users/14175875/touhid",
        src: SO,
        alt: "StackOverflow",
    },
];

function Contact() {
    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center bg-white p-10 font-serif">
            <h2 className="font-bold text-5xl mb-4 text-blue-500">Contact</h2>
            <p className="text-5xl mb-10 text-center">
                Want to start a new project? <br />
                Or just say hello.
            </p>
            <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-5">
                {socialLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={link.src}
                            alt={link.alt}
                            className="h-10 w-10 sm:h-10 sm:w-10 md:h-10 md:w-10"
                        />
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Contact;
