import React from 'react';
import './Achivement.css';

function Achivement() {
  const achievements = [
    {
      id: 1,
      title: "NCC Certification",
      description: "Certified National Cadet Corps member, demonstrating leadership and discipline",
      year: "2023-2025"
    },
    {
      id: 2,
      title: "District Level Youth Festival - Singing",
      description: "First Prize in singing competition at district level youth festival",
      year: "2024"
    }
  ];

  return (
    <div id="achivement">
      <h1>Achievements</h1>
      <h3>My Accomplishments</h3>
      <div className="achievement-grid">
        {achievements.map(achievement => (
          <div key={achievement.id} className="achievement-card">
            <h4>{achievement.title}</h4>
            <p className="year">{achievement.year}</p>
            <p>{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achivement;
