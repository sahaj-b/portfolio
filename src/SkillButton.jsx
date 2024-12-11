function SkillButton({ angleToggled, skill, parentHovered }) {
  let striped = {
    backgroundImage: `repeating-linear-gradient(-45deg, #1e1e2e, #1e1e2e 7px, ${skill.color} 7px, ${skill.color} 12px)`,
    backgroundAttachment: "fixed",
  };
  return (
    <div
      className={`rounded-full shadow-[inset_0_0_1px_1px_rgba(0,0,0,0.5)]`}
      style={striped}
    >
      <div
        className={`transition-all relative bg-base rounded-full cursor-pointer active:top-0 active:left-0 size-10 duration-100
                    ${parentHovered ? (angleToggled ? "top-2 -left-2" : "-top-2 left-2") : "top-0 left-0"}
                    ${angleToggled ? "hover:top-1 hover:-left-1" : "hover:-top-1 hover:left-1"}
`}
      >
        <span
          className={`nf ${skill.icon} text-xl`}
          style={{ color: skill.color }}
        ></span>
      </div>
    </div>
  );
}
export default SkillButton;
