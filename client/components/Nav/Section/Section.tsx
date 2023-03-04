import Link from "next/link";
import react, { FC, useState } from "react";
import classes from "./Section.module.css";

interface section {
  items: string[];
  section: boolean;
  tab: string;
}
const Section: FC<section> = ({ items, section, tab }) => {
  const getHref = (item: string): string => {
    const itemL = item.toLocaleLowerCase();
    if (itemL === "home" && tab.toLocaleLowerCase() === "blog") {
      return "/blog";
    } else if (itemL === "topics") {
      return "/blog/topic";
    } else if (itemL === "posts") {
      return "/blog/topic/posts";
    } else if (itemL === "home" && tab.toLocaleLowerCase() === "me") {
      return "/me";
    } else if (itemL === "goals") {
      return "/goals";
    } else if (itemL === "cs") {
      return "/cs";
    }

    return "/";
  };

  return (
    <ol className={classes.ol}>
      {items.map((item: string, i: number) => (
        <li className={`${classes.listItem}${section ? classes.open : ""}`}>
          <Link href={getHref(item)}>{item}</Link>
        </li>
      ))}
    </ol>
  );
};
export default Section;
