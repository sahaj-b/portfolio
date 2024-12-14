import MainCard from "./MainCard";
import DotsBackground from "./DotsBackground";
import Showcase from "./Showcase";
import { AngleToggledProvider } from "./context/angleToggledContext";
import Journey from "./Journey";

const App = () => {
  return (
    <div className="font-popins mt-10 flex min-h-screen flex-col items-center justify-center space-y-28 p-10 text-text">
      <DotsBackground />
      <AngleToggledProvider>
        <MainCard />
        <Showcase />
        <Journey />
      </AngleToggledProvider>
    </div>
  );
};

export default App;
