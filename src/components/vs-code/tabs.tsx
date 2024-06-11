import { Tab } from "./";
import styles from "@/styles/vs-code/tabs.module.css";

const Tabs = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/react_icon.svg" filename="home.jsx" path="/portfolio/vs-code" />
      <Tab icon="/html_icon.svg" filename="about.html" path="/portfolio/vs-code/about" />
      <Tab
        icon="/json_icon.svg"
        filename="skills.json"
        path="/portfolio/vs-code/skills"
      />
      <Tab
        icon="/js_icon.svg"
        filename="projects.js"
        path="/portfolio/vs-code/projects"
      />
      <Tab
        icon="/markdown_icon.svg"
        filename="github.md"
        path="/portfolio/vs-code/github"
      />
      <Tab
        icon="/css_icon.svg"
        filename="contact.css"
        path="/portfolio/vs-code/contact"
      />
    </div>
  );
};

export default Tabs;
