import About from "./About";
import Favorites from "./Favorites";
import Hobbies from "./Hobbies";
import ProfileCard from "./ProfileCard";
import Tabs from "./Tabs";

const FullContent = ({ isDark, activeTab, setActiveTab }) => (
  <div className="p-6 overflow-y-auto" style={{ height: "calc(90vh - 80px)" }}>
    <ProfileCard isDark={isDark} />
    <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

    {activeTab === "about" && <About isDark={isDark} />}
    {activeTab === "hobbies" && <Hobbies isDark={isDark} />}
    {activeTab === "favorites" && <Favorites />}
  </div>
);

export default FullContent;
