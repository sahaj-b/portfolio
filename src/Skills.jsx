import StripedBox from "./StripedBox";
import SkillButton from "./SkillButton";
import { useEffect, useState } from "react";

function Skills({ angleToggled, hoveredProjectSkills }) {
  const rosewater = "#f5e0dc";
  const flamingo = "#f2cdcd";
  const pink = "#f5c2e7";
  const mauve = "#cba6f7";
  const red = "#f38ba8";
  const maroon = "#eba0ac";
  const peach = "#fab387";
  const yellow = "#f9e2af";
  const green = "#a6e3a1";
  const teal = "#94e2d5";
  const sky = "#89dceb";
  const sapphire = "#74c7ec";
  const blue = "#89b4fa";
  const lavender = "#b4befe";
  const text = "#cdd6f4";

  const skills = {
    html: { name: "HTML", icon: "nf-dev-html5", color: peach },
    html2: { name: "HTML", icon: "nf-dev-html5", color: peach },
    html3: { name: "HTML", icon: "nf-dev-html5", color: peach },
    html4: { name: "HTML", icon: "nf-dev-html5", color: peach },
    html5: { name: "HTML", icon: "nf-dev-html5", color: peach },
    html6: { name: "HTML", icon: "nf-dev-html5", color: peach },
    html7: { name: "HTML", icon: "nf-dev-html5", color: peach },
    html8: { name: "HTML", icon: "nf-dev-html5", color: peach },
    html9: { name: "HTML", icon: "nf-dev-html5", color: peach },
    html10: { name: "HTML", icon: "nf-dev-html5", color: peach },
    html11: { name: "HTML", icon: "nf-dev-html5", color: peach },
  };
  const [hovered, setHovered] = useState(false);
  return (
    <div className="sticky top-10">
      <StripedBox
        angleToggled={angleToggled}
        fullDown
        hovered
        setHovered={setHovered}
      >
        <div className="flex flex-wrap justify-center items-center gap-4 w-32">
          {Object.keys(skills).map((skill, index) => (
            <SkillButton
              key={index}
              skill={skills[skill]}
              parentHovered={hovered || hoveredProjectSkills.includes(skill)}
              angleToggled={angleToggled}
            />
          ))}
        </div>
      </StripedBox>
    </div>
  );
}
export default Skills;
