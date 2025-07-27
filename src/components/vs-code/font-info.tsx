/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import { fontInfo } from "@/lib/font-info";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Font = ({ icon, name, font, currentFont, setFont }: any) => {
  return (
    <div className="flex flex-col items-center my-6 text-center px-6">
      <Image src={icon} alt={name} height={100} width={100} />
      <div className="flex flex-col justify-between mt-4">
        <div>
          <h3>{name}</h3>
        </div>
        <button
          onClick={() => setFont(font)}
          className={cn(
            `mt-3 border-none bg-[var(--button-bg)] text-[var(--button-text)] px-2 py-0.5 font-semibold cursor-pointer transition-all duration-500 ease-in-out hover:bg-[var(--accent-color)] focus:outline focus:outline-[var(--accent-color)] ${
              currentFont === font ? "disabled" : ""
            }`,
          )}
        >
          Set Color Font
        </button>
      </div>
    </div>
  );
};

const FontInfo = () => {
  const [currentFont, setCurrentFont] = useState<string>();

  const setFont = (font: string) => {
    document.documentElement.setAttribute("data-font", font);
    localStorage.setItem("font", font);
    setCurrentFont(font);
  };

  useEffect(() => {
    const local = localStorage.getItem("font");
    setCurrentFont(local ?? "krypton");
  }, []);

  return fontInfo.map((font: any) => (
    <Font {...font} key={font.name} currentFont={currentFont} setFont={setFont} />
  ));
};

export default FontInfo;
