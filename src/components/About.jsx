import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import Tech from "./Tech";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full" options={{ reverse: true }}>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full bg-transparent p-[1px] rounded-[10px]"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-transparent rounded-[5px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-primary text-[20px] font-bold text-center font-[YDGothic 160 Pro]">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <div className="flex flex-col justify-center items-start w-full">
      <motion.div variants={textVariant()}>
        <h4 className={styles.sectionSubText}>ABOUT</h4>
      </motion.div>

      <div className="flex py-2">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className=" text-beige text-[28px] leading-[30px] font-mon font-light text-justify"
        >
          I’m a Full Stack developer with experience in React, Typescript,
          Next.js, Tailwind and Node.js. I’m passionate about both design and
          development, creating smooth, user-friendly experiences that look
          great and perform well. I focus on building fast, interactive
          applications that are as functional as they are visually appealing.
        </motion.p>
      </div>
      <div className="flex justify-center w-full">
        <Tech />
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
