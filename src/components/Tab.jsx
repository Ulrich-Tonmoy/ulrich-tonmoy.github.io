import { Link, useLocation } from "react-router-dom";
import styles from "../styles/Tab.module.css";

const Tab = ({ icon, filename, path }) => {
    const router = useLocation();

    return (
        <Link to={path}>
            <div className={`${styles.tab} ${router.pathname === path && styles.active}`}>
                <img src={icon} alt={filename} height={18} width={18} />
                <p>{filename}</p>
            </div>
        </Link>
    );
};

export default Tab;
