import { useEffect, useState } from "react";
import classes from "./Projects.module.css";
import { sep } from "path";
import { useInView } from "react-intersection-observer";
import { Project, allProjects, typesNames } from "@/functions/project";
import { motion } from "framer-motion";
import Image from "next/image";
import { ProjectTechLogos } from "./ProjectTechLogos";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const { ref: refTitle, inView: inViewTitle } = useInView({
    threshold: 0.75,
  });
  const { ref: refDesc, inView: inViewDesc } = useInView({
    threshold: 0.75,
  });
  const { ref: refGrid, inView: inViewGrid } = useInView({
    threshold: 0.5,
  });

  const [onHover, changeOnHover] = useState(typesNames.map(() => 0));
  const [isProjectOpened, openProject] = useState<boolean>(false);
  const [chosenProject, changeChosenProject] = useState<Project | null>(null);

  const variants = {
    open: {
      opacity: 1,
      x: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
    closed: {
      opacity: 0,
      x: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const variantsFigure = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <section className={classes.section}>
      <h2
        ref={refTitle}
        className={`${classes.title} ${inViewTitle ? classes.inView : ""}`}
      >
        My Work
      </h2>

      <motion.div
        className={`${classes.projectGrid} ${inViewGrid ? classes.inView : ""}`}
        ref={refGrid}
        animate={inViewGrid ? "open" : "closed"}
        variants={variants}
        id={"projects"}
        onClick={(e: any) => {
          if (e.target.nodeName === "DIV") return;
          const projectNum: number = e.target.closest("figure").dataset.project;

          openProject(true);
          changeChosenProject(allProjects[projectNum]);
        }}
        onMouseLeave={() => {
          changeOnHover(typesNames.map(() => 0));
        }}
        onMouseOver={(e: any) => {
          changeOnHover(typesNames.map(() => 0));
          if (e.target.nodeName === "DIV") return;

          const projectNum: number = e.target.closest("figure").dataset.project;
          const projectTechStack = allProjects[projectNum].techStack;
          changeOnHover((prevState: number[]) => {
            const newState = prevState.map((_: number, i: number) => {
              return projectTechStack.includes(i) ? 1 : 0;
            });

            return newState;
          });
        }}
      >
        {allProjects.map((project: Project, i: number) => {
          return (
            <motion.figure
              variants={variantsFigure}
              data-project={i}
              className={classes.project}
              key={i}
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                gridArea: project.area,
              }}
            >
              <p className={classes.link}>{project.projectName}</p>
            </motion.figure>
          );
        })}
        <ProjectTechLogos onHover={onHover} />
      </motion.div>
      <ProjectModal
        isProjectOpened={isProjectOpened}
        openProject={openProject}
        chosenProject={chosenProject}
        changeChosenProject={changeChosenProject}
      />
    </section>
  );
};

export default Projects;
