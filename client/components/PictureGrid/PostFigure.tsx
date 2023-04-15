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
        backgroundImage: `
    linear-gradient(rgba(25, 14, 0, .3), rgba(25, 14, 0, 0.5)), url(${post.picture})`,
      };

  // console.log(gridColumns - (listLength % gridColumns));
  // 9 % 8 === 1, 4
  // 10 % 8 === 2, 2 =
  // 11 % 8 === 3, 1
  const getSpan = () => {
    if (listLength % gridColumns === 1) {
      return 4;
    } else if (listLength % gridColumns === 2) {
      return 2;
    } else if (listLength % gridColumns === 3) {
      return 1;
    }
  };

  let calculatedGridColumn: string =
    i >= Math.floor(listLength / gridColumns) * gridColumns && listLength >= 4
      ? ` span ${getSpan()}`
      : `auto`;

  // console.log(calculatedGridColumn);

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
          backgroundPosition: `${controlX}% ${controlY}%, ${controlX}% ${controlY}%`,
          backgroundSize: `cover,  cover`,
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
