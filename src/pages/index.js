import { lazy } from "react";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Skills = lazy(() => import("./Skills"));
const Github = lazy(() => import("./Github"));
const Projects = lazy(() => import("./Projects"));
const Contact = lazy(() => import("./Contact"));
const Settings = lazy(() => import("./Settings"));
const NotFound = lazy(() => import("./NotFound"));

export { Home, About, Skills, Github, Projects, Contact, Settings, NotFound };
