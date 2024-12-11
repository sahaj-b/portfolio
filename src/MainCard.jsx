import HeadShot from "./HeadShot.jsx";
import Socials from "./Socials.jsx";
import StripedBox from "./StripedBox.jsx";

import { useState } from "react";
function MainCard({ angleToggled, setAngleToggled }) {
  const [hovered, setHovered] = useState(false);
  return (
    <StripedBox
      angleToggled={angleToggled}
      setHovered={setHovered}
      hovered={hovered}
    >
      <div className="flex items-center justify-center space-x-16 w-[40em] h-44">
        <div className="absolute top-0 left-0 m-10">
          <HeadShot
            angleToggled={angleToggled}
            setAngleToggled={setAngleToggled}
            hovered={hovered}
          />
        </div>
        <div className={`flex flex-col justify-center space-y-2`}>
          <h1
            className={`relative -left-1 text-5xl ${angleToggled ? "font-play" : "font-poppins"}`}
          >
            Sahaj Bhatt
          </h1>
          <h2
            className={`text-2xl text-subtext1 font-poppins ${angleToggled ? "pt-3" : ""}`}
          >
            {angleToggled ? "FullStack Dev" : " Frontend Developer"}
            <span className={`font-play ${angleToggled ? "" : "hidden"}`}>
              {" Soon!"}
            </span>
          </h2>
          <h2 className="text-xl font-poppins font-light text-subtext0 pt-2">
            <span className="text-sm nf nf-oct-location relative -top-0.5"></span>
            {" Delhi, India"}
          </h2>
        </div>
        <div className="absolute flex flex-col space-y-2 top-4 right-5">
          <Socials
            angleToggled={angleToggled}
            iconClass="nf-fa-github"
            accent="#cdd6f4"
            hovered={hovered}
          />
          <Socials
            angleToggled={angleToggled}
            iconClass="nf-fa-linkedin"
            accent="#89b4fa"
            hovered={hovered}
          />
          <Socials
            angleToggled={angleToggled}
            iconClass="nf-fa-instagram"
            accent="#f38ba8"
            hovered={hovered}
          />
          <Socials
            angleToggled={angleToggled}
            iconClass="nf-fa-discord"
            accent="#b4befe"
            hovered={hovered}
          />
        </div>
      </div>
    </StripedBox>
  );
}
export default MainCard;
