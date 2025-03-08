import { useContext } from "react";
import { AngleToggledContext } from "./context/angleToggledContext";
import { Icon } from "@iconify/react";
function SkillButton({ skill, parentHovered }) {
  const angleToggled = useContext(AngleToggledContext).angleToggled;
  let striped = {
    backgroundImage: `repeating-linear-gradient(-45deg, var(--secondary), var(--secondary) 7px, var(--${skill.color}) 7px, var(--${skill.color}) 12px)`,
    backgroundAttachment: "scroll",
  };
  let icon = "";
  if (skill.icon) {
    icon = (
      <Icon
        icon={skill.icon}
        className="text-4xl"
        style={{ color: `var(--${skill.color})` }}
      ></Icon>
    );
  } else {
    icon = (
      <img
        src={skill.iconImg}
        alt={skill.name}
        style={{ color: `var(--${skill.color})` }}
      ></img>
    );
  }
  return (
    <div
      className={`relative rounded-full shadow-[inset_0_0_1px_1px_rgba(0,0,0,0.5)]`}
      style={striped}
    >
      <svg
        viewBox="0 0 200 50"
        className={`absolute -left-4 -top-[4.5rem] size-24 fill-text text-4xl transition-all md:-left-2 md:-top-[3.2rem] md:size-16 ${parentHovered ? "scale-100" : "-top-full scale-0"}`}
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
              ? "-left-1 top-1.5 md:-left-0.5 md:top-1"
              : "-top-1.5 left-1.5 md:-top-1 md:left-1"
            : "left-0 top-0"
        } relative size-14 overflow-hidden rounded-full bg-baseClr p-2.5 text-center transition-all duration-100 md:size-9 md:p-0.5`}
      >
        {icon}
      </div>
    </div>
  );
}
export default SkillButton;
