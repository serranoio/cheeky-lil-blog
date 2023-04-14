import { useEffect, useState } from "react";
import classes from "./About.module.css";
import { sep } from "path";
import { useInView } from "react-intersection-observer";
import AboutShow from "../AboutShow/AboutShow";

const aboutMe: JSX.Element[] = [
  <>
    In September of 2021, I stumbled across a book called the 7 Habits of Highly
    Effective People. Slowly but surely, it opened up my eyes to a whole new
    world {String.fromCodePoint(0x1f30d)}. It created a reading habit for me in
    which I decided to read a book called the 5 AM Club.
  </>,
  <>
    All of the literature pointed to fact that every{" "}
    <i className={classes.italics}>single</i>
    <span className={classes.span}> granular </span> detail in your life matters
    because it has the power to{" "}
    <span className={classes.span2}> compound </span> to create the person you
    are meant to be. {"\u26A1"}
  </>,
  <>
    I embodied this principle by making an oath to myself to wake up at 5 am at
    every single weekday for the rest of my life {String.fromCodePoint(0x1f31e)}
    . This gargantuan habit transformed every single facet of my life,
    especially coding.
  </>,
  <>
    Before the semester ended, I created a plan for the summer to learn web
    development from the ground up. I had already learned JavaScript by coding
    every day over winter break, but I still had a long journey ahead of me.
  </>,
  <>
    By the end of summer, I learned TypeScript, HTML, CSS, React and made some
    pretty fire projects {String.fromCodePoint(0x1f525)} by waking up at 5 am
    every weekday, going to the gym, then coding from 9-5.
  </>,
  <>
    Transitioning over to today's date, April 14th, 2023, I can proudly say that
    i'm a fullstack developer now using Supabase for multiple projects and
    Pocketbase (for this site). I have picked up NextJS, learned Go to the
    intermediate level, and now I am ready for this next summer.
  </>,
  <>I have learned all of this in less than one year :).</>,
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
    <section className={classes.section}>
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
