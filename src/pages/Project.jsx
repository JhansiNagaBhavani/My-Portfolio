import React from 'react';
import './Project.css';

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Astro Website",
      description: "Modern, fast-loading web application built with Astro framework. Demonstrates static site generation, component-based architecture, and optimized performance with minimal JavaScript bundle size.",
      tech: [ "HTML5", "CSS3","VS code", "GitHub"],
      link: "https://jhansinagabhavani.github.io/Astro/",
      features: ["Static Site Generation", "Fast Performance", "SEO Optimized"]
    },
    {
      id: 2,
      title: "Coffee Shop Website ",
      description: "A comprehensive collection of interactive JavaScript projects showcasing DOM manipulation, API integration, and dynamic user interfaces. Features multiple mini-applications demonstrating core JavaScript concepts and modern web development practices.",
      tech: ["JavaScript", "HTML5", "CSS3", "DOM API", "VS code", "GitHub","vercel" ],
      link: "https://jsproject-gold.vercel.app/",
      features: ["Interactive UI Components", "Real-time Data Handling", "Responsive Design"]
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="features">
              {project.features.map((feature, i) => (
                <span key={i}>✓ {feature}</span>
              ))}
            </div>
            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project →</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
