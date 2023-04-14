import React, { FC } from "react";
import { useInView } from "react-intersection-observer";
import classes from "./AboutShow.module.css";
import { motion } from "framer-motion";

interface AboutShowInterface {
  text: JSX.Element;
  i: number;
}

const AboutShow: FC<AboutShowInterface> = ({ text, i }) => {
  const { ref, inView, entry } = useInView({
    threshold: 0.75,
  });

  //   const show =
  //     scroller > i * separation + start - margin &&
  //     scroller < i * separation + start + margin;

  //   const paragraph = (
  //     <p key={i} className={`${classes.desc} ${show ? classes.show : ""}`}>
  //       {text}
  //     </p>
  //   );
  const paragraph = (
    <motion.p
      initial={{ scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      key={i}
      className={`${classes.desc} ${inView ? classes.show : ""}`}
      ref={ref}
    >
      {text}
    </motion.p>
  );

  return paragraph;
};

export default AboutShow;
