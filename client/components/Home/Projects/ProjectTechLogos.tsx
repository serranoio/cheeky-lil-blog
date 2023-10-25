// David Serrano, October 24th, 2023
// If you're reading this, welcome to my portfolio code
// Hope you enjoy it!
// Free AF. Take it all
// David Serrano, October 24th, 2023
// If you're reading this, welcome to my portfolio code
// Hope you enjoy it!
// Free AF. Take it all
import { types, typesNames } from "@/store/data/project";
import classes from "./Projects.module.css";

interface Props {
  onHover: number[];
}

export function ProjectTechLogos({ onHover }: Props) {
  return (
    <>
      {typesNames.map((type: string, i: number) => {
        return (
          <div
            key={i}
            className={
              classes[type.toLowerCase()] +
              " " +
              classes.absolute +
              ` ${onHover[i] === 1 ? classes.on : ""}`
            }
          ></div>
        );
      })}
    </>
  );
}
