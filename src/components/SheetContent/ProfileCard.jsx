const ProfileCard = ({ isDark }) => (
  <div className="flex flex-col items-center mb-6">
    <img
      src="https://scontent.fccu10-1.fna.fbcdn.net/v/t39.30808-6/513045973_4066811733564775_3446498194797642414_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=7afjbbbEb64Q7kNvwGTe318&_nc_oc=Adku0wDrnxxLzLfIcEs36_dG9ddtkUe9e2gbjrWcOY79dbd3-Wm3cEeGfbUu9Yg0an4&_nc_zt=23&_nc_ht=scontent.fccu10-1.fna&_nc_gid=1BXAnQofsoGSnz6T93_BTA&oh=00_AfSM1nWabZ4a2pJDyzOYgSUCowpQsRCN7aQq5pd4nbEVnw&oe=68787679"
      alt="Profile"
      className="w-24 h-24 rounded-full shadow-lg mb-2 object-cover"
    />
    <h2 className="text-xl font-bold">Samaresh Das</h2>
    <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
      Software Engineer · Burdwan, India
    </p>
  </div>
);

export default ProfileCard;
