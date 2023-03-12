import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
// import pocketbase from "../pocketbase/pocketbase";

import { mapper } from "@/functions/misc";
import { images } from "@/store/data/imageLocations";
import AbsoluteImage from "@/components/Misc/AbsoluteImage";

const boundaries = 200; // how big

export default function Home() {
  const [imagePosition, changeImagePosition] = useState({ x: 50, y: 50 });

  return (
    <section
      onMouseMove={(e: any) => {
        // we need to map 0,rectWidth to 40-60
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // console.log(mouseX);
        const r = e.target.getBoundingClientRect();

        const newPosition = {
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
              { start: 45, end: 55 }
            ).toFixed(2)
          ),
        };

        changeImagePosition(newPosition);
      }}
      className={styles.home}
    >
      <div className={`${styles.absolute} ${styles.react}`}></div>
      <div className={`${styles.absolute} ${styles.next}`}></div>
      <div className={`${styles.absolute} ${styles.typescript}`}></div>
      <div className={`${styles.absolute} ${styles.golang}`}></div>
      <div className={`${styles.absolute} ${styles.pocketbase}`}></div>
      <div
        style={{
          backgroundPosition: `50% ${imagePosition.y}%`,
        }}
        className={styles.background}
      ></div>
      <h1 className={styles.title}>
        David&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Serrano
      </h1>
    </section>
  );
}
