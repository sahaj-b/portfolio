import { useState, useContext, useEffect } from "react";
import HeadShot from "./HeadShot.jsx";
import Socials from "./Socials.jsx";
import StripedBox from "./StripedBox.jsx";
import { AngleToggledContext } from "./context/angleToggledContext";

function MainCard({}) {
  const angleToggled = useContext(AngleToggledContext).angleToggled;
  useEffect(() => {
    if (angleToggled) {
      document.documentElement.style.setProperty("--primary", "var(--blue)");
    } else {
      document.documentElement.style.setProperty("--primary", "var(--mauve)");
    }
  }, [angleToggled]);
  const [hovered, setHovered] = useState(false);
  return (
    <StripedBox
      setHovered={setHovered}
      startAnimation="animate-[startCard_0.5s_ease-in-out]"
      hovered={hovered}
    >
      <div className="flex h-44 w-[40em] items-center justify-center space-x-16">
        <div className="absolute left-0 top-0 m-10">
          <HeadShot hovered={hovered} />
        </div>
        <div className={`flex flex-col justify-center space-y-2`}>
          <h1
            className={`relative -left-1 text-5xl tracking-wide ${angleToggled ? "font-play" : "font-poppins"}`}
          >
            Sahaj Bhatt
          </h1>
          <h2
            className={`font-poppins text-2xl text-subtext1 ${angleToggled ? "pt-3" : ""}`}
          >
            {angleToggled ? "FullStack Dev" : "Frontend Dev"}
            <span className={`font-play`}>
              {angleToggled ? " soon!" : ", for now"}
            </span>
          </h2>
          <h2 className="pt-2 font-poppins text-xl font-light text-subtext0">
            <span className="nf nf-oct-location relative -top-0.5 text-sm"></span>
            {" Delhi, India"}
          </h2>
        </div>
        <div className="absolute right-5 top-4 flex flex-col space-y-2">
          <Socials
            iconClass="nf-fa-github"
            accent="#cdd6f4"
            parentHovered={hovered}
          />
          <Socials
            iconClass="nf-fa-linkedin"
            accent="#89b4fa"
            parentHovered={hovered}
          />
          <Socials
            iconClass="nf-fa-instagram"
            accent="#f38ba8"
            parentHovered={hovered}
          />
          <Socials
            iconClass="nf-fa-discord"
            accent="#b4befe"
            parentHovered={hovered}
          />
        </div>
      </div>
    </StripedBox>
  );
}
export default MainCard;
