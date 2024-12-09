import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skill from "./components/Skill/Skill";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Skill></Skill>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;
