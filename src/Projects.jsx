import { useState } from "react";
import StripedBox from "./StripedBox";
import ProjectCard from "./ProjectCard";
import { Header } from "./Showcase";
import projects from "./data/projects.json";
function Projects({ setHoveredProjectSkills, headingFloating }) {
  const [hovered, setHovered] = useState(false);
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

      <div className="mb-2 mt-10 text-center text-3xl font-bold text-subtext0 opacity-80">
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
