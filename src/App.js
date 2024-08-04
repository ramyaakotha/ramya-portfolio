import "./App.css";
import { useRef } from "react";
import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";
import WorkExperience from "./Components/WorkExperience/WorkExperience";

function App() {
  return (
    <div className="App">
      <>
        <Navbar />

        <div className="container">
          <Hero />
          <Skills />
          <WorkExperience />
          <ContactMe />
        </div>
        <Footer />
      </>
    </div>
  );
}

export default App;
