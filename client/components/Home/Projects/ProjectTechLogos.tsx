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
