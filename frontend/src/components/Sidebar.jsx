import { Link, useLocation } from "react-router-dom";
import {
    FilesIcon,
    GithubIcon,
    CodeIcon,
    PencilIcon,
    PersonIcon,
    MailIcon,
    AccountIcon,
    SettingsIcon,
} from "./icons";
import styles from "../styles/Sidebar.module.css";

const sidebarTopItems = [
    {
        Icon: FilesIcon,
        path: "/home",
    },
    {
        Icon: PersonIcon,
        path: "/about",
    },
    {
        Icon: MailIcon,
        path: "/contact",
    },
    {
        Icon: CodeIcon,
        path: "/projects",
    },
    {
        Icon: PencilIcon,
        path: "/articles",
    },
    {
        Icon: GithubIcon,
        path: "/github",
    },
];

const sidebarBottomItems = [
    {
        Icon: AccountIcon,
        path: "/about",
    },
    {
        Icon: SettingsIcon,
        path: "/settings",
    },
];

const Sidebar = () => {
    const router = useLocation();

    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebarTop}>
                {sidebarTopItems.map(({ Icon, path }) => (
                    <Link to={path} key={path}>
                        <div
                            className={`${styles.iconContainer} ${
                                router.pathname === path && styles.active
                            }`}
                        >
                            <Icon
                                fill={
                                    router.pathname === path
                                        ? "rgb(225, 228, 232)"
                                        : "rgb(106, 115, 125)"
                                }
                                className={styles.icon}
                            />
                        </div>
                    </Link>
                ))}
            </div>
            <div className={styles.sidebarBottom}>
                {sidebarBottomItems.map(({ Icon, path }) => (
                    <div className={styles.iconContainer} key={path}>
                        <Link to={path}>
                            <Icon
                                fill={
                                    router.pathname === path
                                        ? "rgb(225, 228, 232)"
                                        : "rgb(106, 115, 125)"
                                }
                                className={styles.icon}
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;
