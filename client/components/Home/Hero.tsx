// David Serrano, October 24th, 2023
// If you're reading this, welcome to my portfolio code
// Hope you enjoy it!
// Free AF. Take it all
// David Serrano, October 24th, 2023
// If you're reading this, welcome to my portfolio code
// Hope you enjoy it!
// Free AF. Take it all
import styles from "@/styles/Home.module.css";
import React, { useState } from "react";
import { mapper } from "@/functions/misc";

const Hero = () => {
  const [imagePosition, changeImagePosition] = useState({ x: 50, y: 50 });
  const [gradientPosition, changeGradientPosition] = useState(50);

  return (
    <section
      id="hero"
      onMouseMove={(e: any) => {
        // onMouseMove, we will changeImagePosition based on your mouse
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const r = document.querySelector("#hero")!.getBoundingClientRect();

        const newPosition: { x: number; y: number } = {
          x: Number(
            mapper(
              mouseX,
              { start: r.left, end: r.right },
              { start: 40, end: 60 }
            ).toFixed(2)
          ),
          y: Number(
            mapper(
              mouseY,
              { start: r.top, end: r.bottom },
              { start: 55, end: 45 }
            ).toFixed(2)
          ),
        };

        const newPositionG = mapper(
          mouseX,
          { start: r.left, end: r.right },
          { start: 0, end: 100 }
        );
        changeGradientPosition(Number(newPositionG));

        // changeGradientPosition(newPosition.x);
        changeImagePosition(newPosition);
      }}
      className={styles.home}
    >
      {/* pictures */}
      {/* <div className={`${styles.absolute} ${styles.react}`}></div>
        <div className={`${styles.absolute} ${styles.next}`}></div>
        <div className={`${styles.absolute} ${styles.typescript}`}></div>
        <div className={`${styles.absolute} ${styles.golang}`}></div>
        <div className={`${styles.absolute} ${styles.pocketbase}`}></div> */}
      <div className={styles.grid}>
        <div className={styles.center}>
          <div className={styles.titleBox}>
            <p>
              {" "}
              <span className={styles.makeLefty}>{"\u270C"}</span> i'm{" "}
            </p>
            <h1
              // onMouseMove={(e) => {
              //   const text = document
              //     .querySelector("#title")!
              //     .getBoundingClientRect();

              //   const newPosition = mapper(
              //     mouseX,
              //     { start: text.left, end: text.right },
              //     { start: 0, end: 100 }
              //   );
              //   changeGradientPosition(Number(newPosition));
              // }}
              style={{
                backgroundImage: `linear-gradient(
                  to right,
                  #ff512f ${0}%,
                  #f09819 ${gradientPosition}%,
                  #ff512f ${100}%
                )`,
              }}
              className={styles.title}
              id="title"
            >
              David Serrano,
            </h1>
            <h2 className={styles.secondaryTitle}>
              a Full-Stack Web Developer
            </h2>
          </div>
        </div>

        <div
          style={{
            backgroundPosition: `${imagePosition.x}% ${imagePosition.y}%`, // background image position changed
          }}
          className={styles.background}
          data-background="background"
        ></div>
      </div>
    </section>
  );
};

export default Hero;
