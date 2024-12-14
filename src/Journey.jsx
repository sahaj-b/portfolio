import { useState } from "react";
import StripedBox from "./StripedBox";
function Journey() {
  const [switched, setSwitched] = useState(false);

  return (
    <div>
      <div className="flex space-x-2 text-center text-3xl font-bold">
        <div
          onClick={() => setSwitched(false)}
          className={"z-10 " + switched && "cursor-pointer"}
        >
          <StripedBox
            bgColor={switched ? "bg-secondary" : "bg-[var(--primary)]"}
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
            bgColor={switched ? "bg-[var(--primary)]" : "bg-secondary"}
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
    </div>
  );
}
export default Journey;
