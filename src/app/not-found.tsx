"use client";

import Link from "next/link";
import styles from "@/styles/not-found.module.css";

const NotFound = () => {
  return (
    <div className={styles.notfoundContainer}>
      <div className={styles.notfound}>
        <div className={styles.notfound404}>
          <h1>404</h1>
          <h2>Page not found</h2>
        </div>
        <Link href="/">Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
