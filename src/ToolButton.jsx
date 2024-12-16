function ToolButton({ tool }) {
  let logo = "";
  if (tool.icon) {
    logo = (
      <div
        className={`nf mx-5 rounded-full bg-baseClr p-3 text-5xl shadow-md shadow-black ${tool.icon}`}
        style={{
          border: `2px solid var(--${tool.accent})`,
          color: `var(--${tool.accent})`,
        }}
      ></div>
    );
  } else {
    logo = (
      <div
        className={`mx-5 rounded-full bg-baseClr size-[4.8rem] shadow-md shadow-black overflow-hidden`}
        style={{
          border: `2px solid var(--${tool.accent})`,
          color: `var(--${tool.accent})`,
        }}
      >
        <img
          className={`size-20 ${tool.name === "Wakapi" ? "p-2" : "p-3"} pt-2`}
          src={tool.iconImg}
          alt={tool.name}
        />
      </div>
    );
  }

  return (
    <div className="w-[7.5rem] flex flex-col items-center justify-center space-y-1">
      {logo}
      <span
        className="text-lg [transform:skewX(-40deg)] font-bold bg-baseClr rounded-full px-2 tracking-widest"
        style={{
          color: `var(--${tool.accent})`,
          textShadow: "0px 0px 5px rgb(205, 214, 244, 0.5)",
        }}
      >
        {tool.name}
      </span>
    </div>
  );
}
export default ToolButton;
