import { Metadata } from "next";
import { Footer, Navbar } from "@/components/3d";

export const metadata: Metadata = {
  title: "Tonmoy - 3D Portfolio",
  description: "Tonmoy's portfolio website",
};

const Portfolio3DLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-slate-300/20 font-Radon">
      <link rel="shortcut icon" href="/3favicon.ico" type="image/x-icon" />
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Portfolio3DLayout;
