import { BrowserRouter } from "react-router-dom";
import { EarthCanvas } from "./components/canvas";
import {
    About,
    Experience,
    Hero,
    Navbar,
    Tech,
    Works,
    StarsCanvas,
} from "./components";
// #171c14
// #1b2a2b
const App = () => {
    return (
        <BrowserRouter>
            <div className="bg-[#171c14]">
                <div className=" mx-auto min-h-screen max-w-screen-xl px-6 py-0 ">
                    <StarsCanvas />

                    <div className="flex justify-between gap-4">
                        <header className="sticky top-0 flex max-h-screen w-[48%] flex-col justify-between py-24">
                            <Navbar />
                            <div className="flex h-64">
                                {/* <EarthCanvas /> */}
                            </div>
                        </header>

                        {/* Right column - Scrollable content */}
                        <main className="w-[52%] py-6">
                            {/* <Hero /> */}

                            {/* <About /> */}
                            <Experience />
                            <Tech />
                            <Works />
                        </main>
                    </div>
                </div>
                {/* Left column - Static navbar */}
            </div>
        </BrowserRouter>
    );
};

export default App;
