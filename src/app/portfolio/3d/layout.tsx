import { Work_Sans } from "next/font/google";
import { Metadata } from "next";
import { Footer, Navbar } from "@/components/3d";

const WorkSans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tonmoy - 3D Portfolio",
  description: "Tonmoy's portfolio website",
};

const Portfolio3DLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={`${WorkSans.className} bg-slate-300/20`}>
      <link rel="shortcut icon" href="/3favicon.ico" type="image/x-icon" />
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Portfolio3DLayout;
