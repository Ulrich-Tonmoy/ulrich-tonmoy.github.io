import React from "react";
import TitleBar from "./titlebar";
import Sidebar from "./sidebar";
import Explorer from "./explorer";
import Tabs from "./tabs";
import StatusBar from "./status-bar";
import styles from "@/styles/vs-code/vs-code.module.css";
import { useEditor } from "@/lib/hooks/use-editor";

const VSCode = ({ children }: { children: React.ReactNode }) => {
  const { fontName, showSidebar } = useEditor();
  console.log(fontName);

  return (
    <main className={fontName}>
      <TitleBar />
      <div className={styles.main}>
        <Sidebar />
        {showSidebar && <Explorer />}
        <div style={{ width: "100%" }}>
          <Tabs />
          <main className={styles.content}>{children}</main>
        </div>
      </div>
      <StatusBar />
    </main>
  );
};

export default VSCode;
