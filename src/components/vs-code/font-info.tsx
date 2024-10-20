/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import styles from "@/styles/vs-code/theme-info.module.css";
import { useEffect, useState } from "react";
import { fonts } from "@/lib/font";

const Font = ({ icon, name, currentFont, setFont }: any) => {
  return (
    <div className={styles.container}>
      <Image src={icon} alt={name} height={100} width={100} />
      <div className={styles.info}>
        <div>
          <h3>{name}</h3>
        </div>
        <button
          onClick={() => setFont(name)}
          className={`${currentFont === name ? "disabled" : ""}`}
        >
          Set Color Font
        </button>
      </div>
    </div>
  );
};

const FontInfo = () => {
  const [currentFont, setCurrentFont] = useState<String>();

  const setFont = (font: string) => {
    document.documentElement.setAttribute("data-font", font);
    localStorage.setItem("font", font);
    setCurrentFont(font);
  };

  useEffect(() => {
    const local = localStorage.getItem("font");
    setCurrentFont(local ?? "github-dark");
  }, []);

  return fonts.map((font: any) => (
    <Font
      {...font}
      key={font.name}
      currentFont={currentFont}
      setFont={setFont}
    />
  ));
};

export default FontInfo;
