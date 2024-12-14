import { useContext } from "react";
import { AngleToggledContext } from "./context/angleToggledContext";
function HeadShot({ hovered }) {
  const { angleToggled, setAngleToggled } = useContext(AngleToggledContext);
  let clr = angleToggled ? "#89b4fa" : "#cba6f7";
  let striped = {
    backgroundImage: `linear-gradient(-45deg, #1e1e2e 25%, ${clr} 25%, ${clr} 50%, #1e1e2e 50%, #1e1e2e 75%, ${clr} 75%, ${clr} 100%)`,
    backgroundSize: "40px 40px",
    backgroundAttachment: "scroll",
    border: "1px solid " + clr,
    transition: "all",
  };
  return (
    <>
      <div
        className={`size-36 animate-[moveStripes_2s_linear_infinite] rounded-full bg-text bg-fixed shadow-[inset_0_0_2px_2px_rgba(0,0,0,0.5)]`}
        style={striped}
      >
        {/* bg circle ^ */}
        {/* headshot circle */}
        <div
          className={`relative size-36 animate-[startHead_1s_ease-in-out] cursor-pointer rounded-full border-2 border-mantle bg-mauve shadow shadow-mantle transition-all ${angleToggled ? "hover:-left-1.5 hover:top-1.5" : "hover:-top-2 hover:left-1.5"} active:-top-0.5 active:left-0 ${hovered ? (angleToggled ? "-left-3 top-3" : "-top-3 left-3") : angleToggled ? "-left-2 top-2" : "-top-2 left-2"} `}
          onClick={() => setAngleToggled(!angleToggled)}
        ></div>
      </div>
    </>
  );
}
export default HeadShot;
