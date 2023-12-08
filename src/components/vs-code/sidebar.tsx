import {
  FilesIcon,
  GithubIcon,
  CodeIcon,
  PencilIcon,
  PersonIcon,
  MailIcon,
  AccountIcon,
  SettingsIcon,
} from "@/components/icons";
import styles from "@/styles/sidebar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarTopItems = [
  {
    Icon: FilesIcon,
    path: "/portfolio/vs-code",
  },
  {
    Icon: PersonIcon,
    path: "/portfolio/vs-code/about",
  },
  {
    Icon: PencilIcon,
    path: "/portfolio/vs-code/skills",
  },
  {
    Icon: CodeIcon,
    path: "/portfolio/vs-code/projects",
  },
  {
    Icon: GithubIcon,
    path: "/portfolio/vs-code/github",
  },
  {
    Icon: MailIcon,
    path: "/portfolio/vs-code/contact",
  },
];

const sidebarBottomItems = [
  {
    Icon: AccountIcon,
    path: "/portfolio/vs-code/about",
  },
  {
    Icon: SettingsIcon,
    path: "/portfolio/vs-code/settings",
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        {sidebarTopItems.map(({ Icon, path }) => (
          <Link href={path} key={path}>
            <div
              className={`${styles.iconContainer} ${pathname === path && styles.active}`}
            >
              <Icon
                fill={pathname === path ? "rgb(225, 228, 232)" : "rgb(106, 115, 125)"}
                className={styles.icon}
              />
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.sidebarBottom}>
        {sidebarBottomItems.map(({ Icon, path }) => (
          <div className={styles.iconContainer} key={path}>
            <Link href={path}>
              <Icon
                fill={pathname === path ? "rgb(225, 228, 232)" : "rgb(106, 115, 125)"}
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
