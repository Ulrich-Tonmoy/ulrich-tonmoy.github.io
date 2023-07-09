import { lazy } from "react";

const EarthCanvas = lazy(() => import("./Earth"));
const ComputersCanvas = lazy(() => import("./Computers"));
const StarsCanvas = lazy(() => import("./Stars"));

export { EarthCanvas, ComputersCanvas, StarsCanvas };
