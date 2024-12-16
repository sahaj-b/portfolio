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
      <div className="font-popins mt-10 flex min-h-screen flex-col items-center justify-center space-y-28 pt-10 pb-20 text-text">
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
