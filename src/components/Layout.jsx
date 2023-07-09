import { Titlebar, Sidebar, Explorer, Footer, Tabs } from "./";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Titlebar />
      <div className={styles.main}>
        <Sidebar />
        <Explorer />
        <div style={{ width: "100%" }}>
          <Tabs />
          <main className={styles.content}>{children}</main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
