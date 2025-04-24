import { BrowserRouter } from "react-router-dom";
import { About, Experience, Navbar, Tech, Works } from "./components";
import { fromsky } from "./assets";
import OvalWithName from "./components/OvalWithName";

const App = () => {
    return (
        <BrowserRouter>
            <div className="bg-[#1F1F1F]">
                <div className="mx-8 pt-32">
                    <Navbar />
                    <div className="flex w-full justify-center ">
                        <div className="flex flex-col w-full ml-10 ">
                            <h1
                                className={` text-white font-basement text-outline text-[110px]`}
                            >
                                LEON WU
                            </h1>
                            <h1
                                className={` text-white font-basement text-[96px] -mt-16`}
                            >
                                PORTFOLIO
                            </h1>
                            <div className="flex justify-end items-end w-full -mt-16">
                                <OvalWithName />
                            </div>
                        </div>
                        <div className="flex justify-center items-center w-full">
                            <div className="w-[500px] h-full">
                                <img className="object-cover" src={fromsky} />
                            </div>
                        </div>
                    </div>

                    <main className="w-[60%] py-6">
                        <Tech />
                        <Experience />
                        <Works />
                    </main>
                </div>
                {/* <EarthCanvas /> */}
            </div>
        </BrowserRouter>
    );
};

export default App;
