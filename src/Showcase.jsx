import { useState } from "react";
import Projects from "./Projects";
import Skills from "./Skills";

function Showcase({}) {
  const [hoveredProjectSkills, setHoveredProjectSkills] = useState([]);
  return (
    <div
      className={`flex items-start justify-center space-x-10 pt-16 transition-all md:flex-col md:items-center md:space-x-0 md:space-y-20`}
    >
      <Skills hoveredProjectSkills={hoveredProjectSkills} />
      <Projects setHoveredProjectSkills={setHoveredProjectSkills} />
    </div>
  );
}

export default Showcase;
