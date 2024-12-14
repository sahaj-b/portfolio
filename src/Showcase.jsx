import { useState, useContext } from "react";
import Projects from "./Projects";
import Skills from "./Skills";
import { AngleToggledContext } from "./context/angleToggledContext";

function Showcase({}) {
  const [hoveredProjectSkills, setHoveredProjectSkills] = useState([]);
  const [headingFloating, setHeading] = useState(false);
  return (
    <div
      className={`flex items-start justify-between space-x-10 pt-16 transition-all`}
    >
      <Skills
        hoveredProjectSkills={hoveredProjectSkills}
        headingFloating={headingFloating}
        setHeadingFloating={setHeading}
      />
      <Projects
        setHoveredProjectSkills={setHoveredProjectSkills}
        headingFloating={headingFloating}
        setHeadingFloating={setHeading}
      />
    </div>
  );
}
function Header({
  text,
  headingFloating,
  hiddenText,
  hiddenTextSize = "text-3xl",
}) {
  const angleToggled = useContext(AngleToggledContext).angleToggled;
  return (
    <>
      <h1
        className={`${headingFloating ? "absolute -top-14 left-8 w-[calc(100%-2em)] rounded-lg shadow-sm shadow-black" : "absolute -left-0 top-0 w-full"} ${angleToggled ? "bg-blue" : "bg-mauve"} z-10 rounded-t-xl py-2 text-center font-poppins text-3xl font-semibold text-baseClr transition-all`}
      >
        {text}
      </h1>
      <div
        className={` ${hiddenTextSize} relative mb-2 text-center font-bold text-subtext0 opacity-80 transition-all ${headingFloating ? "left-1 -top-2" : "-top-4 left-0"}`}
      >
        {hiddenText}
      </div>
    </>
  );
}
export default Showcase;
export { Header };
