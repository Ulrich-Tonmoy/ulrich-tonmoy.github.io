import Link from "next/link";
import styles from "@/styles/vs-code/tab.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { CloseIcon } from "./icons";
import { cn } from "@/lib/utils";

const Tab = ({ icon, filename, path }: any) => {
  const pathname = usePathname();

  return (
    <Link
      href={path}
      className={cn(
        `${styles.tab} ${pathname === path && styles.active}`,
        "group"
      )}
    >
      <Image src={icon} alt={filename} height={18} width={18} />
      <p>{filename}</p>
      <span className="ml-2 p-1 rounded-md flex items-center group-hover:visible invisible hover:bg-white/20">
        <CloseIcon />
      </span>
    </Link>
  );
};

export default Tab;
