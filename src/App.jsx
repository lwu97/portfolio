import { BrowserRouter } from "react-router-dom";
import { EarthCanvas } from "./components/canvas";
import {
    About,
    Experience,
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
            <div className="bg-[#121110]">
                <div className="min-h-screen max-w-screen-xl px-20 ml-0 mr-auto">
                    {/* <StarsCanvas /> */}

                    <div className="flex justify-between gap-4">
                        <header className="sticky top-0 flex max-h-screen w-[40%] flex-col justify-start py-12">
                            <Navbar />
                            <div className="flex h-64"></div>
                        </header>

                        {/* Right column - Scrollable content */}
                        <main className="w-[60%] py-6">
                            <Tech />
                            <Experience />
                            <Works />
                        </main>
                    </div>
                </div>
                {/* <EarthCanvas /> */}
            </div>
        </BrowserRouter>
    );
};

export default App;
