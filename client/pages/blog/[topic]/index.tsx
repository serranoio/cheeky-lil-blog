// David Serrano, October 24th, 2023
// If you're reading this, welcome to my portfolio code
// Hope you enjoy it!
// Free AF. Take it all
// David Serrano, October 24th, 2023
// If you're reading this, welcome to my portfolio code
// Hope you enjoy it!
// Free AF. Take it all
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import classes from "./topic.module.css";
import { posts } from "@/store/data/posts";
import pb, { fileUrl } from "@/pocketbase/pocketbase";
import { topics } from "@/store/data/topics";
import PictureGrid from "@/components/PictureGrid/PictureGrid";

// topic: /blog/topic
// this function shows you all topics using topics when you route to /blog/topic.
// when you click on a topic, the database is read and all items within a certain topic are pulled up.
// ex: click coding. router to /blog/coding is made.
export default function Topic() {
  const router = useRouter();

  const [postList, changePostList] = useState<any>([]); // all posts are stored here
  const [title, setTitle] = useState(""); // topic title

  useEffect(() => {
    if (router.query.topic === undefined) {
      return;
    }

    pb.collection("posts")
      .getFullList()
      .then((data) => {
        changePostList(() => {
          return [
            // ...prevPosts,
            ...data
              .filter((record: any, i: number) => {
                if (
                  record.topic.replace(/\s/g, "") ===
                  String(router.query.topic).replace(/\s/g, "")
                ) {
                  console.log(record.title);
                }
                return record.topic === router.query.topic;
              })
              .map((record: any, i: number) => {
                return {
                  picture: `${fileUrl}/${record.collectionId}/${record.id}/${record.post_pic}`, // pb picture's are served on this link
                  title: record.title,
                  recordId: record.id,
                };
              }),
          ];
        });
      });
  }, [router]);

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

  const allTopics = (
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

  return router.query.topic === "topic" ? allTopics : chosenTopic;
}
