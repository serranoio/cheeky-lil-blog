import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import classes from "./blog.module.css";
import { useState } from "react";
import { mapper } from "@/functions/misc";
import { topics } from "@/store/data/topics";
import PictureGrid from "@/components/PictureGrid/PictureGrid";

export default function Blog() {
  return (
    <div className={classes.viewport}>
      <h1 className={classes.h1}>The Blog</h1>
      <p className={classes.p}>
        This day is priceless. All the money in the world can never bring today
        back again. So seize it, save it, and honor it.
        &nbsp;&nbsp;&nbsp;&nbsp;-{" "}
        <span style={{ fontSize: "2.4rem" }}>Robin Sharma</span>
      </p>
      <p className={classes.p}>
        That is my favorite quote. I live by it because everything in your life
        matters, <strong>especially</strong> this day. You can create a life of
        greatness by just compounding the little things in your life, starting
        out with every day.
      </p>
      <p className={classes.p}>
        This leads me to say, before reading anything on the web, remember that
        any external influence has the power to shape your perspective.
      </p>
      <p className={classes.p}>
        So before you post, remember that what you write can influence others
        and can also solidify your perspective.
      </p>
      <p className={classes.p}>A couple of rules to posting: </p>
      <ul>
        <li>
          Please only upload gorgeous photos
          <ul>
            <li>
              Use websites like{" "}
              <a target="_blank" href="https://unsplash.com/">
                Unsplash
              </a>{" "}
              to get high resolution photos.
            </li>
          </ul>
        </li>
        <li>
          No swearing
          <ul>
            <li>I will delete it.</li>
          </ul>
        </li>
        <li>
          Show your passion
          <ul>
            <li>
              Don't be boring but don't be extra. Put emotion into your words.
            </li>
          </ul>
        </li>
        <li>
          Have fun
          <ul>
            <li>:)</li>
          </ul>
        </li>
        <li>
          Only positive call to actions
          <ul>
            <li>Treat any problem as an opportunity to grow.</li>
          </ul>
        </li>
      </ul>
      <p className={classes.p} style={{ marginTop: "2rem" }}>
        You could've entered the blog already from the nav bar lol, but if you
        made it this far, here's a minimalistic yet fancy link.
      </p>
      <Link href="/blog/topic" className={classes.button}>
        Enter <span>&rarr;</span>
      </Link>
    </div>
  );
}
