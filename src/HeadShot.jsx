import { useState } from "react";
function HeadShot({ angleToggled, setAngleToggled, hovered }) {
  let clr = angleToggled ? "#89b4fa" : "#cba6f7";
  let striped = {
    backgroundImage: `linear-gradient(-45deg, #181825 25%, ${clr} 25%, ${clr} 50%, #181825 50%, #181825 75%, ${clr} 75%, ${clr} 100%)`,
    backgroundSize: "40px 40px",
    backgroundAttachment: "scroll",
    border: "1px solid " + clr,
    transition: "all",
  };
  return (
    <>
      <div
        className={` size-36 rounded-full bg-text shadow-[inset_0_0_2px_2px_rgba(0,0,0,0.5)] animate-[moveStripes_2s_linear_infinite] bg-fixed`}
        style={striped}
      >
        {/* bg circle ^ */}
        {/* headshot circle */}
        <div
          className={`transition-all relative shadow-mantle shadow  size-36 rounded-full bg-mauve border-mantle border-2 cursor-pointer animate-[startHead_1.5s_ease-in-out]
                    ${angleToggled ? "hover:top-1.5 hover:-left-1.5" : "hover:-top-2 hover:left-1.5"}
                    active:-top-0.5 active:left-0
                    ${hovered ? (angleToggled ? "top-3 -left-3" : "-top-3 left-3 ") : angleToggled ? "top-2 -left-2" : "-top-2 left-2 "}
                    
          `}
          onClick={() => setAngleToggled(!angleToggled)}
        ></div>
      </div>
    </>
  );
}
export default HeadShot;
