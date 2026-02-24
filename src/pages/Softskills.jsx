import React from 'react';
import './Softskills.css';

function Softskills() {
  const softskills = [
    'Communication',
    'Team Work',
    'Problem Solving',
    'Time Management',
    'Leadership',
    'Adaptability',
    'Critical Thinking',
    'Creativity'
  ];

  return (
    <div id="softskills">
      <h1>Soft Skills</h1>
      <h3>Personal Strengths</h3>
      <div className="softskills-grid">
        {softskills.map((skill, index) => (
          <div key={index} className="softskill-card">
            <h4>{skill}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Softskills;
