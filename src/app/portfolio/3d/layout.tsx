import { Work_Sans } from "next/font/google";
import { Metadata } from "next";

const inter = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tonmoy - 3D Portfolio",
  description: "Tonmoy's portfolio website",
};

const Portfolio3DLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default Portfolio3DLayout;
