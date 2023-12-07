import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname().split("3d/")[1];

  return (
    <header className="header">
      <Link
        href="/portfolio/3d"
        className="w-20 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">Tonmoy</p>
      </Link>
      <nav className="flex text-lg gap-7 font-medium">
        <Link
          href="/portfolio/3d/about"
          className={`${path === "about" ? "text-blue-500" : "text-black"}`}
        >
          About
        </Link>
        <Link
          href="/portfolio/3d/projects"
          className={`${path === "projects" ? "text-blue-500" : "text-black"}`}
        >
          Projects
        </Link>
        <Link
          href="/portfolio/3d/desk"
          className={`${path === "desk" ? "text-blue-500" : "text-black"}`}
        >
          Desk
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
