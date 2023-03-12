import { useEffect } from "react";
import Layout from "./components/Layout";
import "./styles/globals.css";
import "./styles/themes.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, Skills, Contact, Github, Home, Projects, Settings, NotFound } from "./pages";

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
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/home" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/skills" element={<Skills />} />
                    <Route exact path="/projects" element={<Projects />} />
                    <Route exact path="/github" element={<Github />} />
                    <Route exact path="/contact" element={<Contact />} />
                    <Route exact path="/settings" element={<Settings />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
