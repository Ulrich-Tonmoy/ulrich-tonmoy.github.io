import { ThemeInfo, FontInfo } from "@/components/vs-code";
import styles from "@/styles/vs-code/settings-page.module.css";

const Settings = () => {
  return (
    <>
      <h2>Manage Themes</h2>
      <div className={styles.container}>
        <ThemeInfo />
        <FontInfo />
      </div>
    </>
  );
};

export default Settings;
