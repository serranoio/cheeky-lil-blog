import React, { FC } from "react";
import classes from "./AbsoluteImage.module.css";

interface AbsoluteImageInterface {
  left: number;
  top: number;
  src: string;
}

const AbsoluteImage: FC<AbsoluteImageInterface> = ({
  left,
  top,
  src,
}): JSX.Element => {
  return (
    <img
      src={`${require(src)}`}
      alt={"typescript"}
      style={{
        left: left,
        top: top,
      }}
      className={classes.image}
    />
  );
};

export default AbsoluteImage;
