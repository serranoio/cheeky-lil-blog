import SectionModal from "@/components/SectionModal/SectionModal";
import { Hobby } from "@/functions/hobby";
import { FC, useState } from "react";
import classes from "./HobbyModal.module.css";
import Image, { StaticImageData } from "next/image";

interface Props {
  isHobbyOpened: boolean;
  openHobby: any;
  chosenHobby: Hobby | null;
  changeChosenHobby: any;
}

const allTabs: string[] = ["Desc", "Goals", "Impact"];

const HobbyModal: FC<Props> = ({
  isHobbyOpened,
  openHobby,
  chosenHobby,
  changeChosenHobby,
}) => {
  const [chosenTab, changeChosenTab] = useState<string>(allTabs[0]);

  const tabs = (
    <div
      className={classes.tabContainer}
      onClick={(e: any) => {
        const chosen =
          e.target.nodeName === "P"
            ? e.target.innerHTML
            : e.target.querySelector("p").innerHTML;
        changeChosenTab(chosen);
      }}
    >
      {allTabs.map((tab: string, i: number) => {
        return (
          <div
            key={i}
            className={
              classes.tab +
              " " +
              `${chosenTab === allTabs[i] ? classes.chosenTab : ""}`
            }
          >
            <p>{tab}</p>
          </div>
        );
      })}
    </div>
  );

  const getChosenContent = (): string => {
    if (chosenTab === allTabs[0]) {
      return chosenHobby?.description as string;
    } else if (chosenTab === allTabs[1]) {
      return chosenHobby?.goals as string;
    } else if (chosenTab === allTabs[2]) {
      return chosenHobby?.impact as string;
    }

    return "";
  };

  return (
    <SectionModal
      size={{ x: 80, y: 40 }}
      isOpened={isHobbyOpened}
      open={openHobby}
    >
      <div className={classes.positionAll}>
        <div className={classes.mainContent}>
          <div className={classes.image}>
            <Image
              width={300}
              height={300}
              style={{
                objectFit: "cover",
              }}
              alt={chosenHobby?.hobbyName as string}
              src={chosenHobby?.image as StaticImageData}
            />
          </div>
          <div className={classes.content}>
            <h3 className={classes.hobbyTitle}>{chosenHobby?.hobbyName}</h3>
            <p className={classes.hobbyDesc}>{getChosenContent()}</p>
          </div>
        </div>
        {tabs}
      </div>
    </SectionModal>
  );
};

export default HobbyModal;
