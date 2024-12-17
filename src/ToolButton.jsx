function ToolButton({ tool }) {
  let logo = "";
  if (tool.icon) {
    logo = (
      <div
        className={`nf rounded-full bg-baseClr p-3 text-5xl shadow-md shadow-black md:py-2 md:text-3xl ${tool.icon}`}
        style={{
          border: `2px solid var(--${tool.accent})`,
          color: `var(--${tool.accent})`,
        }}
      ></div>
    );
  } else {
    logo = (
      <div
        className={`size-[4.8rem] overflow-hidden rounded-full bg-baseClr shadow-md shadow-black md:size-14`}
        style={{
          border: `2px solid var(--${tool.accent})`,
          color: `var(--${tool.accent})`,
        }}
      >
        <img
          className={`size-20 md:size-auto md:pt-3 ${tool.name === "Wakapi" ? "p-2" : "p-3"} pt-2`}
          src={tool.iconImg}
          alt={tool.name}
        />
      </div>
    );
  }

  return (
    <div className="my-2 flex w-[7.7rem] flex-col items-center justify-center space-y-1 md:w-20">
      {logo}
      <span
        className="rounded-full bg-baseClr px-2 text-lg font-bold tracking-widest [transform:skewX(-40deg)] md:text-xs"
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
