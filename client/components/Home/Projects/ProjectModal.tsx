// David Serrano, October 24th, 2023
// If you're reading this, welcome to my portfolio code
// Hope you enjoy it!
// Free AF. Take it all
// David Serrano, October 24th, 2023
// If you're reading this, welcome to my portfolio code
// Hope you enjoy it!
// Free AF. Take it all
import { FC } from "react";
import { motion } from "framer-motion";
import classes from "./Projects.module.css";
import { Project } from "@/store/data/project";
import Image, { StaticImageData } from "next/image";
import allbrite from "../../../public/assets/images/portfolio/AllbriteFamily.jpg";
import morning from "../../../public/assets/images/morning-sun.jpg";
import intent from "../../../public/assets/images/portfolio/intent.jpg";
import betsygiron from "../../../public/assets/images/portfolio/betsygiron.jpg";
import portfolio from "../../../public/assets/images/portfolio/Davidportfolio.jpg";
import mapsWithFriends from "../../../public/assets/images/portfolio/mapswithfriends.jpg";
import techChad from "../../../public/assets/images/portfolio/techchad.jpg";
import team8s from "../../../public/assets/images/portfolio/team8s.jpg";
import SectionModal from "@/components/SectionModal/SectionModal";
import headifier from "../../../public/assets/images/portfolio/headifier.png"
import accential from "../../../public/assets/images/portfolio/accential.png"
import soflare from "../../../public/assets/images/portfolio/soflare.png"

interface Props {
  isProjectOpened: boolean;
  openProject: any;
  chosenProject: Project | null;
  changeChosenProject: any;
}

const ProjectModal: FC<Props> = ({
  isProjectOpened,
  openProject,
  chosenProject,
  changeChosenProject,
}) => {
  const getChosenProject = (): StaticImageData | undefined => {
    if (chosenProject === null) return;

    if (chosenProject.type === 0) {
      return portfolio;
    } else if (chosenProject.type === 1) {
      return morning;
    } else if (chosenProject.type === 2) {
      return betsygiron;
    } else if (chosenProject.type === 3) {
      return techChad;
    } else if (chosenProject.type === 4) {
      return allbrite;
    } else if (chosenProject.type === 5) {
      return team8s;
    } else if (chosenProject.type === 6) {
      return mapsWithFriends;
    } else if (chosenProject.type === 7) {
      return intent;
    } else if (chosenProject.type === 8) {
      return accential
    } else if (chosenProject.type === 9) {
      return headifier;
    } else if (chosenProject.type === 10) {
      return soflare;
    }

    return techChad;
  };

  return (
    <SectionModal
      isOpened={isProjectOpened}
      open={openProject}
      size={{ x: 80, y: 40 }}
    >
      <div className={classes.flexModal}>
        <a
          href={chosenProject?.link}
          target="_blank"
          className={classes.chosenProjectLink + ` ${chosenProject?.link === "" ? classes.deprecated : ""}`}
        >
          <Image
            width={300}
            height={300}
            style={{
              objectFit: "cover",
            }}
            alt={chosenProject?.projectName as string}
            src={getChosenProject() as StaticImageData}
          />
        </a>
        <div className={classes.descBox}>
          <h2 className={classes.chosenProjectTitle}>
            {chosenProject?.projectName}
          </h2>
          <p className={classes.chosenProjectDesc}>
            {chosenProject?.description}
          </p>
        </div>
      </div>
    </SectionModal>
  );
};

export default ProjectModal;
