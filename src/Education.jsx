import { useState } from "react";
import StripedBox from "./StripedBox";

function Education() {
  const [hovered, setHovered] = useState(false);
  let striped = {
    backgroundImage: `linear-gradient(-45deg, var(--secondary) 25%, var(--primary) 25%, var(--primary) 50%, var(--secondary) 50%, var(--secondary) 75%, var(--primary) 75%, var(--primary) 100%)`,
    backgroundSize: "40px 40px",
    backgroundAttachment: "scroll",
    border: "1px solid var(--primary)",
    transition: "all",
  };
  let data = [
    {
      heading: "Bachelor of Technology (Information Technology)",
      desc: "University School of Information and Technology, GGSIPU, Dwarka",
      duration: "2024-2028",
    },
    {
      heading: "Senior Secondary (10+2)",
      desc: "Jagdish Bal Mandir Public School, New Delhi",
      duration: "2012-2024",
    },
  ];
  return (
    <StripedBox hovered={hovered} setHovered={setHovered} padClass="p-10">
      <div className="flex flex-col space-y-8">
        <div className="relative flex items-center space-x-3">
          {/* circle */}
          <div className="z-10 size-8 rounded-full bg-[var(--primary)]"></div>
          {/* line */}
          <div
            className={`absolute -left-0 top-1/2 h-[calc(100%+1rem)] w-2 animate-[moveStripesReverse_2s_linear_infinite] bg-[var(--primary)] opacity-60
            ${hovered ? "[animation-play-state:running]" : "[animation-play-state:paused]"} `}
            style={striped}
          ></div>

          <div className="rounded-xl bg-surface0 p-4">
            <p className="text-2xl font-bold text-[var(--primary)]">
              {data[0].heading}
            </p>
            <p className="mt-1 text-xl text-subtext1">{data[0].desc}</p>
            <p className="mt-3 text-xl text-subtext0">{data[0].duration}</p>
          </div>
        </div>

        <div className="relative flex items-center space-x-3">
          {/* circle */}
          <div className="z-10 size-8 rounded-full bg-[var(--primary)] opacity-60"></div>
          <div className="rounded-xl bg-surface0 p-4">
            <p className="text-2xl font-bold text-[var(--primary)]">
              {data[1].heading}
            </p>
            <p className="mt-1 text-xl text-subtext1">{data[1].desc}</p>
            <p className="mt-3 text-xl text-subtext0">{data[1].duration}</p>
          </div>
        </div>
      </div>
    </StripedBox>
  );
}
export default Education;
