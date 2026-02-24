import React from 'react'
import './Skills.css'

function Skills() {
  const skills = [
    { name: 'Python', category: 'Back-end' },
    { name: 'HTML', category: 'Front-end' },
    { name: 'CSS', category: 'Front-end' },
    { name: 'JavaScript', category: 'Front-end' },
    { name: 'React', category: 'Front-end' },
    { name: 'Bootstrap', category: 'Framework' },
    { name: 'MySQL', category: 'Database' },
    { name: 'Git', category: 'Tool' },
    { name: 'GitHub', category: 'Tool' },
    { name: 'VS Code', category: 'Tool' },
    { name: 'Vercel', category: 'Tool' },
    { name: 'MS Office', category: 'Tool' },
    { name: 'PowerBI', category: 'Tool' }
  ];

  return (
    <div id="skills">
      <h1>Technical Skills</h1>
      <h3>My Tech Stack</h3>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <h4>{skill.name}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills