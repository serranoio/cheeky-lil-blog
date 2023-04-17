import { useEffect, useState } from "react";
import classes from "./About.module.css";
import { sep } from "path";
import { useInView } from "react-intersection-observer";
import AboutShow from "../AboutShow/AboutShow";

const aboutMe: JSX.Element[] = [
  <>
    In September of 2021, I <i className={classes.quartenary}>stumbled</i>{" "}
    across a book called the{" "}
    <i>
      {" "}
      <a
        href="https://www.amazon.com/Habits-Highly-Effective-People/dp/1471131823/ref=sr_1_6?keywords=the+7+habits+of+highly+effective&qid=1681654315&sprefix=The+7+habi%2Caps%2C94&sr=8-6"
        target="_blank"
      >
        7 Habits of Highly Effective People.{" "}
      </a>
    </i>
    Slowly but surely, it <span className={classes.tertiary}>opened</span> up my
    eyes to a whole new world {String.fromCodePoint(0x1f30d)}. It created a
    reading habit for me in which I decided to read a book called{" "}
    <i>
      <a
        href="https://www.amazon.com/AM-Club-Morning-Elevate-Life/dp/1443460710/ref=sr_1_1?crid=31HM6KCE2N0AA&keywords=the+5+am+club&qid=1681654296&sprefix=the+5+am+club%2Caps%2C142&sr=8-1"
        target="_target"
      >
        The 5 AM Club
      </a>
    </i>
    .
  </>,
  <>
    All of the literature pointed to fact that every{" "}
    <i className={classes.italics}>single</i>
    <span className={classes.quartenary}> granular </span> detail in your life
    matters because it has the power to{" "}
    <span className={classes.tertiary}> compound </span> to create the person
    you are meant to be. {"\u26A1"}
  </>,
  <>
    I embodied this principle by making an{" "}
    <span className={classes.quartenary}>oath</span> to myself to wake up at{" "}
    <span className={classes.tertiary}>5 AM</span> at every single weekday for
    the rest of my life so I can seize the day {String.fromCodePoint(0x1f31e)}.
    This gargantuan habit transformed every single facet of my life, especially
    coding.
  </>,
  <>
    Before the semester ended, I created a plan for the summer to learn web
    development from the ground up {String.fromCodePoint(0x1f60e)}. I had
    already learned JavaScript by coding every day over winter break, but I
    still had a <i>long</i> <span className={classes.tertiary}>journey</span>{" "}
    ahead of me.
  </>,
  <>
    By the end of summer, I learned TypeScript, HTML, CSS, React and made some
    pretty {String.fromCodePoint(0x1f525)} projects by waking up at{" "}
    <span className={classes.tertiary}>5 AM </span>
    every weekday, going to the gym, then coding from 9-5.
  </>,
  <>
    {String.fromCodePoint(0x23e9)} Fast foward to today's date, April 14th, 2023{" "}
    I can proudly say that i'm a <i>fullstack</i> developer now using Supabase
    for multiple projects and Pocketbase (for this site). I have picked up
    NextJS, learned Go to the intermediate level, and now I am ready for this
    next summer {String.fromCodePoint(0x1f98d)}.
  </>,
  <>
    I have learned all of this in <i>less</i> than one year{" "}
    {String.fromCodePoint(0x1f601)}.
  </>,
];

const pauseScrollingStart = 800;

const margin = 400;
const separation2 = 100;
const start = 400;
const separation = margin + start + 200; // 200 is difference
const pauseScrollingEnd = separation * (aboutMe.length - 1) + margin + start;

// console.log(lingEnd);
// i = 0, 0 <= x <= 400

const About = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.75,
  });

  const [isScrollingPaused, pauseScrolling] = useState(false);
  const [scroller, changeScroller] = useState(0);

  // useEffect(() => {
  //   const onScroll = (e) => {
  //     if (
  //       window.scrollY > pauseScrollingStart &&
  //       scroller < pauseScrollingEnd
  //     ) {
  //       // console.log(window.scrollY);
  //       document.querySelector("body")!.style.overflow = "hidden";
  //       pauseScrolling(true);
  //     }
  //   };

  //   document.addEventListener("scroll", onScroll);
  //   return () => document.removeEventListener("scroll", onScroll);
  // }, []);

  // useEffect(() => {
  //   const onWheel = (e: any) => {
  //     changeScroller((prevState: number) => prevState + Number(e.deltaY));
  //   };

  //   if (isScrollingPaused) document.addEventListener("wheel", onWheel);

  //   if (!isScrollingPaused) document.removeEventListener("wheel", onWheel);

  //   return () => document.removeEventListener("wheel", onWheel);
  // }, [isScrollingPaused]);

  // useEffect(() => {
  //   const end = (aboutMe.length - 1) * separation + margin + start;
  //   // console.log(Number(scroller) > end);
  //   // console.log(scroller);

  //   if (scroller > end || scroller <= 0) {
  //     document.querySelector("body")!.style.overflow = "auto";
  //     pauseScrolling(false);
  //   }
  // }, [scroller]);

  // console.log(scroller > 0 + start - margin && scroller < 0 + start + margin);

  return (
    <section className={classes.section} id="about">
      <div className={classes.about}>
        <h2
          className={`${classes.title} ${inView ? classes.inView : ""}`}
          ref={ref}
        >
          My Story
        </h2>
        {aboutMe.map((text: JSX.Element, i: number) => {
          return <AboutShow text={text} key={i} i={i} />;
        })}
      </div>
      <div className={classes.techStack}></div>
    </section>
  );
};

export default About;
