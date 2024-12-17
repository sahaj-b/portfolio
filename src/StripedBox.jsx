import { useContext } from "react";
import { AngleToggledContext } from "./context/angleToggledContext";
function StripedBox({
  children,
  setHovered = () => {},
  hovered = false,
  startAnimation,
  bgColor = "bg-baseClr",
  roundClass = "rounded-xl",
  padClass = "p-6",
}) {
  const angleToggled = useContext(AngleToggledContext).angleToggled;
  let striped = {
    backgroundImage: `repeating-linear-gradient(-45deg, var(--secondary), var(--secondary) 15px, var(--primary) 15px, var(--primary) 25px)`,
    backgroundAttachment: "scroll",
    border: "1px solid var(--primary)",
  };
  let positionLogic = "";
  if (hovered) {
    positionLogic = angleToggled ? "-left-1 top-1" : "-top-1 left-1";
  } else {
    positionLogic = angleToggled ? "-left-2 top-2" : "-top-2 left-2";
  }

  return (
    <div
      className={`${roundClass} bg-mantle shadow-[inset_0_0_2px_2px_rgba(0,0,0,0.5)]`}
      style={striped}
    >
      <div
        className={`${positionLogic} relative ${roundClass} ${bgColor} ${padClass} shadow shadow-mantle transition-all ${startAnimation}`}
        style={{ border: "1px solid var(--primary)" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {children}
      </div>
    </div>
  );
}

export default StripedBox;
