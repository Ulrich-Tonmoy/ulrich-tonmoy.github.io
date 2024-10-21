import { Tab } from "./";
import styles from "@/styles/vs-code/tabs.module.css";

const Tabs = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/react_icon.svg" filename="home.jsx" path="/portfolio" />
      <Tab icon="/html_icon.svg" filename="about.html" path="/portfolio/about" />
      <Tab
        icon="/json_icon.svg"
        filename="skills.json"
        path="/portfolio/skills"
      />
      <Tab
        icon="/js_icon.svg"
        filename="projects.js"
        path="/portfolio/projects"
      />
      <Tab
        icon="/markdown_icon.svg"
        filename="github.md"
        path="/portfolio/github"
      />
      <Tab
        icon="/css_icon.svg"
        filename="contact.css"
        path="/portfolio/contact"
      />
      <Tab
        icon="/blender.png"
        filename="desk.blend"
        path="/portfolio/desk"
      />
    </div>
  );
};

export default Tabs;
