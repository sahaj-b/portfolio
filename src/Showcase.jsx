import { useState } from "react";
import Projects from "./Projects";
import Skills from "./Skills";

function Showcase({}) {
  const [hoveredProjectSkills, setHoveredProjectSkills] = useState([]);
  return (
    <div
      className={`flex w-full items-start justify-center space-x-10 pt-16 transition-all`}
    >
      <Skills hoveredProjectSkills={hoveredProjectSkills} />
      <Projects setHoveredProjectSkills={setHoveredProjectSkills} />
    </div>
  );
}

export default Showcase;
