import { Icon } from "@iconify/react";

function ToolButton({ tool }) {
  let logo = "";
  if (tool.icon) {
    logo = (
      <Icon
        icon={tool.icon}
        className={`rounded-full bg-baseClr p-2 text-7xl shadow-md shadow-black md:py-2 md:text-6xl`}
        style={{
          border: `2px solid var(--${tool.accent})`,
          color: `var(--${tool.accent})`,
        }}
      ></Icon>
    );
  } else {
    logo = (
      <div
        className={`flex justify-center size-[4.8rem] overflow-hidden rounded-full bg-baseClr shadow-md shadow-black md:size-14`}
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
        className="rounded-full bg-baseClr px-2 text-lg font-bold tracking-widest [transform:skewX(-40deg)] md:text-xs text-nowrap"
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
