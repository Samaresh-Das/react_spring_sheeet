import { useEffect } from "react";
import "./App.css";
import DarkMode from "./components/DarkMode";
import SpringSheet from "./components/SpringSheet";
import { useDarkMode } from "./context/DarkMode";

function App() {
  const { isDark } = useDarkMode();

  useEffect(() => {
    document.body.style.backgroundColor = isDark ? "#000" : "#fff";
    document.body.style.color = isDark ? "#fff" : "#000";
  }, [isDark]);

  return (
    <div className={isDark ? "bg-black text-white" : "bg-white text-black"}>
      <div>
        <DarkMode />
        <SpringSheet />
      </div>
    </div>
  );
}

export default App;
