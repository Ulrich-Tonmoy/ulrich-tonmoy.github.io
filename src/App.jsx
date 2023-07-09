import { useEffect } from "react";
import { Layout } from "./components";
import "./styles/globals.css";
import "./styles/themes.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Suspense } from "react";
import { About, Contact, Github, Home, NotFound, Projects, Settings, Skills } from "./pages";

function App() {
  useEffect(() => {
    if (localStorage.getItem("theme")) {
      document.documentElement.setAttribute("data-theme", localStorage.getItem("theme"));
    }
  }, []);

  return (
    <Router>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
