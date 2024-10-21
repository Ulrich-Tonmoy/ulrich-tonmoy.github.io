import { Metadata } from "next";
import { VSCode } from "@/components/vs-code";

export const metadata: Metadata = {
  title: "Tonmoy - VS Code Portfolio",
  description: "Tonmoy's portfolio website",
};

const VSCodeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <VSCode>{children}</VSCode>
    </>
  );
};

export default VSCodeLayout;
