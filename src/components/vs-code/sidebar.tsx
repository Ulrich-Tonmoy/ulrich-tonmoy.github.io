import {
  FilesIcon,
  GithubIcon,
  CodeIcon,
  PencilIcon,
  PersonIcon,
  MailIcon,
  AccountIcon,
  SettingsIcon,
} from "@/components/vs-code/icons";
import { useEditor } from "@/lib/hooks/use-editor";
import styles from "@/styles/vs-code/sidebar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarTopItems = [
  {
    Icon: FilesIcon,
    path: "/portfolio",
  },
  {
    Icon: PersonIcon,
    path: "/portfolio/about",
  },
  {
    Icon: PencilIcon,
    path: "/portfolio/skills",
  },
  {
    Icon: CodeIcon,
    path: "/portfolio/projects",
  },
  {
    Icon: GithubIcon,
    path: "/portfolio/github",
  },
  {
    Icon: MailIcon,
    path: "/portfolio/contact",
  },
];

const sidebarBottomItems = [
  {
    Icon: AccountIcon,
    path: "/portfolio/about",
  },
  {
    Icon: SettingsIcon,
    path: "/portfolio/settings",
  },
];

const Sidebar = () => {
  const { showSidebar, toggleSidebar } = useEditor();
  const pathname = usePathname();

  const onClickIcon = (isActive: boolean) => {
    const show = isActive ? (showSidebar ? false : true) : false;
    toggleSidebar(show);
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        {sidebarTopItems.map(({ Icon, path }) => (
          <Link href={path} key={path}>
            <div
              className={`${styles.iconContainer} ${
                pathname === path && styles.active
              }`}
            >
              <Icon
                onClick={() => onClickIcon(pathname === path)}
                fill={
                  pathname === path
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
            <Link href={path}>
              <Icon
                onClick={() => onClickIcon(pathname === path)}
                fill={
                  pathname === path
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
