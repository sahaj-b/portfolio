import { useState, useEffect } from "react";
import StripedBox from "./StripedBox";
import ProjectCard from "./ProjectCard";
import { Header } from "./Showcase";
import projects from "./data/projects.json";
function Projects({
  setHoveredProjectSkills,
  headingFloating,
  setHeadingFloating,
}) {
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    setHeadingFloating(hovered);
  }, [hovered, setHeadingFloating]);
  return (
    <StripedBox hovered={hovered} setHovered={setHovered}>
      <Header
        text={"Projects"}
        headingFloating={headingFloating}
        hiddenText={"Web Dev"}
      />
      <div className="flex w-[40rem] flex-wrap gap-10 p-5">
        {projects.WebDev.map((project, index) => {
          return (
            <ProjectCard
              project={project}
              key={index}
              setHoveredProjectSkills={setHoveredProjectSkills}
              parentHovered={hovered}
            />
          );
        })}
      </div>

      <div className="text-3xl text-subtext0 text-center font-bold opacity-80 mt-10 mb-2 ">
        Other Stuff
      </div>
      <div className="flex w-[40rem] flex-wrap gap-10 p-5">
        {projects.other.map((project, index) => {
          return (
            <ProjectCard
              project={project}
              key={index}
              setHoveredProjectSkills={setHoveredProjectSkills}
              parentHovered={hovered}
            />
          );
        })}
      </div>
    </StripedBox>
  );
}
export default Projects;
