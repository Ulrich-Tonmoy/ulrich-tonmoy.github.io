import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Earth from "./components/earth/Earth";
import Portfolio from "./components/portfolio/Portfolio";
import ParticlesBackground from "./components/particles/ParticlesBackground";

function App() {
    return (
        <>
            <div className="particle">
                <ParticlesBackground />
            </div>
            <div className="canvas">
                <Canvas>
                    <Suspense fallback={null}>
                        <Earth />
                    </Suspense>
                </Canvas>
            </div>
            <Portfolio />
        </>
    );
}

export default App;
