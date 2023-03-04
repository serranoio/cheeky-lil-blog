import React, { FC, useState } from "react";
import classes from "./Nav.module.css";
import Section from "./Section/Section";
import Link from "next/link";

const blogContent: string[] = ["Home", "Topics", "Posts"];

const Me: string[] = ["Home", "Goals", "CS"];

const map = new Map();

map.set("Blog", blogContent);
map.set("Me", Me);

const Nav: FC = () => {
  const [section, openSection] = useState(
    [...map.keys()].map((key: string) => false)
  );

  const openSectionHandler = (e: any): void => {
    openSection((prevState) => {
      return prevState.map((state: boolean, i: number) => {
        return i == e ? !state : state;
      });
    });
  };

  return (
    <nav className={classes.nav}>
      <h2 className={classes.content}>
        <Link href="/">davidserrano.dev</Link>
      </h2>
      <ol className={classes.ol}>
        {[...map.keys()].map((tab: string, i: number) => {
          return (
            <li className={classes.li}>
              <h3
                className={classes.h3}
                onClick={openSectionHandler.bind(null, i)}
              >
                {tab}
              </h3>
              <Section
                items={map.get(tab)}
                tab={tab}
                section={section[i]}
              ></Section>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Nav;
