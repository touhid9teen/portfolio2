import React from "react";
import { Link } from "react-scroll";

function Navbar() {
    return (
        <nav className="bg-white shadow font-serif">
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex items-center justify-between w-full">
                        <div className="flex-shrink-0 text-blue-500 font-bold text-xl">
                            Portfolio
                        </div>
                        <div className="hidden sm:flex sm:space-x-4 ml-auto">
                            <Link
                                to="home"
                                smooth={true}
                                duration={1000}
                                className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium cursor-pointer"
                            >
                                Home
                            </Link>
                            <Link
                                to="about"
                                smooth={true}
                                duration={1000}
                                className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium cursor-pointer"
                            >
                                About
                            </Link>
                            <Link
                                to="project"
                                smooth={true}
                                duration={1000}
                                className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium cursor-pointer"
                            >
                                Project
                            </Link>
                            <Link
                                to="contact"
                                smooth={true}
                                duration={1000}
                                className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium cursor-pointer"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
