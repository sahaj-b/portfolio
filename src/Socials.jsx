import { useContext } from "react";
import { AngleToggledContext } from "./context/angleToggledContext";
function Socials({ iconClass, accent, parentHovered }) {
  const angleToggled = useContext(AngleToggledContext).angleToggled;
  let striped = {
    backgroundImage: `repeating-linear-gradient(-45deg, var(--secondary), var(--secondary) 7px, ${accent} 7px, ${accent} 12px)`,
    backgroundClip: "padding-box",
  };
  return (
    <div
      className={`rounded-full shadow-[inset_0_0_1px_1px_rgba(0,0,0,0.5)]`}
      style={striped}
    >
      <div
        className={`relative animate-[startSocials_0.5s_ease-in-out] cursor-pointer rounded-full bg-baseClr px-2.5 py-1.5 transition-all duration-100 active:left-0 active:top-0 ${parentHovered ? (angleToggled ? "-left-1 top-1" : "-top-1 left-1") : "left-0 top-0"} ${angleToggled ? "hover:-left-0.5 hover:top-0.5" : "hover:-top-0.5 hover:left-0.5"}`}
      >
        <span
          className={`nf ${iconClass} text-xl`}
          style={{ color: accent }}
        ></span>
      </div>
    </div>
  );
}
export default Socials;
