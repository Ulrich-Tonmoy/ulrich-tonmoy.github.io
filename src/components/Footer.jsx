import { ErrorIcon, WarningIcon, BellIcon, CheckIcon, ReactIcon, SourceControlIcon } from "./icons";
import styles from "../styles/Footer.module.css";

const Footer = () => {
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
                    <ReactIcon className={styles.icon} />
                    <p>Powered by React.js</p>
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

export default Footer;
