import React from 'react';
import data from '../data/dataMahasiswa.json';

const Skills = () => {
  return (
    <div className="card section-padding">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        {data.skills.map((skill) => (
          <span key={skill.id} className="skill-badge">
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;