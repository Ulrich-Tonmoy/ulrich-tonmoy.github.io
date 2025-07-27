import { useEditor } from "@/lib/hooks/use-editor";
import { Tab } from "./";

const Tabs = () => {
  const { openedTabs } = useEditor();

  return (
    <div className="bg-[var(--tabs-bg)] overflow-x-auto hidden xl:flex">
      {openedTabs.map((tab) => (
        <Tab key={tab.filename} icon={tab.icon} filename={tab.filename} path={tab.path} />
      ))}
    </div>
  );
};

export default Tabs;
