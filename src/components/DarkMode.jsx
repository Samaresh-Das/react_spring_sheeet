import { MdDarkMode } from "react-icons/md";
import { useDarkMode } from "../context/DarkMode";

const DarkMode = () => {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <div className="absolute top-4 right-4">
      <button
        onClick={toggleDarkMode}
        className={`text-4xl ${isDark ? "text-white" : "text-black"}`}
      >
        <MdDarkMode />
      </button>
    </div>
  );
};

export default DarkMode;
