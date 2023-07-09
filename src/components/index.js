import { lazy } from "react";

const ContactCode = lazy(() => import("./ContactCode"));
const Explorer = lazy(() => import("./Explorer"));
const Footer = lazy(() => import("./Footer"));
const Hero = lazy(() => import("./Hero"));
const Layout = lazy(() => import("./Layout"));
const CanvasLoader = lazy(() => import("./Loader"));
const Modal = lazy(() => import("./Modal"));
const ProjectCard = lazy(() => import("./ProjectCard"));
const Sidebar = lazy(() => import("./Sidebar"));
const Tab = lazy(() => import("./Tab"));
const Tabs = lazy(() => import("./Tabs"));
const ThemeInfo = lazy(() => import("./ThemeInfo"));
const Titlebar = lazy(() => import("./Titlebar"));

export {
  ContactCode,
  Explorer,
  Footer,
  Hero,
  Layout,
  CanvasLoader,
  Modal,
  ProjectCard,
  Sidebar,
  Tab,
  Tabs,
  ThemeInfo,
  Titlebar,
};
