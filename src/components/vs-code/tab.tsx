import Link from "next/link";
import styles from "@/styles/vs-code/tab.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { CloseIcon } from "./icons";
import { cn } from "@/lib/utils";
import { useEditor } from "@/lib/hooks/use-editor";

const Tab = ({ icon, filename, path }: any) => {
  const { closeTabs } = useEditor();
  const pathname = usePathname();

  return (
    <span
      className={cn(
        `${styles.tab} ${pathname === path && styles.active}`,
        "group"
      )}
    >
      <Link href={path} className="flex">
        <Image src={icon} alt={filename} height={18} width={18} />
        <p>{filename}</p>
      </Link>
      <span
        className="ml-2 p-1 rounded-md flex items-center group-hover:visible invisible hover:bg-white/20"
        onClick={(e) => {
          e.stopPropagation();
          closeTabs(filename);
        }}
      >
        <CloseIcon />
      </span>
    </span>
  );
};

export default Tab;
