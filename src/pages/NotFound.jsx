import { Link } from "react-router-dom";
import styles from "../styles/NotFound.module.css";

const NotFound = () => {
    return (
        <div className={styles.notfoundContainer}>
            <div className={styles.notfound}>
                <div className={styles.notfound404}>
                    <h1>404</h1>
                    <h2>Page not found</h2>
                </div>
                <Link to="/">Home</Link>
            </div>
        </div>
    );
};

export default NotFound;
