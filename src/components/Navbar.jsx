import React, { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white shadow font-serif relative">
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
                        <div className="sm:hidden">
                            <button
                                onClick={toggleMenu}
                                className="text-gray-700 hover:text-white focus:outline-none mr-4"
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d={
                                            isOpen
                                                ? "M6 18L18 6M6 6l12 12"
                                                : "M4 6h16M4 12h16m-7 6h7"
                                        }
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="sm:hidden absolute inset-x-0 top-16 bg-white shadow font-serif">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <Link
                            to="home"
                            smooth={true}
                            duration={1000}
                            className="block text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                            onClick={toggleMenu}
                        >
                            Home
                        </Link>
                        <Link
                            to="about"
                            smooth={true}
                            duration={1000}
                            className="block text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                            onClick={toggleMenu}
                        >
                            About
                        </Link>
                        <Link
                            to="project"
                            smooth={true}
                            duration={1000}
                            className="block text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                            onClick={toggleMenu}
                        >
                            Project
                        </Link>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={1000}
                            className="block text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                            onClick={toggleMenu}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
