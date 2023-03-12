import React, { FC, useState, useEffect } from "react";
import classes from "./Background.module.css";

interface BackgroundInterface {
  props: any;
}

const boundaries = 200; // how big

const Background: FC = (props) => {
  const [backgroundMover, setBackgroundMover] = useState(boundaries);
  const [changeDirection, setChangeDirection] = useState(-1);
  const [isChanged, setChange] = useState(false);

  useEffect(() => {
    const timerFunction = () => {
      setBackgroundMover((prevState: number) => {
        prevState += changeDirection;
        return prevState;
      });
    };
    const time = setInterval(timerFunction, 50); // speed

    return () => clearInterval(time);
  }, [backgroundMover]);

  useEffect(() => {
    if (Math.abs(backgroundMover) >= boundaries + 1 && isChanged === false) {
      setChange(true);
      setChangeDirection((prevDirection) => 0 - prevDirection);
    }
    if (backgroundMover === 0) {
      setChange(false);
    }
  }, [backgroundMover]);

  const calcNumber = (start: number) => {
    return Math.floor(Math.abs(backgroundMover) * 0.025 + start);
  };

  // @ts-ignore
  return (
    <div
      className={classes.background}
      style={{
        backgroundSize: `${backgroundMover * 0.05 + 60}px ${
          backgroundMover * 0.05 + 60
        }px`,
        backgroundImage: `linear-gradient(135deg, #0000 18.75%, rgb(${calcNumber(
          25
        )},${calcNumber(14)},${calcNumber(0)}) 0 31.25%, #0000 0),
    repeating-linear-gradient(45deg, rgb(${calcNumber(25)},${calcNumber(
          14
        )},${calcNumber(0)}) -6.25% 6.25%, #140b00 0 18.75%)`,
      }}
    >
      {props.children}
    </div>
  );
};

export default Background;
