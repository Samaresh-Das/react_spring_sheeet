import React from "react";

const Buttons = ({ snapAreas, currentArea, isDark, onSnap }) => {
  return (
    <div
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-[60] flex gap-3 px-4 py-2 rounded-full backdrop-blur-sm shadow ${
        isDark ? "bg-white/40" : "bg-black/25"
      }`}
    >
      {snapAreas.map((point, i) => (
        <button
          key={i}
          onClick={() => onSnap(i)}
          className={`px-3 py-1.5 rounded-full transition text-sm font-medium ${
            currentArea === i
              ? isDark
                ? "bg-white text-black"
                : "bg-black text-white"
              : isDark
              ? "bg-white/20 text-white hover:bg-white/30"
              : "bg-black/10 text-black hover:bg-black/20"
          }`}
        >
          {point}%
        </button>
      ))}
    </div>
  );
};

export default Buttons;
