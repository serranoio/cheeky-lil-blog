// David Serrano, October 24th, 2023
// If you're reading this, welcome to my portfolio code
// Hope you enjoy it!
// Free AF. Take it all
// David Serrano, October 24th, 2023
// If you're reading this, welcome to my portfolio code
// Hope you enjoy it!
// Free AF. Take it all
import { useEffect, useState } from "react";
import classes from "./About.module.css";
import { sep } from "path";
import { useInView } from "react-intersection-observer";
import AboutShow from "../AboutShow/AboutShow";


const aboutMe: JSX.Element[] = [
  <>
  <p>I write <span className={classes.quartenary}>poetry</span>.</p>
  </>,

  <>
  I interweave logic and abstraction within every line that I write,KeyModifie
  forming metaphors to make logic simple and light. {String.fromCodePoint(0x1F601)}
  </>,

  <>
  These metaphors are coupled together to create functions, or in other words, stanzas. 
  {String.fromCodePoint(0x1F9D0)}
  </>,

  <>
  Amongst all the chaos {String.fromCodePoint(0x2622)} in the world, 
  these stanzas happen to organize together to form a file; a poem is manifested.
   {String.fromCodePoint(0x1F4AD)}
  </>,

<>
  Put multiple files together to create a project, and you get a story.
{String.fromCodePoint(0x1F4D5)}
  </>,

  <>
  This is my story.
  </>,
  
  <>
  Chapter 1: The Beginnings
  </>,
  <>
  There was a time in my life where I felt like I was <span className={classes.tertiary}>nothing</span>. I didn't believe I was smart enough,
  I used to get embarrassed over not understanding simple algorithms. I was objectively the worst 3 CS students in my
  highschool. {String.fromCodePoint(0x1F44E)}
  </>,

  <>Chapter 2: The Resurgance.</>,
  <>
  But then I realized that human potential is absolutely limitless, and I embodied it.
  I started waking up at 5 AM, going to the gym, cooking, reading, meditating, practicing self-love through nature,
   and affirmations. Mostly importantly, I spent my entire 2021 Summer learning JavaScript, HTML, CSS, React from the
   ground up. Every project that presented itself to me became an opportunity for my skills to reach another echelon.
  </>,

  <>Chapter 3: The Full Stack.</>,
  <>
  I was applying for jobs with intentions to be a frontend developer since that is where I had honed in my skills...
  But I got an internship offer for Backend/Fullstack at this company called Splunk. I emailed my manager, "tech stack question mark?"
  and extended my journey to learning database options like Supabase and Pocketbase and also learned Golang and Nextjs.
  <br/>
  <i>I was kind of afraid since I had no experience in the backend...</i>
  </>,

  <>Chapter 4: The Internship.</>,
  <>
  I was enlightened. I had witnessed mastery with my own eyes. I saw gravity enacting on chaos to bring about order,
  where every piece synergized together to create beauty. It made me realize that coding is an ARTFORM. Code is art. Code 
  is poetry. Code is dance, code is music.
  <br/>
  <i>I learned Lit Element, implemented web workers, made my frontend stateful using IndexedDB, created
    an API with Golang, dockerized the app and threw it onto Kubernetes. More importantly, I learned the philosophies
    of interfaces and the ethereality of mastery. 
  </i>
  </>,

  <>
  Chapter 5: Greatness
  </>,

  <>
    Firstly, No other word best suits the name of this chapter. I have dreams to contribute to open source and 
    to continue my learning towards mastery. The possibilities are endless. Follow me on github for
    what I'm up to now! <a href="https://github.com/serranoio">Link here -></a>
  </>


]


const aboutMe2: JSX.Element[] = [
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
    All of the literature pointed to the fact that every{" "}
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
    {String.fromCodePoint(0x1f92f)}.
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
