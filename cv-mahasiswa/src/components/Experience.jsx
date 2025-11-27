import React from 'react';
import data from '../data/dataMahasiswa.json';

const Experience = () => {
  return (
    <div className="card section-padding">
      <h2 className="section-title">Experience</h2>
      
      <div className="experience-list">
        {data.experiences.map((exp) => (
          <div key={exp.id} className="experience-item">
            <img src={exp.image_url} alt="Logo" className="company-logo" />
            
            <div className="experience-details">
              <h3 className="role-title">{exp.title}</h3>
              <p className="company-name">{exp.organization}</p>
              <p className="date-range">
                {exp.start_date} - {exp.end_date || "Present"}
              </p>
              <p style={{ fontSize: '14px', lineHeight: '1.4' }}>
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;