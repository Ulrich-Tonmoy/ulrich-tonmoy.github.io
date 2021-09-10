import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Earth from "./components/earth/Earth";
import Home from "./pages/home/Home";
import ParticlesBackground from "./components/particles/ParticlesBackground";
import Loading from "./components/loading/Loading";
import Navbar from "./components/navbar/Navbar";

function App() {
    const [earth, setEarth] = useState(false);
    const [loading, setLoading] = useState(true);

    const loadEarth = () => {
        earth ? setEarth(false) : setEarth(true);
    };

    setTimeout(function () {
        setLoading(false);
    }, 3000);

    return loading ? (
        <Loading />
    ) : (
        <>
            <div className="particle">
                <ParticlesBackground />
            </div>
            {earth ? (
                <div className="canvas">
                    <Canvas>
                        <Suspense fallback={null}>
                            <Earth />
                        </Suspense>
                    </Canvas>
                </div>
            ) : (
                <></>
            )}
            <Navbar callback={loadEarth} />
            <Home className="particle" />
        </>
    );
}

export default App;
