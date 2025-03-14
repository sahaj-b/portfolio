import { useState, useContext, useEffect } from "react";
import HeadShot from "./HeadShot.jsx";
import Socials from "./Socials.jsx";
import StripedBox from "./StripedBox.jsx";
import { AngleToggledContext } from "./context/angleToggledContext";
import { Icon } from "@iconify/react";

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
      <div className="flex h-44 w-[40em] items-center justify-center md:h-full md:w-[80vw] md:flex-col">
        <div className="absolute left-0 top-0 m-10 md:mx-28">
          <HeadShot hovered={hovered} />
        </div>
        <div
          className={`ml-16 flex flex-col justify-center space-y-2 md:mb-20 md:ml-0 md:mt-5`}
        >
          <h1
            className={`relative -left-1 text-5xl tracking-wide md:mt-44 ${angleToggled ? "font-play" : "font-poppins"}`}
          >
            Sahaj Bhatt
          </h1>
          <h2
            className={`font-poppins text-2xl text-subtext1 ${angleToggled ? "pt-3" : ""}`}
          >
            Fullstack Web Developer
            {/* {angleToggled ? "FullStack Dev" : "Frontend Dev"} */}
            {/* <span className={`font-play`}> */}
            {/*   {angleToggled ? " soon!" : ", for now"} */}
            {/* </span> */}
          </h2>
          <h2 className="pt-2 font-poppins text-xl font-light text-subtext0">
            <Icon
              icon="fluent:location-16-regular"
              className="inline relative text-md -top-0.5"
            />
            {" Delhi, India"}
          </h2>
        </div>
        <div className="absolute right-5 top-3 flex flex-col space-y-2 md:bottom-4 md:right-auto md:top-auto md:flex-row md:space-x-2 md:space-y-0">
          <Socials
            iconClass="mdi:github"
            accent="text"
            parentHovered={hovered}
            link="https://github.com/sahaj-b"
          />
          <Socials
            iconClass="mdi:linkedin"
            accent="blue"
            parentHovered={hovered}
            link="https://www.linkedin.com/in/sahaj-bhatt-9b8b381b0/"
          />
          <Socials
            iconClass="ri:twitter-x-fill"
            accent="text"
            parentHovered={hovered}
            link="https://x.com/sahajb0606?t=kyDZxXb5766osaZvX7guEw&s=08"
          />
          <Socials
            iconClass="mdi:discord"
            accent="lavender"
            parentHovered={hovered}
            copyText="sens3459"
          />
        </div>
      </div>
    </StripedBox>
  );
}
export default MainCard;
