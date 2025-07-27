import { ThemeInfo, FontInfo } from "@/components/vs-code";

const Settings = () => {
  return (
    <>
      <h2>Manage Themes</h2>
      <div className="grid items-center [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] my-4">
        <ThemeInfo />
        <FontInfo />
      </div>
    </>
  );
};

export default Settings;
