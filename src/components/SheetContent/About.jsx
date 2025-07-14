const About = ({ isDark }) => (
  <div className={`space-y-2 ${isDark ? "text-gray-200" : "text-gray-700"}`}>
    <p>
      Samaresh is a passionate software engineer with a knack for
      problem-solving. Expertised in web development area and enthusiastic about
      learning new technologies.
    </p>
    <p>He enjoys coding, gaming, and exploring new things.</p>
  </div>
);

export default About;
