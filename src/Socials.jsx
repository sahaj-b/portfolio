function Socials({ angleToggled, iconClass, accent, hovered }) {
  let striped = {
    backgroundImage: `repeating-linear-gradient(-45deg, #181825, #181825 7px, ${accent} 7px, ${accent} 12px)`,
    backgroundClip: "padding-box",
  };
  return (
    <div
      className={`rounded-full shadow-[inset_0_0_1px_1px_rgba(0,0,0,0.5)]`}
      style={striped}
    >
      <div
        className={`transition-all relative bg-base rounded-full px-2.5 py-1.5 cursor-pointer active:top-0 active:left-0
                    ${hovered ? (angleToggled ? "top-1 -left-1" : "-top-1 left-1") : "top-0 left-0"}
                    ${angleToggled ? "hover:top-0.5 hover:-left-0.5" : "hover:-top-0.5 hover:left-0.5"}`}
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
