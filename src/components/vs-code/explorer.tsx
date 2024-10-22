import { useState } from "react";
import { ChevronRight } from "@/components/vs-code/icons";
import styles from "@/styles/vs-code/explorer.module.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEditor } from "@/lib/hooks/use-editor";
import { tabInfo } from "@/lib/tab-info";

const Explorer = () => {
  const { showSidebar, addTabs } = useEditor();
  const [portfolioOpen, setPortfolioOpen] = useState(true);
  const pathname = usePathname();

  if (!showSidebar) return;

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
          {tabInfo.map((item) => (
            <Link
              href={item.path}
              key={item.filename}
              className={styles.link}
              onClick={() => addTabs(item)}
            >
              <div
                className={`${styles.file} ${
                  pathname === item.path && styles.active
                }`}
              >
                <Image
                  src={item.icon}
                  alt={item.filename}
                  height={18}
                  width={18}
                />{" "}
                <p>{item.filename}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explorer;
