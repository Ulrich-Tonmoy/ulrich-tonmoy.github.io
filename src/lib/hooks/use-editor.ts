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
  toggleSidebar: (show: boolean) => {
    set({ showSidebar: show });
  },
}));
