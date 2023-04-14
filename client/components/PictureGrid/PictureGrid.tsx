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

// PictureGrid: the meat of the project
// this creates a grid from the list.
const PictureGrid: FC<PictureGridInterface> = ({ routerLink, list }) => {
  // onMouseMove, we controlX and controlY of a hovered PostFigure
  const [controlY, changeControlY] = useState(list.map(() => 0));
  const [controlX, changeControlX] = useState(list.map(() => 0));
  const [view, controlView] = useState(list.map(() => 1)); // controls color of text

  useEffect(() => {
    controlView(list.map(() => 1));
  }, [list]);

  // controlsPosition of backgroundImage and color of text
  const controlPosition = (e: any, i: number): void => {
    controlView((prevState: number[]) => {
      // when we hover over a card, we must turn all off except this one
      prevState = prevState.length === 0 ? prevState.map(() => 1) : prevState; // just making sure list is updated
      return prevState.map(
        (_: number, index: number) => (index === i ? 1 : 0) // if we make it 1, then we turn it on and the rest are off
      );
    });

    let target: HTMLElement = e.target.closest("figure"); // make sure we're on figure

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
  };

  // resetColors: we reset all colors to on when we leave
  const resetColors = (e: any) => {
    controlView((prevState: any) => prevState.map(() => 1));
  };

  return (
    <div
      onMouseLeave={resetColors}
      className={classes.postsGrid}
      style={{
        gridTemplateColumns: `repeat(${
          list.length >= gridColumns ? gridColumns : list.length
        }, 1fr)`, // if the length is NOT greater or equal to gridColumns, we will make
        // only length gridColumns
        gridTemplateRows: `repeat(${Math.ceil(
          list.length / gridColumns // we will make 10 / 4 = ciel(2.25) = 3 rows
        )}, 1fr)`,
      }}
    >
      {list.map((post: any, i: number) => {
        return (
          <PostFigure
            key={i}
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
