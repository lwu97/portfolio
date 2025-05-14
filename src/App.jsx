import { BrowserRouter } from "react-router-dom";
import { About, Experience, Navbar, Works } from "./components";
import { fromsky } from "./assets";
import OvalWithName from "./components/OvalWithName";
import { EarthCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-[#171717]">
        <div className="mx-4 sm:mx-12 md:mx-16 lg:mx-4">
          <Navbar />
          <div className="flex flex-col justify-center items-center min-h-full lg:flex-row lg:min-h-[800px] pt-16 lg:ml-auto xl:bg-red-200">
            <div className="flex flex-col items-center justify-center lg:flex-row lg:mr-auto lg:ml-auto">
              <div className="flex flex-col ">
                <h1
                  className={`text-[56px] sm:text-[64px] md:text-[96px] text-white font-basement text-outline lg:text-[72px]`}
                >
                  LEON WU
                </h1>
                <h1
                  className={`text-[50px] sm:text-[58px] md:text-[86px] -mt-6 sm:-mt-8 md:-mt-10 text-white font-basement lg:text-[64px]`}
                >
                  PORTFOLIO
                </h1>
                <div className="flex justify-end items-end -mt-8">
                  <OvalWithName />
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center w-full lg:max-w-lg lg:mr-auto">
              <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-lg">
                <img
                  className="w-full h-auto object-cover"
                  src={fromsky}
                  alt="From sky view"
                />
              </div>
            </div>
          </div>

          <main className="mx-auto my-8 px-8">
            <About />
            {/* <Experience /> */}
            <Works />
          </main>
        </div>
        <EarthCanvas />
      </div>
    </BrowserRouter>
  );
};

export default App;
