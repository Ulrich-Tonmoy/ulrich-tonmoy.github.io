/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import styles from "@/styles/vs-code/theme-info.module.css";
import { useEffect } from "react";

const ThemeInfo = ({ icon, name, publisher, theme }: any) => {
  let currentTheme;

  useEffect(() => {
    currentTheme = localStorage.getItem("theme");
  }, []);

  const setTheme = (theme: string) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <div className={styles.container}>
      <Image src={icon} alt={name} height={100} width={100} />
      <div className={styles.info}>
        <div>
          <h3>{name}</h3>
          <h5>{publisher}</h5>
        </div>
        <button
          onClick={() => setTheme(theme)}
          className={`${currentTheme === theme ? "disabled" : ""}`}
        >
          Set Color Theme
        </button>
      </div>
    </div>
  );
};

export default ThemeInfo;
