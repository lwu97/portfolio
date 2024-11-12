import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 max-w-7xl mx-auto flex flex-row gap-5 items-center justify-center`}
      >
        
        <div>
          <h1 className={`${styles.heroHeadText} text-white font-[mursgothic-widedark] mb-40`}>
            <span className="text-white font-[mursgothic-widedark]">LEON WU.</span>
            {/* <p className={`${styles.heroSubText} mt-2 text-white font-[Abygaer]`}>
              I develop user <br className="sm:block hidden" />
              interfaces and web applications
            </p> */}
          </h1>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className="absolute xs:bottom-10 bottom-40 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] mb-20 rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
