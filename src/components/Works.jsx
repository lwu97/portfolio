import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
}) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            {/* <Tilt
                options={{ max: 45, scale: 1, speed: 450, reverse: true }}
                className="bg-transparent p-5 rounded-2xl sm:w-[360px] w-full"
            > */}
            <div className="flex w-full items-center h-full gap-8">
                <img
                    src={image}
                    alt="project image"
                    className="w-1/2 h-auto object-cover"
                />

                <div className="flex-1">
                    <h3 className="text-white font-mon font-bold  text-[18px]">
                        {name}
                    </h3>
                    <p className="mt-2 text-secondary text-[14px] font-mon">
                        {description}
                    </p>
                </div>
            </div>
            {/* </Tilt> */}
        </motion.div>
    );
};

const Works = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <h2 className={styles.sectionHeadText}>PROJECTS</h2>
            </motion.div>

            <div className="pt-8 flex flex-wrap gap-7 w-full ">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={`project-${index}`}
                        index={index}
                        {...project}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Works, "projects");
