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
            <div className="bg-[#030e0a]">
                <div className=" mx-auto min-h-screen max-w-screen-xl px-6 py-0 ">
                    <StarsCanvas />

                    <div className="flex justify-between gap-4">
                        <header className="sticky top-0 flex max-h-screen w-[48%] flex-col justify-between py-24">
                            <Navbar />
                            <div className="flex h-64"></div>
                        </header>

                        {/* Right column - Scrollable content */}
                        <main className="w-[52%] py-6">
                            <Tech />
                            {/* <Experience /> */}
                            <Works />
                        </main>
                    </div>
                    <EarthCanvas />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
