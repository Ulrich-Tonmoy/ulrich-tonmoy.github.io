import {
  ErrorIcon,
  WarningIcon,
  BellIcon,
  CheckIcon,
  NextIcon,
  SourceControlIcon,
} from "@/components/icons";
import styles from "@/styles/status-bar.module.css";

const StatusBar = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <a
          href="https://github.com/Ulrich-Tonmoy/ulrich-tonmoy.github.io"
          target="_blank"
          rel="noreferrer noopener"
          className={styles.section}
        >
          <SourceControlIcon className={styles.icon} />
          <p>main</p>
        </a>
        <div className={styles.section}>
          <ErrorIcon className={styles.icon} />
          <p className={styles.errorText}>0</p>&nbsp;&nbsp;
          <WarningIcon className={styles.icon} />
          <p>0</p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.section}>
          <NextIcon className={styles.icon} />
          <p className="ml-1">Powered by Next.js</p>
        </div>
        <div className={styles.section}>
          <CheckIcon className={styles.icon} />
          <p>Prettier</p>
        </div>
        <div className={styles.section}>
          <BellIcon />
        </div>
      </div>
    </footer>
  );
};

export default StatusBar;
