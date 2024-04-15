import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
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
        </div>
    );
}

export default App;
