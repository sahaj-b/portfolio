function StripedBox({
  children,
  angleToggled,
  clr = angleToggled ? "#89b4fa" : "#cba6f7",
  hovered = false,
  setHovered,
}) {
  let striped = {
    backgroundImage: `repeating-linear-gradient(-45deg, #181825, #181825 15px, ${clr} 15px, ${clr} 25px)`,
    backgroundAttachment: "fixed",
    backgroundClip: "padding-box",
    border: "1px solid " + clr,
  };

  return (
    <div
      className={`shadow-[inset_0_0_2px_2px_rgba(0,0,0,0.5)] bg-mantle rounded-xl`}
      style={striped}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`shadow-mantle shadow relative ${hovered ? (angleToggled ? "top-1 -left-1" : "-top-1 left-1") : angleToggled ? "top-2 -left-2" : "-top-2 left-2"} transition-all min-w-64 min-h-24 bg-base rounded-xl p-6`}
        style={{ border: "1px solid " + clr }}
      >
        {children}
      </div>
    </div>
  );
}

export default StripedBox;
