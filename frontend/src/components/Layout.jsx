import Titlebar from "./Titlebar";
import Sidebar from "./Sidebar";
import Explorer from "./Explorer";
import Footer from "./Footer";
import Tabs from "./Tabs";
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
