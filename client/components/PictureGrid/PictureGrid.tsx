import React, { FC, useState, useEffect } from "react";
import classes from "./PictureGrid.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { topics } from "@/store/data/topics";
import { mapper } from "@/functions/misc";
import PostFigure from "./PostFigure";

interface PictureGridInterface {
  routerLink: string;
  list: any;
}

const gridColumns: number = 4;

const PictureGrid: FC<PictureGridInterface> = ({ routerLink, list }) => {
  const [controlY, changeControlY] = useState(list.map(() => 0));
  const [controlX, changeControlX] = useState(list.map(() => 0));
  const [view, controlView] = useState(list.map(() => 1));

  useEffect(() => {
    controlView(list.map(() => 1));
  }, [list]);

  const controlPosition = (e: any, i: number): void => {
    controlView((prevState: number[]) => {
      prevState = prevState.length === 0 ? prevState.map(() => 1) : prevState;
      return prevState.map(
        (num: number, index: number) => (index === i ? 1 : 0) // if we make it 1, then we turn it on and the rest are off
      );
    });

    let target = e.target;
    const top = target.getBoundingClientRect().top;
    const bottom = target.getBoundingClientRect().bottom;
    const mouseTop = e.clientY;
    const left = target.getBoundingClientRect().left;
    const right = target.getBoundingClientRect().right;
    const mouseLeft = e.clientX;

    changeControlY((prevState: any) => {
      const newnum = mapper(
        mouseTop,
        { start: Number(top), end: Number(bottom) },
        { start: 55, end: 45 }
      );

      prevState[i] = newnum;
      return [...prevState];
    });

    changeControlX((prevState: any) => {
      const newnum = mapper(
        mouseLeft,
        { start: Number(left), end: Number(right) },
        { start: 55, end: 45 }
      );

      prevState[i] = newnum;
      return [...prevState];
    });
    // controlY =
  };

  const resetColors = (e: any) => {
    controlView((prevState: any) => prevState.map(() => 1));
  };

  // list.length % gridColumns === 0 formula for last

  return (
    <div
      onMouseLeave={resetColors}
      className={classes.postsGrid}
      style={{
        gridTemplateColumns: `repeat(${
          list.length >= gridColumns ? gridColumns : list.length
        }, 1fr)`,
        gridTemplateRows: `repeat(${Math.ceil(
          list.length / gridColumns
        )}, 1fr)`,
      }}
    >
      {list.map((post: any, i: number) => {
        return (
          <PostFigure
            post={post}
            i={i}
            controlX={controlX[i]}
            controlY={controlY[i]}
            gridColumns={gridColumns}
            listLength={list.length}
            routerLink={routerLink}
            controlPosition={controlPosition}
            topics={topics}
            view={view}
          />
        );
      })}
    </div>
  );
};

export default PictureGrid;
