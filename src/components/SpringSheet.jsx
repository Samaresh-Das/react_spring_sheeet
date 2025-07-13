import React, { useRef, useState } from "react";
import { useEffect } from "react";

const SpringSheet = () => {
  const containerRef = useRef(null);
  const [currentArea, setCurrentArea] = useState(0);
  const [activeTab, setActiveTab] = useState("about");
  const [viewHeight, setViewHeight] = useState(0);

  const snapAreas = [90, 50, 10];

  const startingPositon = useRef(0);
  const top = useRef(0);

  const maxSheetHeight = 90;

  const getVertical = (index) => {
    const inView = (maxSheetHeight * snapAreas[index]) / 100;
    const hiddenArea = maxSheetHeight - inView;
    return (viewHeight * hiddenArea) / 100;
  };

  const getSnappedToSnapArea = (index) => {
    if (!containerRef.current || viewHeight === 0) return;
    const y = getVertical(index);
    containerRef.current.style.transform = `transform 0.3s ease-out`;
    containerRef.current.style.transform = `translateY(${y}px)`;
    setCurrentArea(index);
  };

  useEffect(() => {
    const handleResize = () => {
      const newViewHeight = window.innerHeight;
      setViewHeight(newViewHeight);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (viewHeight > 0) {
      getSnappedToSnapArea(currentArea);
    }
  }, [viewHeight]);

  const buttonColors = (point) => {
    if (point === 90) {
      return "bg-lime-500 hover:bg-lime-600";
    } else if (point === 50) {
      return "bg-yellow-500 hover:bg-yellow-600";
    } else {
      return "bg-red-500 hover:bg-red-700";
    }
  };

  return (
    <div
      ref={containerRef}
      className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-2xl rounded-t-3xl transition-transform duration-300 ease-out"
      style={{
        height: "90vh",
        transform: `translateY(${getVertical(currentArea)}px)`,
        touchAction: "none",
        overflow: "hidden",
      }}
    >
      <div className="p-4 flex justify-center gap-4 border-t bg-gray-100">
        {snapAreas.map((point, i) => (
          <button
            key={i}
            onClick={() => getSnappedToSnapArea(i)}
            className={`${buttonColors(
              point
            )} text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition`}
          >
            {point}%
          </button>
        ))}
      </div>

      <div className="p-6 overflow-y-auto h-[calc(90vh-100px)]">
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://scontent.fccu10-1.fna.fbcdn.net/v/t39.30808-6/513045973_4066811733564775_3446498194797642414_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=7afjbbbEb64Q7kNvwGTe318&_nc_oc=Adku0wDrnxxLzLfIcEs36_dG9ddtkUe9e2gbjrWcOY79dbd3-Wm3cEeGfbUu9Yg0an4&_nc_zt=23&_nc_ht=scontent.fccu10-1.fna&_nc_gid=1BXAnQofsoGSnz6T93_BTA&oh=00_AfSM1nWabZ4a2pJDyzOYgSUCowpQsRCN7aQq5pd4nbEVnw&oe=68787679"
            alt="Profile"
            className="w-24 h-24 rounded-full shadow-lg mb-2 object-cover"
          />
          <h2 className="text-xl font-bold">Samaresh Das</h2>
          <p className="text-gray-600">Software Engineer · Burdwan, India</p>
        </div>

        <div className="flex justify-center mb-4">
          {["about", "hobbies", "favorites"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 mx-1 rounded-lg transition ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div>
          {activeTab === "about" && (
            <div className="space-y-2 text-gray-700">
              <p>
                Samaresh is a passionate software enginner with a knack for
                problem-solving. Expertised in web development area and
                enthusiastic about learning new technologies.
              </p>
              <p>He enjoys coding, gaming, and exploring new things.</p>
            </div>
          )}

          {activeTab === "hobbies" && (
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>💻 Coding & Exploring Problems</li>
              <li>🎮 Gaming</li>
              <li>🎬 Watching Movies</li>
              <li>🏋️ Gym Freak</li>
            </ul>
          )}

          {activeTab === "favorites" && (
            <div className="grid grid-cols-3 gap-3">
              {[1011, 1022, 1033, 1044, 1055, 1066].map((id) => (
                <img
                  key={id}
                  src={`https://picsum.photos/id/${id}/200`}
                  alt="Fav"
                  className="rounded-lg object-cover h-24 w-full"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpringSheet;
