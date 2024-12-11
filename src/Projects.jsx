import { useState } from "react";
import StripedBox from "./StripedBox";
import ProjectCard from "./ProjectCard";
function Projects({ angleToggled, setHoveredProjectSkills }) {
  const rosewater = "#f5e0dc";
  const flamingo = "#f2cdcd";
  const pink = "#f5c2e7";
  const mauve = "#cba6f7";
  const red = "#f38ba8";
  const maroon = "#eba0ac";
  const peach = "#fab387";
  const yellow = "#f9e2af";
  const green = "#a6e3a1";
  const teal = "#94e2d5";
  const sky = "#89dceb";
  const sapphire = "#74c7ec";
  const blue = "#89b4fa";
  const lavender = "#b4befe";
  const text = "#cdd6f4";
  const projects = {
    claude1: {
      name: "Claude AI Frontend Clone",
      github: "https://github.com/sahaj-b/claudeAI-frontend-clone",
      demo: "https://sahaj-claude-clone.vercel.app/",
      image: "https://placehold.co/600x400",
      skills: ["html", "css", "js", "react", "tailwind"],
      color: red,
    },
    claude2: {
      name: "Claude AI Frontend Clone",
      github: "https://github.com/sahaj-b/claudeAI-frontend-clone",
      demo: "https://sahaj-claude-clone.vercel.app/",
      image: "https://placehold.co/600x400",
      skills: ["html", "css", "js", "react", "tailwind"],
      color: red,
    },
    claude3: {
      name: "Claude AI Frontend Clone",
      github: "https://github.com/sahaj-b/claudeAI-frontend-clone",
      demo: "https://sahaj-claude-clone.vercel.app/",
      image: "https://placehold.co/600x400",
      skills: ["html", "css", "js", "react", "tailwind"],
      color: red,
    },
    claude4: {
      name: "Claude AI Frontend Clone",
      github: "https://github.com/sahaj-b/claudeAI-frontend-clone",
      demo: "https://sahaj-claude-clone.vercel.app/",
      image: "https://placehold.co/600x400",
      skills: ["html", "css", "js", "react", "tailwind"],
      color: red,
    },
    claude5: {
      name: "Claude AI Frontend Clone",
      github: "https://github.com/sahaj-b/claudeAI-frontend-clone",
      demo: "https://sahaj-claude-clone.vercel.app/",
      image: "https://placehold.co/600x400",
      skills: ["html", "css", "js", "react", "tailwind"],
      color: red,
    },
  };
  const [hovered, setHovered] = useState(false);
  return (
    <StripedBox
      angleToggled={angleToggled}
      hovered={hovered}
      setHovered={setHovered}
      fullDown
    >
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <div className="flex flex-wrap gap-10 w-[40rem] p-5">
        {Object.keys(projects).map((project) => {
          return (
            <ProjectCard
              angleToggled={angleToggled}
              project={projects[project]}
              key={project}
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
