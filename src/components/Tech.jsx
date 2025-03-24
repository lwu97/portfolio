import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const Tech = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <h2 className={styles.sectionHeadText}>TECHNOLOGIES</h2>
            </motion.div>
            <div className="flex flex-row flex-wrap justify-start gap-10 py-6">
                {technologies.map((technology) => (
                    <div className="w-28 h-28" key={technology.name}>
                        <BallCanvas icon={technology.icon} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Tech, "tech");
