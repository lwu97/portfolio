import { BrowserRouter } from "react-router-dom";
import { About, Experience, Navbar, Works } from "./components";
import { fromsky } from "./assets";
import OvalWithName from "./components/OvalWithName";
import { EarthCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-[#171717]">
        <div className="mx-8">
          <Navbar />
          <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col items-center justify-start ml-auto mr-20">
              <div className="flex flex-col ">
                <h1
                  className={` text-white font-basement text-outline text-[110px]`}
                >
                  LEON WU
                </h1>
                <h1 className={` text-white font-basement text-[96px] -mt-16`}>
                  PORTFOLIO
                </h1>
                <div className="flex justify-end items-end w-full -mt-16">
                  <OvalWithName />
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center mr-auto ml-20">
              <div className="w-[600px] h-full">
                <img className="object-cover" src={fromsky} />
              </div>
            </div>
          </div>

          <main className="mx-auto">
            <About />
            <Experience />
            <Works />
          </main>
        </div>
        <EarthCanvas />
      </div>
    </BrowserRouter>
  );
};

export default App;
