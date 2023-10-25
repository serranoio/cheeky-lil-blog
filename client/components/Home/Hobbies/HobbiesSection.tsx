// David Serrano, October 24th, 2023
// If you're reading this, welcome to my portfolio code
// Hope you enjoy it!
// Free AF. Take it all
// David Serrano, October 24th, 2023
// If you're reading this, welcome to my portfolio code
// Hope you enjoy it!
// Free AF. Take it all
import { FC, useEffect, useState } from "react";
import classes from "./HobbiesSection.module.css";
import { Hobby, allHobbies, getComingSoon } from "@/store/data/hobby";
import { useInView } from "react-intersection-observer";
import SectionModal from "@/components/SectionModal/SectionModal";
import ProjectModal from "../Projects/ProjectModal";
import HobbyModal from "./HobbyModal";
import { mapper } from "@/functions/misc";
import {
  Barbell,
  ChartLineUp,
  Book,
  Code,
  FlowerLotus,
  MegaphoneSimple,
  Headset,
  Mountains,
} from "@phosphor-icons/react";

const rotationRange: number = 18;

// were going to have a video play, and once the video is done,it will shrink to the middle and be replaced by photos of me pointing.
const HobbiesSection: FC = () => {
  const [thresholdNumber, updateThresholdNumber] = useState(.75);

  let { ref: refTitle, inView: inViewTitle } = useInView({
    threshold: thresholdNumber,
  });
  let { ref: refGrid, inView: inViewGrid } = useInView({
    threshold: thresholdNumber,
  });
  const [hasVideoEnded, changeVideoEnd] = useState(true);
  const [hasVideoEndedText, changeVideoEndText] = useState(true);
  const [opacity, changeOpacity] = useState(true);
  const [isHobbyOpened, openHobby] = useState<boolean>(false);
  const [chosenHobby, changeChosenHobby] = useState<Hobby | null>(null);
  const [cardPosition, changeCardPosition] = useState(
    allHobbies.map(() => ({ x: 0, y: 0, mouseX: 50, mouseY: 50 }))
  );
  const [hoveredHobby, setHoveredHobby] = useState<number>(-1);


  useEffect(() => {
    const mediaQuery = window.matchMedia("only screen and (max-width: 704px)");
    const handleMediaChange = (e: any) => {
      if (e.matches) {
      updateThresholdNumber(.25)
    } else {
      updateThresholdNumber(.75)
    }

    if (mediaQuery.matches) {
      updateThresholdNumber(.25)   
    }
  }

    mediaQuery.addEventListener("change", handleMediaChange);
    // Cleanup function to remove the listener when the component unmounts
    return () => mediaQuery.addEventListener("change", handleMediaChange);
  }, []);

  // useEffect(() => {
  //   if (!hasVideoEnded) return;

  //   const timeout = () => {
  //     changeVideoEndText(true);
  //   };

  //   const timer = setTimeout(timeout, 1500);

  //   return () => clearTimeout(timer);
  // }, [hasVideoEnded]);

  // useEffect(() => {
  //   if (!hasVideoEndedText) return;

  //   const timeout = () => {
  //     changeOpacity(true);
  //   };

  //   const timer = setTimeout(timeout, 250);

  //   return () => clearTimeout(timer);
  // }, [hasVideoEndedText]);

  // const video = (
  //   <>
  //     <video
  //       className={
  //         classes.introduceVideo + ` ${hasVideoEnded ? classes.hide : ""}`
  //       }
  //       onEnded={() => {
  //         changeVideoEnd(true);
  //       }}
  //       controls
  //     >
  //       <source src="/assets/videos/david.MOV" />
  //     </video>
  //     <button
  //       className={classes.skip + ` ${hasVideoEnded ? classes.hide : ""}`}
  //       onClick={() => {
  //         changeVideoEnd(true);
  //       }}
  //     >
  //       {" "}
  //       <i>skip</i>
  //     </button>
  //   </>
  // );

  const getSVG = (): JSX.Element => {
    if (hoveredHobby === 0) {
      return <Code color={"#a5a6a7"} size={64} weight="light" />;
    } else if (hoveredHobby === 1) {
      return <Book color={"#a5a6a7"} size={64} weight="light" />;
    } else if (hoveredHobby === 2) {
      return <ChartLineUp color={"#a5a6a7"} size={64} weight="light" />;
    } else if (hoveredHobby === 3) {
      return <FlowerLotus color={"#a5a6a7"} size={64} weight="light" />;
    } else if (hoveredHobby === 4) {
      return <Barbell color={"#a5a6a7"} size={64} weight="light" />;
    } else if (hoveredHobby === 5) {
      return <Headset color={"#a5a6a7"} size={64} weight="light" />;
    } else if (hoveredHobby === 6) {
      return <MegaphoneSimple color={"#a5a6a7"} size={64} weight="light" />;
    } else if (hoveredHobby === 7) {
      return <Mountains color={"#a5a6a7"} size={64} weight="light" />;
    }

    return <></>;
  };

  const photos = (
    <div
      style={{
        opacity: `${hoveredHobby === -1 ? 0 : 1}`,
        transition: `all .5s`,
      }}
    >
      {getSVG()}
    </div>
  );

  const handleMouseMove = (e: any): void => {
    // onMouseMove, we will changeCardPosition based on your mouse
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const closest: HTMLElement = e.target.closest("figure");
    const r = closest.getBoundingClientRect();

    const newPosition: { x: number; y: number } = {
      x: Number(
        mapper(
          mouseX,
          { start: r.left, end: r.right },
          { start: -rotationRange, end: rotationRange }
        ).toFixed(2)
      ),
      y: Number(
        mapper(
          mouseY,
          { start: r.top, end: r.bottom },
          { start: -rotationRange, end: rotationRange }
        ).toFixed(2)
      ),
    };
    const newPositionMouse: { mouseX: number; mouseY: number } = {
      mouseX: Number(
        mapper(
          mouseX,
          { start: r.left, end: r.right },
          { start: 0, end: 100 }
        ).toFixed(2)
      ),
      mouseY: Number(
        mapper(
          mouseY,
          { start: r.top, end: r.bottom },
          { start: 0, end: 100 }
        ).toFixed(2)
      ),
    };

    const chosen = closest.dataset.type;

    changeCardPosition((prevState: any) => {
      prevState[Number(chosen)] = {
        ...newPosition,
        ...newPositionMouse,
      };

      return [...prevState];
    });
  };

  return (
    <section className={classes.hobbySection}>
      <h2
        ref={refTitle}
        className={classes.sectionTitle + ` ${inViewTitle ? classes.show : ""}`}
      >
        {" "}
        Welcome to my hobbies
      </h2>
      <div
        ref={refGrid}
        className={classes.hobbiesGrid + ` ${inViewGrid ? classes.show : ""}`}
        style={{
          gridTemplateRows: `${
            hasVideoEnded ? "1fr 1fr 1fr" : "1fr 100fr 1fr"
          }`,
          gridTemplateColumns: `${
            hasVideoEnded ? "1fr 1fr 1fr" : "1fr 100fr 1fr"
          }`,
        }}
        onClick={(e: any) => {
          // video has not ended
          if (!hasVideoEnded) {
            return;
          }
          const closest = e.target.closest("figure");
          if (!closest || closest.id === "modal") return;

          const chosen = closest.dataset.type;
          if (Number(chosen) === 8) return;

          changeChosenHobby(allHobbies[Number(chosen)]);
          openHobby(true);
        }}
      >
        <figure
          className={classes.introduceHobbies}
          style={{
            gridArea: "2/ 2/ 3/ 3",
          }}
          data-type="8"
        >
          {photos}
          {/* {video} */}
        </figure>
        {allHobbies.map((hobby: Hobby, i: number) => {
          const text = hasVideoEndedText ? hobby.hobbyName : "";
          return (
            <figure
              id={"hobbys"}
              key={i}
              data-type={i}
              className={
                `${
                  getComingSoon(hobby.type)
                    ? classes.hobbyFiller
                    : classes.hobby
                }` + ` ${opacity ? classes.show : ""}`
              }
              onMouseEnter={(e: any) => {
                const closest: HTMLElement = e.target.closest("figure");

                setHoveredHobby(Number(closest.dataset.type));
              }}
              onMouseLeave={() => {
                changeCardPosition(
                  allHobbies.map(() => ({
                    x: 0,
                    y: 0,
                    mouseX: 50,
                    mouseY: 50,
                  }))
                );

                setHoveredHobby(-1);
              }}
              onMouseMove={handleMouseMove}
              style={{
                transform: `rotate3d(${-cardPosition[i].y}, ${
                  cardPosition[i].x
                }, 0,${rotationRange}deg)`,
                backgroundImage: `radial-gradient(
                  circle at ${cardPosition[i].mouseX}% ${cardPosition[i].mouseY}%,
                  rgba(255, 81, 47, 0.3) 1%,
                  rgba(15, 16, 18, .7) 80%
                )`,
              }}
            >
              {getComingSoon(hobby.type) ? (
                <i style={{ textAlign: "center" }}> {text} Coming Soon...</i>
              ) : (
                text
              )}
            </figure>
          );
        })}
      </div>
      <HobbyModal
        isHobbyOpened={isHobbyOpened}
        openHobby={openHobby}
        chosenHobby={chosenHobby}
        changeChosenHobby={changeChosenHobby}
      />
    </section>
  );
};

export default HobbiesSection;
