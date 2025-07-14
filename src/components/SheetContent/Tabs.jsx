const Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = ["about", "hobbies", "favorites"];
  return (
    <div className="flex justify-center mb-4">
      {tabs.map((tab) => (
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
  );
};

export default Tabs;
