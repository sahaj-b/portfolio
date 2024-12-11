import { React, useState } from "react";
import StripedBox from "./StripedBox.jsx";
import MainCard from "./MainCard.jsx";

const App = () => {
  const [angleToggled, setAngleToggled] = useState(false);
  return (
    <div className="min-h-screen bg-mantle text-text flex flex-col items-center justify-center space-y-10 p-10">
      <MainCard angleToggled={angleToggled} setAngleToggled={setAngleToggled} />
      <StripedBox angleToggled={angleToggled}>Hello World</StripedBox>
    </div>
  );
};

export default App;
