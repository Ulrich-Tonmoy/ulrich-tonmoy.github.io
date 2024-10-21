import { create } from "zustand";
import { tabInfo } from "../tab-info";

interface Tabs {
  filename: string;
  icon: string;
  path: string;
}

interface EditorStore {
  showSidebar: boolean;
  fontName: string;
  openedTabs: Tabs[];
  closeTabs: (filename: string) => void;
  toggleSidebar: (show: boolean) => void;
  changeFont: (fontName: string) => void;
}

export const useEditor = create<EditorStore>((set) => ({
  showSidebar: true,
  fontName: "font-Krypton",
  openedTabs: tabInfo,
  closeTabs: (filename: string) => {
    set((state) => ({
      openedTabs: state.openedTabs.filter((tab) => tab.filename !== filename),
    }));
  },
  toggleSidebar: (show: boolean) => {
    set({ showSidebar: show });
  },
  changeFont: (fontName: string) => {
    set({ fontName: fontName });
  },
}));
