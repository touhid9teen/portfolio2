import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Button from "./components/Button";
import { IoIosArrowUp } from "react-icons/io";

function App() {
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <div>
            <Navbar />
            <div id="home">
                <Home />
            </div>
            <div id="about">
                <About />
            </div>
            <div id="project">
                <Project />
            </div>
            <div id="contact">
                <Contact />
            </div>
            <Button onClick={scrollTop}>
                <IoIosArrowUp />
            </Button>
        </div>
    );
}

export default App;
