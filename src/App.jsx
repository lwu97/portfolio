import { BrowserRouter } from "react-router-dom";
import { About, Experience, Navbar, Works } from "./components";
import { fromsky } from "./assets";
import OvalWithName from "./components/OvalWithName";
import { EarthCanvas } from "./components";
import { motion } from "framer-motion";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-[`#171717`]">
        <div className="mx-4 sm:mx-12 md:mx-16 lg:mx-4">
          <Navbar />
          <div className="flex flex-col justify-center items-center min-h-full lg:flex-row lg:min-h-[800px] pt-16 lg:ml-auto ">
            <div className="flex flex-col items-center justify-center lg:flex-row lg:ml-auto lg:mr-8 xl:pt-24">
              <div className="flex flex-col">
                <motion.h1
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  animate={{ clipPath: "inset(0 0% 0 0)" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`text-[56px] sm:text-[64px] md:text-[96px] text-white font-basement text-outline lg:text-[92px] xl:text-[106px]`}
                >
                  LEON WU
                </motion.h1>

                <motion.h1
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  animate={{ clipPath: "inset(0 0% 0 0)" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className={`text-[50px] sm:text-[58px] md:text-[86px] -mt-6 sm:-mt-8 md:-mt-10 text-white font-basement lg:text-[78x] lg:-mt-14 xl:text-[100px] xl:-mt-16`}
                >
                  PORTFOLIO
                </motion.h1>

                <motion.div
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  animate={{ clipPath: "inset(0 0% 0 0)" }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                  className="flex justify-end items-end -mt-8"
                >
                  <OvalWithName />
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
              className="flex justify-center items-center w-full lg:max-w-lg lg:mr-auto lg:ml-8 xl:max-w-xl"
            >
              <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-lg xl:max-w-xl">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-auto object-cover"
                  src={fromsky}
                  alt="From sky view"
                />
              </div>
            </motion.div>
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
