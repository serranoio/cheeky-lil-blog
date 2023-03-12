import React, { FC } from "react";
import Link from "next/link";
import classes from "./PostFigure.module.css";

interface PostFigureInterface {
  post: any;
  i: number;
  controlX: number;
  controlY: number;
  gridColumns: number;
  listLength: number;
  routerLink: string;
  controlPosition: any;
  topics: string[];
  view: any;
}

const PostFigure: FC<PostFigureInterface> = ({
  post,
  controlX,
  controlY,
  gridColumns,
  listLength,
  routerLink,
  controlPosition,
  topics,
  i,
  view,
}) => {
  const backgroundImage = topics.includes(post.title)
    ? { backgroundImage: "" }
    : {
        backgroundImage: `repeating-linear-gradient(
      45deg,
      #49494905 0,
      #494949 2px,
      transparent 0,
      transparent 50%
    ),
    linear-gradient(rgba(25, 14, 0, .3), rgba(25, 14, 0, 0.5)), url(${post.picture})`,
      };

  const calculatedGridColumn: string =
    i >= Math.floor(listLength / gridColumns) * gridColumns && listLength >= 4
      ? ` span ${gridColumns - ((listLength % gridColumns) - 1)}`
      : `auto`;

  // if (
  //   i >= Math.floor(listLength / gridColumns) * gridColumns &&
  //   listLength >= 4
  // ) {
  // }

  return (
    <Link
      className={classes.postTitle}
      href={`${routerLink}${post.title}${
        post.recordId === undefined ? "" : `-${post.recordId}`
      }`}
      style={{
        gridColumn: `${calculatedGridColumn}`,
      }}
    >
      <figure
        data-topic={post.title}
        onMouseMove={(e) => {
          controlPosition(e, i);
        }}
        style={{
          ...backgroundImage,
          backgroundPosition: `${controlX}% ${controlY}%, center, ${controlX}% ${controlY}%`,
          backgroundSize: `20vmin 20vmin, 100% 100%, cover`,
          height: `${listLength <= 4 ? `100vh` : "50vh"}`,
        }}
        className={`${classes.postFigure} ${
          view[i] === 0 ? classes.linkVisibility : ""
        }`}
      >
        <p
          style={{
            fontSize: `${listLength > 4 ? "3rem" : "4.2rem"}`,
          }}
          className={classes.p}
        >
          {post.title}
        </p>
      </figure>
    </Link>
  );
};

export default PostFigure;
