import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import Habillity from "./components/habillity/Habillity";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/projects/Projects";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-mi" element={<AboutMe/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/hability" element={<Habillity/>} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
