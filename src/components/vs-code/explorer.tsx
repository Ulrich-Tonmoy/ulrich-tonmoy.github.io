import { useState } from "react";
import { ChevronRight } from "@/components/vs-code/icons";
import styles from "@/styles/vs-code/explorer.module.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const explorerItems = [
  {
    name: "home.jsx",
    path: "/portfolio/vs-code",
    icon: "react_icon.svg",
  },
  {
    name: "about.html",
    path: "/portfolio/vs-code/about",
    icon: "html_icon.svg",
  },
  {
    name: "skills.json",
    path: "/portfolio/vs-code/skills",
    icon: "json_icon.svg",
  },
  {
    name: "projects.js",
    path: "/portfolio/vs-code/projects",
    icon: "js_icon.svg",
  },
  {
    name: "github.md",
    path: "/portfolio/vs-code/github",
    icon: "markdown_icon.svg",
  },
  {
    name: "contact.css",
    path: "/portfolio/vs-code/contact",
    icon: "css_icon.svg",
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
