import tools from "./data/tools.json";
import ToolButton from "./ToolButton";
function Tools() {
  let striped = {
    backgroundImage: `linear-gradient(-45deg, var(--secondary) 25%, var(--primary) 25%, var(--primary) 50%, var(--secondary) 50%, var(--secondary) 75%, var(--primary) 75%, var(--primary) 100%)`,
    backgroundSize: "40px 40px",
    backgroundAttachment: "scroll",
    // border: "1px solid var(--primary)",
    transition: "all",
  };
  return (
    <div
      className="group mt-16 w-[60vw] relative"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
      }}
    >
      <div className="flex overflow-hidden relative top-8">
        <div className="flex animate-[marquee_26.5s_linear_infinite] group-hover:[animation-play-state:paused]">
          {tools.map((tool, index) => {
            return <ToolButton key={index} tool={tool} />;
          })}
          <div
            className={`absolute bottom-0 w-full h-10 -z-10 bg-[var(--primary)] opacity-70`}
            style={striped}
          ></div>
        </div>
        <div className="flex animate-[marquee2_26.5s_linear_infinite_13.25s] group-hover:[animation-play-state:paused]">
          {tools.map((tool, index) => {
            return <ToolButton key={index} tool={tool} />;
          })}
          <div
            className={`absolute bottom-0 w-full h-10 -z-10 bg-[var(--primary)] opacity-70`}
            style={striped}
          ></div>
        </div>
      </div>

      {/* bottom striped line */}
      <div className="mt-10 rounded-b-xl bg-baseClr p-5 text-center text-3xl font-semibold text-[var(--primary)]">
        Tools I Love
      </div>
    </div>
  );
}
export default Tools;
