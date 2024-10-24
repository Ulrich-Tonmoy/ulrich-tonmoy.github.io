import styles from "@/styles/vs-code/titlebar.module.css";
import Image from "next/image";
import { useEffect } from "react";

const TitleBar = () => {
  useEffect(() => {
    const theme = localStorage.getItem("theme") ?? "github-dark";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    const font = localStorage.getItem("font") ?? "krypton";
    document.documentElement.setAttribute("data-font", font);
    localStorage.setItem("font", font);
  }, []);

  return (
    <section className={styles.titlebar}>
      <Image
        src="/vscode_icon.svg"
        alt="VSCode Icon"
        height={15}
        width={15}
        className={styles.icon}
      />
      <div className={styles.items}>
        <p>File</p>
        <p>Edit</p>
        <p>View</p>
        <p>Go</p>
        <p>Run</p>
        <p>Terminal</p>
        <p>Help</p>
      </div>
      <span className={styles.title}>Tonmoy - Visual Studio Code</span>
      <div className={styles.windowButtons}>
        <span className={styles.minimize}></span>
        <span className={styles.maximize}></span>
        <span className={styles.close}></span>
      </div>
    </section>
  );
};

export default TitleBar;
