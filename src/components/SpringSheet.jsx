import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { useDarkMode } from "../context/DarkMode";
import Buttons from "./Buttons";
import ProfileCard from "./SheetContent/ProfileCard";
import FullContent from "./SheetContent/FullContent";

const SpringSheet = () => {
  const containerRef = useRef(null);
  const [currentArea, setCurrentArea] = useState(0);
  const [activeTab, setActiveTab] = useState("about");
  const [viewHeight, setViewHeight] = useState(0);
  const { isDark } = useDarkMode();

  const snapAreas = [90, 50, 10];

  const startingPositon = useRef(0);
  const top = useRef(0);

  const maxSheetHeight = 90;

  //to calculate how much below the sheet move in pixels for a given snap point
  const getVertical = (index) => {
    const inView = (maxSheetHeight * snapAreas[index]) / 100;
    const hiddenArea = maxSheetHeight - inView;
    return (viewHeight * hiddenArea) / 100;
  };

  //function to snap the sheet at ony given snap point with smooth transitions. This is the main one responsible for snapping
  const getSnappedToSnapArea = (index) => {
    if (!containerRef.current || viewHeight === 0) return;
    const y = getVertical(index);
    containerRef.current.style.transition = `transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)`; //to give a bounce effect
    containerRef.current.style.transform = `translateY(${y}px)`;
    setCurrentArea(index);
  };

  //for storing the initial vertical position on mouse or event click
  const onDragStart = (e) => {
    if (!containerRef.current) return;
    containerRef.current.style.transition = "none";

    startingPositon.current = e.clientY;
    const rect = containerRef.current.getBoundingClientRect();

    top.current = rect.top;

    window.addEventListener("pointermove", onDragMove);
    window.addEventListener("pointerup", onDragEnd);
  };

  //for tracking the movement of the drag
  const onDragMove = (e) => {
    const vert = e.clientY - startingPositon.current;
    let newVert = top.current + vert;

    newVert = Math.max(0, Math.min(newVert, viewHeight));

    containerRef.current.style.transform = `translateY(${newVert}px)`;
  };

  //to find the closes snap point while the sheet being dragged, to place it in the predefined snap points
  const getClosestSnapPointAfterDrag = (currentVert) => {
    const difference = snapAreas.map((_, i) =>
      Math.abs(currentVert - getVertical(i))
    );

    return difference.indexOf(Math.min(...difference));
  };

  //After the drag ends, it places the sheet to nearest snap points and remove listeners to remove bugs. This was the main thing which I struggled with as I was not sure at first to remove the listeners
  const onDragEnd = () => {
    const rect = containerRef.current.getBoundingClientRect();
    const topPixels = rect.top;
    const getClosestSnapPoint = getClosestSnapPointAfterDrag(topPixels);

    getSnappedToSnapArea(getClosestSnapPoint);

    window.removeEventListener("pointermove", onDragMove);
    window.removeEventListener("pointerup", onDragEnd);
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

  return (
    <div>
      <Buttons
        snapAreas={snapAreas}
        currentArea={currentArea}
        isDark={isDark}
        onSnap={getSnappedToSnapArea}
      />

      <div
        ref={containerRef}
        className={`fixed bottom-0 left-0 right-0 z-50 shadow-2xl rounded-t-3xl transition-transform duration-300 ease-out ${
          isDark ? "bg-gray-900 text-gray-200" : "bg-gray-50 text-gray-900"
        }`}
        style={{
          height: "90vh",
          transform: `translateY(${getVertical(currentArea)}px)`,
          touchAction: "none",
          overflow: "hidden",
        }}
      >
        {/* Draggable upper section of the sheet */}
        <div
          className={`w-full flex items-center justify-center py-4 ${
            isDark ? "bg-gray-800" : "bg-gray-200"
          } rounded-t-3xl cursor-grab active:cursor-grabbing`}
          onPointerDown={onDragStart}
        >
          <div className="h-1.5 w-16 bg-gray-500 rounded-full" />
        </div>
        {/* Isolated html css contents to seperate components */}
        <FullContent
          isDark={isDark}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
    </div>
  );
};

export default SpringSheet;
