import StripedBox from "./StripedBox";
import SkillButton from "./SkillButton";
import { useEffect, useState } from "react";
import { Header } from "./Showcase";
import skills from "./data/skills.json";

function Skills({ hoveredProjectSkills, headingFloating, setHeadingFloating }) {
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    setHeadingFloating(hovered);
  }, [hovered, setHeadingFloating]);
  return (
    <div className="sticky top-20">
      <StripedBox setHovered={setHovered} hovered={headingFloating}>
        <Header
          text={"Skills"}
          headingFloating={headingFloating}
          hiddenText={"Tech Stack"}
          hiddenTextSize={"text-2xl"}
        />
        <div className="flex w-60 flex-wrap items-center justify-center gap-x-8 gap-y-12 mt-8 mx-2">
          {Object.keys(skills.stack).map((skill, index) => (
            <SkillButton
              key={index}
              skill={skills.stack[skill]}
              parentHovered={hovered || hoveredProjectSkills.includes(skill)}
            />
          ))}
        </div>
        <div className="text-3xl text-subtext0 text-center font-bold opacity-80 mt-16 mb-10">
          Tools
        </div>
        <div className="flex w-60 flex-wrap items-center justify-center gap-x-8 gap-y-12 mt-8 mx-2">
          {Object.keys(skills.tools).map((skill, index) => (
            <SkillButton
              key={index}
              skill={skills.tools[skill]}
              parentHovered={hovered || hoveredProjectSkills.includes(skill)}
            />
          ))}
        </div>
      </StripedBox>
    </div>
  );
}
export default Skills;
