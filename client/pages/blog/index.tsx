import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import classes from "./blog.module.css";

const topics: string[] = ["morningroutine"];

export default function Blog() {
  return (
    <div>
      <h1>Blog</h1>
      {topics.map((topic: string, i: number) => {
        return (
          <Link href={`/blog/${topic}`} className={classes.topic}>
            {topic}
          </Link>
        );
      })}
      <Link className={styles.link} href="/blog/topic">
        Topic
      </Link>
    </div>
  );
}
