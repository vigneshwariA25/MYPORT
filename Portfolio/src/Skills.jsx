import "./Skills.css";

function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git & GitHub",
    "UI/UX Design",
    "Python",
    "Java",
    "Bootstrap",
    "Figma",
    "Tailwind CSS",
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-card fade-in">
        <h2>My Skills</h2>
        <hr />
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;