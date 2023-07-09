import { Tab } from "./";
import styles from "../styles/Tabs.module.css";

const Tabs = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/react_icon.svg" filename="home.jsx" path="/home" />
      <Tab icon="/html_icon.svg" filename="about.html" path="/about" />
      <Tab icon="/json_icon.svg" filename="skills.json" path="/skills" />
      <Tab icon="/js_icon.svg" filename="projects.js" path="/projects" />
      <Tab icon="/markdown_icon.svg" filename="github.md" path="/github" />
      <Tab icon="/css_icon.svg" filename="contact.css" path="/contact" />
    </div>
  );
};

export default Tabs;
