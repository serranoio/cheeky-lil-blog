import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.diver}>
      <h1>David's homepage</h1>
      <Link className={styles.link} href="/blog">
        Blog
      </Link>
    </div>
  );
}
