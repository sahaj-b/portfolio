import MainCard from "./MainCard";
import DotsBackground from "./DotsBackground";
import Showcase from "./Showcase";
import { AngleToggledProvider } from "./context/angleToggledContext";

const App = () => {
  return (
    <div className="font-popins mt-10 flex min-h-screen flex-col items-center justify-center space-y-10 p-10 text-text">
      <DotsBackground />
      <div className="mt-10"></div>
      <AngleToggledProvider>
        <MainCard />
        <div className="mt-10"></div>
        <Showcase />
      </AngleToggledProvider>
    </div>
  );
};

export default App;
