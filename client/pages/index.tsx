import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { mapper } from "@/functions/misc";
import { images } from "@/store/data/imageLocations";
import AbsoluteImage from "@/components/Misc/AbsoluteImage";

// This is the home page of the entire website
export default function Home() {
  const [imagePosition, changeImagePosition] = useState({ x: 50, y: 50 });

  return (
    <section
      onMouseMove={(e: any) => {
        // onMouseMove, we will changeImagePosition based on your mouse
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const r = document
          .querySelector("div[data-background='background']")!
          .getBoundingClientRect();

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

        changeImagePosition(newPosition);
      }}
      className={styles.home}
    >
      {/* pictures */}
      <div className={`${styles.absolute} ${styles.react}`}></div>
      <div className={`${styles.absolute} ${styles.next}`}></div>
      <div className={`${styles.absolute} ${styles.typescript}`}></div>
      <div className={`${styles.absolute} ${styles.golang}`}></div>
      <div className={`${styles.absolute} ${styles.pocketbase}`}></div>
      <div
        style={{
          backgroundPosition: `50% ${imagePosition.y}%`, // background image position changed
        }}
        className={styles.background}
        data-background="background"
      ></div>
      <h1 className={styles.title}>
        David&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Serrano
      </h1>
    </section>
  );
}
