function StripedBox({
  children,
  angleToggled,
  clr = angleToggled ? "#89b4fa" : "#cba6f7",
  hovered = false,
  setHovered = () => {},
  startAnimation = "",
  fullDown = false,
}) {
  let striped = {
    backgroundImage: `repeating-linear-gradient(-45deg, #1e1e2e, #1e1e2e 15px, ${clr} 15px, ${clr} 25px)`,
    backgroundAttachment: "fixed",
    backgroundClip: "padding-box",
    border: "1px solid " + clr,
  };

  return (
    <div
      className={`shadow-[inset_0_0_2px_2px_rgba(0,0,0,0.5)] bg-mantle rounded-xl`}
      style={striped}
    >
      <div
        className={`shadow-mantle shadow relative ${fullDown ? "hover:top-0 hover:left-0" : angleToggled ? "hover:top-1 hover:-left-1" : "hover:-top-1 hover:left-1"} ${angleToggled ? "top-2 -left-2" : "-top-2 left-2"} transition-all min-w-64 min-h-24 bg-base rounded-xl p-6 ${startAnimation}`}
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
