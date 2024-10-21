/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import styles from "@/styles/vs-code/theme-info.module.css";
import { fontInfo } from "@/lib/font-info";
import { useEditor } from "@/lib/hooks/use-editor";

const Font = ({ icon, name, font, currentFont, setFont }: any) => {
  return (
    <div className={styles.container}>
      <Image src={icon} alt={name} height={100} width={100} />
      <div className={styles.info}>
        <div>
          <h3>{name}</h3>
        </div>
        <button
          onClick={() => setFont(font)}
          className={`${currentFont === font ? "disabled" : ""}`}
        >
          Set Color Font
        </button>
      </div>
    </div>
  );
};

const FontInfo = () => {
  const { fontName, changeFont } = useEditor();

  const setFont = (font: string) => {
    document.documentElement.setAttribute("data-font", font);
    localStorage.setItem("font", font);
    changeFont(font);
  };

  return fontInfo.map((font: any) => (
    <Font {...font} key={font.name} currentFont={fontName} setFont={setFont} />
  ));
};

export default FontInfo;
