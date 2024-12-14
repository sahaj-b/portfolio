import { useContext } from "react";
import { AngleToggledContext } from "./context/angleToggledContext";
function StripedBox({
  children,
  setHovered = () => {},
  hovered = false,
  startAnimation = "",
}) {
  const angleToggled = useContext(AngleToggledContext).angleToggled;
  const clr = angleToggled ? "#89b4fa" : "#cba6f7";
  let striped = {
    backgroundImage: `repeating-linear-gradient(-45deg, #1e1e2e, #1e1e2e 15px, ${clr} 15px, ${clr} 25px)`,
    backgroundAttachment: "fixed",
    backgroundClip: "padding-box",
    border: "1px solid " + clr,
  };
  let positionLogic = "";
  if (hovered) {
    positionLogic = angleToggled ? "-left-1 top-1" : "-top-1 left-1";
  } else {
    positionLogic = angleToggled ? "-left-2 top-2" : "-top-2 left-2";
  }

  return (
    <div
      className={`rounded-xl bg-mantle shadow-[inset_0_0_2px_2px_rgba(0,0,0,0.5)]`}
      style={striped}
    >
      <div
        className={`${positionLogic} relative min-h-24 rounded-xl bg-baseClr p-6 shadow shadow-mantle transition-all ${startAnimation}`}
        style={{ border: "1px solid " + clr }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {children}
      </div>
    </div>
  );
}

export default StripedBox;
