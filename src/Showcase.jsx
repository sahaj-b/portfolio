import { useState, useEffect } from "react";
import StripedBox from "./StripedBox";
import Projects from "./Projects";
import Skills from "./Skills";

function Showcase({ angleToggled }) {
  const [hoveredProjectSkills, setHoveredProjectSkills] = useState([]);
  return (
    <div className="flex items-start justify-between space-x-10">
      <Skills
        angleToggled={angleToggled}
        hoveredProjectSkills={hoveredProjectSkills}
      />
      <Projects
        angleToggled={angleToggled}
        setHoveredProjectSkills={setHoveredProjectSkills}
      />
    </div>
  );
}
export default Showcase;
