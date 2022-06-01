import "./App.scss";
import { Navbar } from "./components";
import { Header, About, Work, Skills, Footer } from "./containers";

function App() {
    return (
        <div className="app">
            <Navbar />
            <Header />
            <About />
            <Work />
            <Skills />
            <Footer />
        </div>
    );
}

export default App;
