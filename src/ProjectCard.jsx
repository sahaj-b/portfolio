import { useContext, useMemo } from "react";
import { AngleToggledContext } from "./context/angleToggledContext";
function ProjectCard({ project, setHoveredProjectSkills, parentHovered }) {
  const blurStyle = useMemo(() => {
    const color = getComputedStyle(root).getPropertyValue("--" + project.color);
    return {
      backgroundColor: `${color}aa`,
      backdropFilter: "blur(3px)",
    };
  }, [project.color]);

  const angleToggled = useContext(AngleToggledContext).angleToggled;
  let striped = {
    backgroundImage: `repeating-linear-gradient(-45deg, var(--secondary), var(--secondary) 10px, var(--${project.color}) 10px, var(--${project.color}) 20px)`,
    backgroundAttachment: "fixed",
    border: `1px solid var(--${project.color})`,
  };
  return (
    <div
      className={`w-[calc(50%-20px)] rounded-xl border shadow-[inset_0_0_1px_1px_rgba(0,0,0,0.5)]`}
      style={striped}
    >
      <div
        className={`${parentHovered ? (angleToggled ? "-left-1.5 top-1.5" : "-top-1.5 left-1.5") : "left-0 top-0"} ${angleToggled ? "hover:-left-0 hover:top-0" : "hover:-top-0 hover:left-0"} bg-base group relative flex items-center justify-center overflow-hidden rounded-xl border transition-all duration-100 active:left-0 active:top-0`}
        style={{ border: `1px solid var(--${project.color})` }}
        onMouseEnter={() => setHoveredProjectSkills(project.skills)}
        onMouseLeave={() => setHoveredProjectSkills([])}
      >
        <img
          src={project.image}
          alt={project.name}
          className="profile relative rounded-xl object-cover h-52 w-96"
        />

        <div className="absolute -bottom-full left-0 transition-all group-hover:bottom-0 w-full text-crust h-full">
          <div className="mx-3 my-3 flex space-x-2">
            <a
              href={project.github}
              target="_blank"
              className={`nf nf-fa-github rounded-full px-2 py-1 text-3xl transition-all hover:opacity-80`}
              style={blurStyle}
            ></a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                className={`nf nf-fa-external_link rounded-full px-3 py-2 text-center text-xl transition-all hover:opacity-80`}
                style={blurStyle}
              ></a>
            )}
          </div>

          <div className="rounded-t-xl p-3 h-full" style={blurStyle}>
            <p className="font-poppins text-xl font-bold">{project.name}</p>
            <p className="text-lg mt-2 font-bold leading-5">
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;
