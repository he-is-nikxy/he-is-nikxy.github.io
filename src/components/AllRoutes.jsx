import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import React from 'react'
import About from "../pages/About";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects"
import Contact from "../pages/Contact";
import Services from "./services";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
        </Routes>
    )
}

export default AllRoutes


