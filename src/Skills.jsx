import StripedBox from "./StripedBox";
import SkillButton from "./SkillButton";
import { useState } from "react";
import skills from "./data/skills.json";

function Skills({ hoveredProjectSkills }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="sticky top-20">
      <StripedBox setHovered={setHovered} hovered={hovered}>
        <h1
          className={`absolute top-0 left-0 w-full bg-[var(--primary)] rounded-t-xl py-2 text-center font-poppins text-3xl font-semibold text-baseClr`}
        >
          Skills
        </h1>
        <div className="mx-2 mt-20 flex w-60 flex-wrap items-center gap-x-8 gap-y-12">
          {skills.map((skill, index) => (
            <SkillButton
              key={index}
              skill={skill}
              parentHovered={
                hovered || hoveredProjectSkills.includes(skill.name)
              }
            />
          ))}
        </div>
        {/* <div className="mb-10 mt-16 text-center text-3xl font-bold text-subtext0 opacity-80"> */}
        {/*   Others */}
        {/* </div> */}
        {/* <div className="mx-2 mt-8 flex w-60 flex-wrap items-center justify-center gap-x-8 gap-y-12"> */}
        {/*   {Object.keys(skills.other).map((skill, index) => ( */}
        {/*     <SkillButton */}
        {/*       key={index} */}
        {/*       skill={skills.other[skill]} */}
        {/*       parentHovered={hovered || hoveredProjectSkills.includes(skill)} */}
        {/*     /> */}
        {/*   ))} */}
        {/* </div> */}
      </StripedBox>
    </div>
  );
}
export default Skills;
