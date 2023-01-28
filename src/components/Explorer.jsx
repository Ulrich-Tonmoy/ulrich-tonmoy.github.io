import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { ChevronRight } from "./icons";
import styles from "../styles/Explorer.module.css";

const explorerItems = [
    {
        name: "home.jsx",
        path: "/home",
        icon: "react_icon.svg",
    },
    {
        name: "about.html",
        path: "/about",
        icon: "html_icon.svg",
    },
    {
        name: "skills.json",
        path: "/skills",
        icon: "json_icon.svg",
    },
    {
        name: "projects.js",
        path: "/projects",
        icon: "js_icon.svg",
    },
    {
        name: "github.md",
        path: "/github",
        icon: "markdown_icon.svg",
    },
    {
        name: "contact.css",
        path: "/contact",
        icon: "css_icon.svg",
    },
];

const Explorer = () => {
    const [portfolioOpen, setPortfolioOpen] = useState(true);
    const router = useLocation();

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
                        <Link to={item.path} key={item.name} className={styles.link}>
                            <div
                                className={`${styles.file} ${
                                    router.pathname === item.path && styles.active
                                }`}
                            >
                                <img src={`/${item.icon}`} alt={item.name} height={18} width={18} />{" "}
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
