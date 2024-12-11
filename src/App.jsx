import { React, useState } from "react";
import StripedBox from "./StripedBox";
import MainCard from "./MainCard";
import DotsBackground from "./DotsBackground";
import Showcase from "./Showcase";

const App = () => {
  const [angleToggled, setAngleToggled] = useState(false);
  return (
    <div className="min-h-screen text-text flex flex-col items-center justify-center space-y-10 p-10">
      <DotsBackground />
      <div className="mt-10"></div>
      <MainCard angleToggled={angleToggled} setAngleToggled={setAngleToggled} />
      <div className="mt-10"></div>
      <Showcase angleToggled={angleToggled} />
    </div>
  );
};

export default App;
