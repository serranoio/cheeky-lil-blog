import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import classes from "./topic.module.css";

const postListDummy = ["Sacrifice", "Theory", "Sacredness"];

export default function Topic() {
  const router = useRouter();

  const [postList, changePostList] = useState(postListDummy);

  useEffect(() => {
    fetch("http://127.0.0.1:8090/api/blog", {
      method: "GET",
    })
      .then((response) => {
        console.log(response);
        return response.text();
      })
      .then((data) => {
        console.log(data);
        // @ts-ignore
        changePostList((prevPosts: string[]) => {
          console.log(prevPosts);
          prevPosts.push(data);

          return [...prevPosts];
        });
      });
  }, []);

  //   COPY NEXT.JS'S HOVER LOL
  return (
    <div>
      <h1 className={classes.topicTitle}>{router.query.topic}</h1>
      <div className={classes.postsGrid}>
        {postList.map((post: string, i: number) => {
          return (
            <Link
              className={classes.postTitle}
              href={`/blog/${router.query.topic}/${post.toLowerCase()}`}
            >
              <figure className={classes.postFigure}>
                <p className={classes.p}>{post}</p>
              </figure>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
