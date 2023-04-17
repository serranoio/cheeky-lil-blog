import React, { FC, useState } from "react";
import classes from "./Nav.module.css";
import Section from "./Section/Section";
import Link from "next/link";
import Auth from "@/pocketbase/Auth";
import CreatePost from "../CreatePost/CreatePost";

const blogContent: string[] = ["Home", "Topics", "Posts"];

const Me: string[] = ["Home", "About", "Projects", "Hobby"];

const map = new Map();

map.set("Blog", blogContent);
map.set("Me", Me);

const Nav: FC = () => {
  const [openLogin, setOpenLogin] = useState(false);

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

  const handleModal = (openOrClose: boolean): void => {
    setOpenLogin(openOrClose);
  };

  // const modal = openLogin ? (
  //   <div
  //     onClick={(e) => {
  //       if ((e.target as HTMLElement).closest("figure")) {
  //         return; // if we clicked it, we want it to return
  //       }

  //       handleModal(false);
  //     }}
  //     className={classes.modal}
  //   >
  //     {Create}
  //   </div>
  // ) : (
  //   <></>
  // );

  return (
    <nav className={classes.nav}>
      <h2 className={classes.content}>
        <Link href="/">davidserrano.dev</Link>
      </h2>
      <ol className={classes.ol}>
        {[...map.keys()].map((tab: string, i: number) => {
          return (
            <li className={classes.li} key={i}>
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
                i={i}
                openSection={openSection}
              />
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Nav;
