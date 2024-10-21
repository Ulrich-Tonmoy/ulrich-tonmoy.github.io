import { useEditor } from "@/lib/hooks/use-editor";
import { Tab } from "./";
import styles from "@/styles/vs-code/tabs.module.css";

const Tabs = () => {
  const { openedTabs } = useEditor();

  return (
    <div className={styles.tabs}>
      {openedTabs.map((tab) => (
        <Tab
          key={tab.filename}
          icon={tab.icon}
          filename={tab.filename}
          path={tab.path}
        />
      ))}
    </div>
  );
};

export default Tabs;
