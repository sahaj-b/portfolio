function ProjectCard({
  angleToggled,
  project,
  setHoveredProjectSkills,
  parentHovered,
}) {
  let striped = {
    backgroundImage: `repeating-linear-gradient(-45deg, #1e1e2e, #1e1e2e 10px, ${project.color} 10px, ${project.color} 20px)`,
    backgroundAttachment: "fixed",
    border: "1px solid " + project.color,
  };
  return (
    <div
      className={`rounded-xl shadow-[inset_0_0_1px_1px_rgba(0,0,0,0.5)] w-[calc(50%-20px)]`}
      style={striped}
    >
      <div
        className={`transition-all relative bg-base rounded-xl cursor-pointer active:top-0 active:left-0 duration-100  flex justify-center items-center
                    ${parentHovered ? (angleToggled ? "top-2 -left-2" : "-top-2 left-2") : "top-0 left-0"}
                    ${angleToggled ? "hover:top-1 hover:-left-1" : "hover:-top-1 hover:left-1"}
`}
        style={{ border: "1px solid " + project.color }}
        onMouseEnter={() => setHoveredProjectSkills(project.skills)}
        onMouseLeave={() => setHoveredProjectSkills([])}
      >
        <img
          src={project.image}
          alt={project.name}
          className="object-cover rounded-xl"
        />
      </div>
    </div>
  );
}
export default ProjectCard;
