import { Work_Sans } from "next/font/google";
import { Metadata } from "next";

const WorkSans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tonmoy - 3D Portfolio",
  description: "Tonmoy's portfolio website",
};

const Portfolio3DLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={`${WorkSans.className} bg-slate-300/20`}>
      {children}
    </main>
  );
};

export default Portfolio3DLayout;
