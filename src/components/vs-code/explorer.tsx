import { useState } from "react";
import { ChevronRight } from "@/components/vs-code/icons";
import styles from "@/styles/vs-code/explorer.module.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const explorerItems = [
  {
    name: "home.jsx",
    path: "/portfolio",
    icon: "react_icon.svg",
  },
  {
    name: "about.html",
    path: "/portfolio/about",
    icon: "html_icon.svg",
  },
  {
    name: "skills.json",
    path: "/portfolio/skills",
    icon: "json_icon.svg",
  },
  {
    name: "projects.js",
    path: "/portfolio/projects",
    icon: "js_icon.svg",
  },
  {
    name: "github.md",
    path: "/portfolio/github",
    icon: "markdown_icon.svg",
  },
  {
    name: "contact.css",
    path: "/portfolio/contact",
    icon: "css_icon.svg",
  },
  {
    name: "desk.blend",
    path: "/portfolio/desk",
    icon: "blender.png",
  },
];

const Explorer = () => {
  const [portfolioOpen, setPortfolioOpen] = useState(true);
  const pathname = usePathname();

  return (
    <div className={styles.explorer}>
      <p className={styles.title}>Explorer</p>
      <div>
        <input
          type="checkbox"
          className={styles.checkbox}
          id="portfolio-checkbox"
          checked={portfolioOpen}
          onChange={() => setPortfolioOpen(!portfolioOpen)}
        />
        <label htmlFor="portfolio-checkbox" className={styles.heading}>
          <ChevronRight
            className={styles.chevron}
            style={portfolioOpen ? { transform: "rotate(90deg)" } : {}}
          />
          Portfolio
        </label>
        <div
          className={styles.files}
          style={portfolioOpen ? { display: "block" } : { display: "none" }}
        >
          {explorerItems.map((item) => (
            <Link href={item.path} key={item.name} className={styles.link}>
              <div
                className={`${styles.file} ${pathname === item.path && styles.active}`}
              >
                <Image src={`/${item.icon}`} alt={item.name} height={18} width={18} />{" "}
                <p>{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explorer;
