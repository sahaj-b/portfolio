import { useContext, useMemo } from "react";
import { AngleToggledContext } from "./context/angleToggledContext";
function ProjectCard({ project, setHoveredProjectSkills, parentHovered }) {
  const blurStyle = useMemo(() => {
    const color = getComputedStyle(root).getPropertyValue("--" + project.color);
    return {
      backgroundColor: `${color}aa`,
      backdropFilter: "blur(2px)",
    };
  }, []);

  const angleToggled = useContext(AngleToggledContext).angleToggled;
  let striped = {
    backgroundImage: `repeating-linear-gradient(-45deg, #1e1e2e, #1e1e2e 10px, var(--${project.color}) 10px, var(--${project.color}) 20px)`,
    backgroundAttachment: "fixed",
    border: `1px solid var(--${project.color})`,
  };
  return (
    <div
      className={`w-[calc(50%-20px)] rounded-xl border shadow-[inset_0_0_1px_1px_rgba(0,0,0,0.5)]`}
      style={striped}
    >
      <div
        className={`${parentHovered ? (angleToggled ? "-left-2 top-2" : "-top-2 left-2") : "left-0 top-0"} ${angleToggled ? "hover:-left-1 hover:top-1" : "hover:-top-1 hover:left-1"} relative flex items-center justify-center rounded-xl border bg-base transition-all duration-100 active:left-0 active:top-0 group overflow-hidden`}
        style={{ border: `1px solid var(--${project.color})` }}
        onMouseEnter={() => setHoveredProjectSkills(project.skills)}
        onMouseLeave={() => setHoveredProjectSkills([])}
      >
        <img
          src={project.image}
          alt={project.name}
          className="rounded-xl object-cover relative profile"
        />

        <div className="absolute left-0 -bottom-full transition-all group-hover:bottom-0 ">
          <div className="flex space-x-2 my-2 mx-3">
            <a
              href={project.github}
              target="_blank"
              className={`nf nf-fa-github text-3xl text-crust rounded-full px-2 py-1`}
              style={blurStyle}
            ></a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                className={`nf text-center nf-fa-external_link text-xl text-crust rounded-full px-3 py-2 `}
                style={blurStyle}
              ></a>
            )}
          </div>

          <div className="h-3/4 rounded-t-xl p-3" style={blurStyle}>
            <p className=" text-lg font-poppins font-bold text-crust">
              {project.name}
            </p>
            <p className="text-md font-bold text-crust leading-5 mt-2">
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;
