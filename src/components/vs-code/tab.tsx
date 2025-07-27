import Link from "next/link";
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
        `flex items-center cursor-pointer text-[#ececec] text-sm bg-[var(--tab-bg)] border border-[var(--tab-border)] pt-2 pr-1 pb-2 pl-5 hover:bg-[var(--tab-active-bg)] hover:border-b-0 ${
          pathname === path &&
          "border-t border-t-[var(--accent-color)] bg-[var(--tab-active-bg)] border-b-0 "
        }`,
        "group",
      )}
    >
      <Link href={path} className="flex">
        <Image src={icon} alt={filename} height={18} width={18} />
        <p className="ml-1">{filename}</p>
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
