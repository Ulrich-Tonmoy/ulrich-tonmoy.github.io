/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import { useEffect, useState } from "react";
import { themeInfo } from "@/lib/theme-info";
import { cn } from "@/lib/utils";

const Theme = ({ icon, name, publisher, theme, currentTheme, setTheme }: any) => {
  return (
    <div className="flex flex-col items-center my-6 text-center px-6">
      <Image src={icon} alt={name} height={100} width={100} />
      <div className="flex flex-col justify-between mt-4">
        <div>
          <h3>{name}</h3>
          <h5>{publisher}</h5>
        </div>
        <button
          onClick={() => setTheme(theme)}
          className={cn(
            `mt-3 border-none bg-[var(--button-bg)] text-[var(--button-text)] px-2 py-0.5 font-semibold cursor-pointer transition-all duration-500 ease-in-out hover:bg-[var(--accent-color)] focus:outline focus:outline-[var(--accent-color)] ${
              currentTheme === theme ? "disabled" : ""
            }`,
          )}
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
    <Theme {...theme} key={theme.theme} currentTheme={currentTheme} setTheme={setTheme} />
  ));
};

export default ThemeInfo;
