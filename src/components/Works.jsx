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
  source_code_link
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      {/* <Tilt
                options={{ max: 45, scale: 1, speed: 450, reverse: true }}
                className="bg-transparent p-5 rounded-2xl sm:w-[360px] w-full"
            > */}
      <div className="flex justify-center ">
        <img src={image} alt="project image" className="w-1/4 object-cover" />

        <div className="flex-col pl-2 pt-3">
          <a
            href={source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center"
          >
            <h3 className="text-white font-mon font-bold text-[20px] group-hover:text-[22px] group-hover:text-green transition-all duration-300">
              {name}
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2 text-gray-400 group-hover:text-green transition-all duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
          <p className="flex mt-2 text-beige text-[18px] font-mon  max-w-lg">
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
        <h4 className={styles.sectionSubText}>PROJECTS</h4>
      </motion.div>

      <div className="py-8 flex flex-wrap justify-center w-full items-center gap-7 ">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
