import StripedBox from "./StripedBox";
import { useContext } from "react";
import { AngleToggledContext } from "./context/angleToggledContext";

function Experience() {
  const angleToggled = useContext(AngleToggledContext).angleToggled;
  return (
    <StripedBox padClass="p-20">
      <div className="text-center flex flex-col justify-center h-52 text-3xl font-bold text-subtext0 opacity-80">
        {angleToggled
          ? "Loading... Please wait for few months"
          : "Error 404: Not Found"}
        <p className={`${angleToggled ? "hidden" : ""} mt-2 font-play text-xl`}>
          (Yet)
        </p>
      </div>
    </StripedBox>
  );
}
export default Experience;
