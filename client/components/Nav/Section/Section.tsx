// David Serrano, October 24th, 2023
// If you're reading this, welcome to my portfolio code
// Hope you enjoy it!
// Free AF. Take it all
// David Serrano, October 24th, 2023
// If you're reading this, welcome to my portfolio code
// Hope you enjoy it!
// Free AF. Take it all
import Link from "next/link";
import react, { FC, useState, useEffect } from "react";
import classes from "./Section.module.css";

interface section {
  items: string[];
  section: boolean;
  tab: string;
  openSection: any;
  i: number;
}
const Section: FC<section> = ({ items, section, tab, openSection, i }) => {
  // const [allStates, changeAllStates] = useState([false, false, false]);
  // const [currentState, incCurrentState] = useState(0);

  // console.log(currentState);
  // useEffect(() => {
  //   const changeState = () => {
  //     changeAllStates((prevState: any) => {
  //       prevState[currentState] = !prevState[currentState];
  //       return prevState;
  //     });
  //     incCurrentState((prevState: number) =>
  //       prevState + 1 === 3 ? 0 : prevState + 1
  //     );

  //     setTimeout(changeState, 500);
  //   };

  //   const clear = setTimeout(changeState, 500);

  //   return () => clearTimeout(clear);
  // }, [section]);

  const getHref = (item: string): string => {
    const itemL = item.toLocaleLowerCase();
    if (itemL === "home" && tab.toLocaleLowerCase() === "blog") {
      return "/blog";
    } else if (itemL === "topics") {
      return "/blog/topic";
    } else if (itemL === "posts") {
      return "/blog/topic/posts";
    } else if (itemL === "home" && tab.toLocaleLowerCase() === "me") {
      return "/#hero";
    } else if (itemL === "about") {
      return "/#about";
    } else if (itemL === "projects") {
      return "/#projects";
    } else if (itemL === "hobby") {
      return "/#hobbys";
    }

    return "/";
  };

  return (
    <ol
      className={classes.ol}
      onClick={() => {
        openSection((prevState: boolean[]) => {
          prevState[i] = !prevState[i];

          return prevState;
        });
      }}
    >
      {items.map((item: string, i: number) => (
        <li
          key={i}
          className={`${classes.listItem} ${section ? classes.open : ""}`}
        >
          <Link href={getHref(item)}>
            {item}
            <span></span>
          </Link>
        </li>
      ))}
    </ol>
  );
};
export default Section;
