import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import classes from "./topic.module.css";
import { posts } from "@/store/data/posts";
import pb from "@/pocketbase/pocketbase";
import { topics } from "@/store/data/topics";

// const postListDummy = ["Sacrifice", "Theory", "Sacredness"];

import { removeDuplicates } from "@/functions/misc";
import PictureGrid from "@/components/PictureGrid/PictureGrid";

export default function Topic() {
  const router = useRouter();

  const [postList, changePostList] = useState([]);

  useEffect(() => {
    if (router.query.topic === undefined) {
      return;
    }
    console.log(router.query);

    pb.collection("posts")
      .getFullList()
      .then((data) => {
        changePostList((prevPosts: any[]) => {
          return [
            // ...prevPosts,
            ...data
              .filter(
                (record: any, i: number) => record.topic === router.query.topic
              )
              .map((record: any, i: number) => {
                return {
                  picture: `http://127.0.0.1:8090/api/files/${record.collectionId}/${record.id}/${record.post_pic}`,
                  title: record.title,
                  recordId: record.id,
                };
              }),
          ];
        });
      });
  }, [router]);

  const [title, setTitle] = useState("");
  useEffect(() => {
    if (router.query.topic === undefined) {
      return;
    }

    setTitle(
      router.query.topic === "topic"
        ? "Choose Topic"
        : (router.query.topic as string).split("")[0].toUpperCase() +
            (router.query.topic as string).slice(
              1,
              (router.query.topic as string).length
            )
    );
  }, [router]);

  const mainTopics = (
    <div className={classes.viewport}>
      <h1 className={classes.pageName}>Choose Topic</h1>
      <PictureGrid
        routerLink={`/blog/`}
        list={topics.map((topic: string, i: number) => {
          return {
            title: topic,
            picture: `../../../assets/images/${topic}.jpg`,
          };
        })}
      />
    </div>
  );

  const chosenTopic = (
    <div>
      <h1 className={classes.pageName}>{title}</h1>
      <PictureGrid
        routerLink={`/blog/${router.query.topic}/`}
        list={postList}
      />
    </div>
  );

  return router.query.topic === "topic" ? mainTopics : chosenTopic;
}
