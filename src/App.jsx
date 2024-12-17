import MainCard from "./MainCard";
import DotsBackground from "./DotsBackground";
import Showcase from "./Showcase";
import { AngleToggledProvider } from "./context/angleToggledContext";
import Journey from "./Journey";
import Tools from "./Tools";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <div className="font-popins flex flex-col items-center justify-center space-y-28 px-3 pb-20 pt-10 text-text md:bg-mantle">
        <DotsBackground />
        <AngleToggledProvider>
          <MainCard />
          <Showcase />
          <Journey />
          <Tools />
        </AngleToggledProvider>
      </div>
      <Footer />
    </>
  );
};

export default App;
