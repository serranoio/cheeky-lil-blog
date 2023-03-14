import React, { FC, useState, useEffect } from "react";
import classes from "./Background.module.css";

interface BackgroundInterface {
  props: any;
}

const boundaries = 200; // how big

// Background:
// background implemented in all pages
const Background: FC = (props) => {
  // the logic here is that backgroundMover will range from -200 to 200.
  // changeDirection will change from 1, -1. It will be the incrementer
  // isChanged will determine if we need to change
  const [backgroundMover, setBackgroundMover] = useState(boundaries);
  const [changeDirection, setChangeDirection] = useState(-1);
  const [isChanged, setChange] = useState(false);

  useEffect(() => {
    // we create an interval function that adds changeDirection to backgroundMover
    // backgroundMover += changeDirection is new background position
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
    // We must only change setChangeDirection once
    if (Math.abs(backgroundMover) >= boundaries + 1 && isChanged === false) {
      setChange(true);
      setChangeDirection((prevDirection) => 0 - prevDirection); // flip direction
    }
    // we turn it back on once we've hit 0.
    if (backgroundMover === 0) {
      setChange(false);
    }
  }, [backgroundMover]);

  // calculates an integer for color
  const calcNumber = (start: number) => {
    return Math.floor(Math.abs(backgroundMover) * 0.025 + start);
  };

  // @ts-ignore
  return (
    <div
      className={classes.background}
      style={{
        backgroundSize: `${backgroundMover * 0.05 + 60}px ${
          // backgroundMover * .05 means that it ranges from -10 to 10. If we add 60, itll range from 50-70
          backgroundMover * 0.05 + 60
        }px`,
        backgroundImage: `linear-gradient(135deg, #0000 18.75%, rgb(${calcNumber(
          25
        )},${calcNumber(14)},${calcNumber(0)}) 0 31.25%, #0000 0),
    repeating-linear-gradient(45deg, rgb(${calcNumber(25)},${calcNumber(
          14
        )},${calcNumber(0)}) -6.25% 6.25%, #140b00 0 18.75%)`,
        backgroundPosition: `${backgroundMover * 0.075 + 60}% ${
          backgroundMover * 0.05 + 60 // backgroundMover * .05 means that it ranges from -10 to 10. If we add 60, itll range from 50-70
        }%`,
      }}
    >
      {props.children}
    </div>
  );
};

export default Background;
