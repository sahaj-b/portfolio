import StripedBox from "./StripedBox";
import SkillButton from "./SkillButton";
import { useState } from "react";
import { Header } from "./Showcase";
import skills from "./data/skills.json";

function Skills({ hoveredProjectSkills, headingFloating }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="sticky top-20">
      <StripedBox setHovered={setHovered} hovered={hovered}>
        <Header
          text={"Skills"}
          headingFloating={headingFloating}
          hiddenText={"Tech Stack"}
          hiddenTextSize={"text-2xl"}
        />
        <div className="mx-2 mt-8 flex w-60 flex-wrap items-center justify-center gap-x-8 gap-y-12">
          {Object.keys(skills.stack).map((skill, index) => (
            <SkillButton
              key={index}
              skill={skills.stack[skill]}
              parentHovered={hovered || hoveredProjectSkills.includes(skill)}
            />
          ))}
        </div>
        <div className="mb-10 mt-16 text-center text-3xl font-bold text-subtext0 opacity-80">
          Tools
        </div>
        <div className="mx-2 mt-8 flex w-60 flex-wrap items-center justify-center gap-x-8 gap-y-12">
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
