import { create } from "zustand";
import { tabInfo } from "../tab-info";

interface Tabs {
  filename: string;
  icon: string;
  path: string;
}

interface EditorStore {
  showSidebar: boolean;
  openedTabs: Tabs[];
  closeTabs: (filename: string) => void;
  addTabs: (tabInfo: Tabs) => void;
  toggleSidebar: (show: boolean) => void;
}

export const useEditor = create<EditorStore>((set) => ({
  showSidebar: true,
  openedTabs: tabInfo,
  closeTabs: (filename: string) => {
    set((state) => ({
      openedTabs: state.openedTabs.filter((tab) => tab.filename !== filename),
    }));
  },
  addTabs: (tabInfo: Tabs) => {
    set((state) => ({
      openedTabs: state.openedTabs.some(
        (tab) => tab.filename == tabInfo.filename
      )
        ? state.openedTabs
        : [...state.openedTabs, tabInfo],
    }));
  },
  toggleSidebar: (show: boolean) => {
    set({ showSidebar: show });
  },
}));
