import StripedBox from "./StripedBox";
import ProjectCard from "./ProjectCard";
import projects from "./data/projects.json";
function Projects({ setHoveredProjectSkills }) {
  return (
    <StripedBox>
      <h1
        className={`absolute top-0 left-0 w-full bg-[var(--primary)] rounded-t-xl py-2 text-center font-poppins text-3xl font-semibold text-baseClr`}
      >
        Projects
      </h1>
      <div className="mb-2 mt-14 text-center text-3xl font-bold text-subtext0 opacity-80">
        Web Dev
      </div>
      <div className="flex w-[50rem] flex-wrap gap-10 p-5">
        {projects.WebDev.map((project, index) => {
          return (
            <ProjectCard
              project={project}
              key={index}
              setHoveredProjectSkills={setHoveredProjectSkills}
            />
          );
        })}
      </div>

      <div className="mb-2 mt-10 text-center text-3xl font-bold text-subtext0 opacity-80">
        Other Stuff
      </div>
      <div className="flex w-[50rem] flex-wrap gap-10 p-5">
        {projects.other.map((project, index) => {
          return (
            <ProjectCard
              project={project}
              key={index}
              setHoveredProjectSkills={setHoveredProjectSkills}
            />
          );
        })}
      </div>
    </StripedBox>
  );
}
export default Projects;
