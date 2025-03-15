import { useContext } from "react";
import { AngleToggledContext } from "./context/angleToggledContext";
import { Icon } from "@iconify/react";
function Socials({ link, iconClass, accent, parentHovered, copyText }) {
  const angleToggled = useContext(AngleToggledContext).angleToggled;
  let striped = {
    backgroundImage: `repeating-linear-gradient(-45deg, var(--secondary), var(--secondary) 7px, var(--${accent}) 7px, var(--${accent}) 12px)`,
    backgroundAttachment: "scroll",
  };
  return (
    <div
      className={`rounded-full shadow-[inset_0_0_1px_1px_rgba(0,0,0,0.5)]`}
      style={striped}
      onClick={
        copyText
          ? () =>
              navigator.clipboard.writeText(copyText) &&
              alert("Copied username " + copyText + " to clipboard")
          : () => window.open(link, "_blank")
      }
    >
      <div
        className={`relative animate-[startSocials_0.5s_ease-in-out] cursor-pointer rounded-full bg-baseClr px-2.5 py-1.5 transition-all duration-150 active:left-0 active:top-0 ${parentHovered ? (angleToggled ? "-left-1 top-1" : "-top-1 left-1") : "left-0 top-0"} ${angleToggled ? "hover:-left-0.5 hover:top-0.5" : "hover:-top-0.5 hover:left-0.5"}`}
      >
        <Icon
          icon={iconClass}
          className="text-2xl my-1"
          style={{ color: `var(--${accent})` }}
        />
      </div>
    </div>
  );
}
export default Socials;
