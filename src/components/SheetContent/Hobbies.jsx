const Hobbies = ({ isDark }) => (
  <ul
    className={`list-disc list-inside ${
      isDark ? "text-gray-200" : "text-gray-700"
    } space-y-1`}
  >
    <li>💻 Coding & Exploring Problems</li>
    <li>🎮 Gaming</li>
    <li>🎬 Watching Movies</li>
    <li>🏋️ Gym Freak</li>
  </ul>
);

export default Hobbies;
