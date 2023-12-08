import { DM_Sans } from "next/font/google";
import { Metadata } from "next";
import styles from "@/styles/layout.module.css";

const DMSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tonmoy - VS Code Portfolio",
  description: "Tonmoy's portfolio website",
};

const VSCodeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={`${DMSans.className}`}>
      <link rel="shortcut icon" href="/vfavicon.ico" type="image/x-icon" />
      {/* <Titlebar /> */}
      <div className={styles.main}>
        {/* <Sidebar /> */}
        {/* <Explorer /> */}
        <div style={{ width: "100%" }}>
          {/* <Tabs /> */}
          <main className={styles.content}>{children}</main>
        </div>
      </div>
      {/* <Footer /> */}
    </main>
  );
};

export default VSCodeLayout;
