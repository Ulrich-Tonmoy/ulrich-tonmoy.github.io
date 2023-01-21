import { useEffect } from "react";
import Layout from "./components/Layout";
import "./styles/globals.css";
import "./styles/themes.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, Articles, Contact, Github, Home, Projects, Settings } from "./pages";

function App() {
    useEffect(() => {
        if (localStorage.getItem("theme")) {
            document.documentElement.setAttribute("data-theme", localStorage.getItem("theme"));
        }
    }, []);

    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    {/* <Route path="/work" element={<Articles />} /> */}
                    <Route path="/articles" element={<Articles />} />
                    <Route path="/projects" element={<Projects />} />
                    {/* <Route path="/skills" element={<Github />} /> */}
                    <Route path="/github" element={<Github />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
