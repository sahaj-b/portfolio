import { useState } from "react";
import StripedBox from "./StripedBox";
import Education from "./Education";
import Experience from "./Experience";
function Journey() {
  const [switched, setSwitched] = useState(false);

  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="flex space-x-2 text-center text-3xl font-bold">
        <div
          onClick={() => setSwitched(false)}
          className={"z-10 " + (switched && "cursor-pointer")}
        >
          <StripedBox
            bgColor={switched ? "bg-baseClr" : "bg-[var(--primary)]"}
            roundClass="rounded-l-full"
            padClass="p-3"
            hovered={!switched}
          >
            <span
              className={` ${switched ? "text-[var(--primary)]" : "text-baseClr"}`}
            >
              Education
            </span>
          </StripedBox>
        </div>
        <div
          onClick={() => setSwitched(true)}
          className={switched || "cursor-pointer"}
        >
          <StripedBox
            bgColor={switched ? "bg-[var(--primary)]" : "bg-baseClr"}
            roundClass="rounded-r-full"
            padClass="p-3"
            hovered={switched}
          >
            <span
              className={` ${switched ? "text-baseClr" : "text-[var(--primary)]"}`}
            >
              Experience
            </span>
          </StripedBox>
        </div>
      </div>
      {switched ? <Experience /> : <Education />}
    </div>
  );
}
export default Journey;
