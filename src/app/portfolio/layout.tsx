import { Metadata } from "next";
import styles from "@/styles/vs-code/layout.module.css";
import {
  Explorer,
  Sidebar,
  StatusBar,
  Tabs,
  TitleBar,
} from "@/components/vs-code";

export const metadata: Metadata = {
  title: "Tonmoy - VS Code Portfolio",
  description: "Tonmoy's portfolio website",
};

const VSCodeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <TitleBar />
      <div className={styles.main}>
        <Sidebar />
        <Explorer />
        <div style={{ width: "100%" }}>
          <Tabs />
          <main className={styles.content}>{children}</main>
        </div>
      </div>
      <StatusBar />
    </main>
  );
};

export default VSCodeLayout;
