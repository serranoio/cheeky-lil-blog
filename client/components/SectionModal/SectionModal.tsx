import { FC } from "react";
import { motion } from "framer-motion";
import classes from "./SectionModal.module.css";

interface ISection {
  children: any;
  isOpened: boolean;
  open: any;
}

const SectionModal: FC<ISection> = ({ children, isOpened, open }) => {
  const variantsShadow = {
    open: {
      opacity: 1,
      x: "-50%",
      y: "-50%",
      scale: 1,
      rotate: 0,
      transition: { staggerChildren: 1, delayChildren: 0.25 },
    },
    closed: {
      opacity: 0,
      scale: 0,
      x: "-50%",
      y: "-50%",
      rotate: 45,
      transition: { staggerChildren: 1, staggerDirection: -1 },
    },
  };

  const variantsShown = {
    open: {
      y: 0,
      opacity: 1,
      scale: 1,
      originY: 1,
      originX: 0.5,
      transition: {
        y: { stiffness: 5000, velocity: -500 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      scale: 0,
      originY: 1,
      originX: 0.5,
      transition: {
        y: { stiffness: 5000 },
      },
    },
  };

  return (
    <motion.div
      id="shadow"
      className={classes.shadow + " " + `${isOpened ? classes.show : ""}`}
      animate={isOpened ? "open" : "closed"}
      variants={variantsShadow}
      onClick={(e: any) => {
        if (e.target.id !== "shadow") return;

        open(false);
      }}
    >
      <motion.figure
        className={classes.card}
        id={"modal"}
        variants={variantsShown}
      >
        {children}
        <button
          className={classes.closeModal}
          onClick={() => {
            open(false);
          }}
        >
          x
        </button>
      </motion.figure>
    </motion.div>
  );
};

export default SectionModal;
