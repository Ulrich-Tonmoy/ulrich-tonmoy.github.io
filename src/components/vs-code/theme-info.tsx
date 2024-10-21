/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import styles from "@/styles/vs-code/theme-info.module.css";
import { useEffect, useState } from "react";
import { themeInfo } from "@/lib/theme-info";

const Theme = ({
  icon,
  name,
  publisher,
  theme,
  currentTheme,
  setTheme,
}: any) => {
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

const ThemeInfo = () => {
  const [currentTheme, setCurrentTheme] = useState<String>();

  const setTheme = (theme: string) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    setCurrentTheme(theme);
  };

  useEffect(() => {
    const local = localStorage.getItem("theme");
    setCurrentTheme(local ?? "github-dark");
  }, []);

  return themeInfo.map((theme: any) => (
    <Theme
      {...theme}
      key={theme.theme}
      currentTheme={currentTheme}
      setTheme={setTheme}
    />
  ));
};

export default ThemeInfo;
