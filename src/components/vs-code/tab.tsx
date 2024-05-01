import Link from "next/link";
import styles from "@/styles/vs-code/tab.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Tab = ({ icon, filename, path }: any) => {
  const pathname = usePathname();

  return (
    <Link href={path}>
      <div className={`${styles.tab} ${pathname === path && styles.active}`}>
        <Image src={icon} alt={filename} height={18} width={18} />
        <p>{filename}</p>
      </div>
    </Link>
  );
};

export default Tab;
