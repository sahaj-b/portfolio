import { useContext } from "react";
import { AngleToggledContext } from "./context/angleToggledContext";
function SkillButton({ skill, parentHovered }) {
  const angleToggled = useContext(AngleToggledContext).angleToggled;
  let striped = {
    backgroundImage: `repeating-linear-gradient(-45deg, var(--secondary), var(--secondary) 7px, var(--${skill.color}) 7px, var(--${skill.color}) 12px)`,
    backgroundAttachment: "fixed",
  };
  return (
    <div
      className={`relative rounded-full shadow-[inset_0_0_1px_1px_rgba(0,0,0,0.5)]`}
      style={striped}
    >
      <svg
        viewBox="0 0 200 50"
        className={`absolute -left-4 -top-[4.5rem] size-24 fill-text text-4xl transition-all ${parentHovered ? "scale-100" : "-top-full scale-0"}`}
      >
        <path
          id="semiCirclePath"
          d={"M 10,90 A 120,120 0 0,1 190,90"}
          fill="none"
        />
        <text>
          <textPath
            href="#semiCirclePath"
            startOffset="50%"
            textAnchor="middle"
            style={{ textShadow: "0px 0px 10px rgb(205, 214, 244, 0.5)" }}
          >
            {skill.name}
          </textPath>
        </text>
      </svg>
      <div
        className={`${
          parentHovered
            ? angleToggled
              ? "-left-1 top-2"
              : "-top-2 left-2"
            : "left-0 top-0"
        } ${angleToggled ? "hover:-left-0.5 hover:top-1" : "hover:-top-1 hover:left-1"} relative size-14 rounded-full bg-baseClr p-3 text-center transition-all duration-100 active:left-0 active:top-0`}
      >
        <span
          className={`nf ${skill.icon} text-3xl`}
          style={{ color: `var(--${skill.color})` }}
        ></span>
      </div>
    </div>
  );
}
export default SkillButton;
