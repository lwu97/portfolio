import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className="flex flex-col justify-center items-center">
        <img
          src={image}
          alt="project image"
          className="max-w-xs lg:max-w-sm object-cover"
        />

        <div className="flex-col pl-2 pt-3">
          <div className="h-7">
            <a
              href={source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center"
            >
              <h3 className="text-white font-mon font-bold text-[18px] group-hover:text-[20px] group-hover:text-green transition-all duration-200">
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
          </div>
          <p className="flex mt-2 text-beige text-[16px] font-mon  max-w-lg">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h4 className={styles.sectionSubText}>PROJECTS</h4>
      </motion.div>

      <div className="py-8 flex flex-col justify-center w-full items-center space-y-32">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
