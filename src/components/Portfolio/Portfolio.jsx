import React, { useState } from 'react';
import { Search, ExternalLink, Github, Filter, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

// Exporting projects data for use in ProjectDetail.jsx
export const projects = [
    {
        id: 1,
        title: 'Education Dashboard',
        category: 'Full Stack',
        rating: 5,
        image: 'https://placehold.co/600x400/7c3aed/white?text=Education+Dashboard',
        description: 'A comprehensive dashboard for managing educational resources and student progress.',
        tech: ['MERN Stack', 'Redux', 'Charts.js'],
        views: '2.5k',
        github: 'https://github.com/Manikandan-Janakiraman/educationdashboard'
    },
    {
        id: 2,
        title: 'Movie App',
        category: 'Frontend',
        rating: 4.8,
        image: 'https://placehold.co/600x400/e11d48/white?text=Movie+App',
        description: 'Movie discovery application with search and details features.',
        tech: ['React', 'API Integration', 'CSS'],
        views: '1.8k',
        github: 'https://github.com/Manikandan-Janakiraman/movieapp'
    },
    {
        id: 3,
        title: 'Weather App',
        category: 'Frontend',
        rating: 4.7,
        image: 'https://placehold.co/600x400/0ea5e9/white?text=Weather+App',
        description: 'Real-time weather forecasting application.',
        tech: ['React', 'WeatherAPI', 'Styled Components'],
        views: '3.2k',
        github: 'https://github.com/Manikandan-Janakiraman/weatherapp'
    },
    {
        id: 4,
        title: 'To-Do App',
        category: 'Web App',
        rating: 4.9,
        image: 'https://placehold.co/600x400/10b981/white?text=To-Do+App',
        description: 'Efficient task management application with drag-and-drop support.',
        tech: ['React', 'Local Storage', 'Framer Motion'],
        views: '4.1k',
        github: 'https://github.com/Manikandan-Janakiraman/todoapp'
    },
    {
        id: 5,
        title: 'Calculator',
        category: 'Utility',
        rating: 4.5,
        image: 'https://placehold.co/600x400/f59e0b/white?text=Calculator',
        description: 'Standard and scientific calculator web application.',
        tech: ['Svelte', 'Math.js', 'CSS Grid'],
        views: '1.2k',
        github: 'https://github.com/Manikandan-Janakiraman/calculator'
    },
    {
        id: 6,
        title: 'My Story App',
        category: 'Personal',
        rating: 4.8,
        image: 'https://placehold.co/600x400/8b5cf6/white?text=My+Story',
        description: 'A storytelling platform to share personal journeys.',
        tech: ['Full Stack', 'MongoDB', 'Express'],
        views: '2.0k',
        github: 'https://github.com/Manikandan-Janakiraman/my-story-app'
    }
];

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filters = ['All', 'Full Stack', 'Frontend', 'Web App', 'Utility'];

    const filteredProjects = projects.filter(project => {
        const matchesFilter = activeFilter === 'All' || project.category === activeFilter;
        const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    // Limit rows for "minimal" look initially, or just show grid. 
    // User asked for "minimal rows", let's show all 6 (2 rows of 3) which is minimal enough.
    // If more projects existed, we'd limit. 6 is perfect.

    return (
        <section className="portfolio-section" id="portfolio">
            {/* Background Effects */}
            <div className="portfolio-bg-effects">
                <div className="portfolio-blob blob-1"></div>
                <div className="portfolio-blob blob-2"></div>
                <div className="portfolio-grid-overlay"></div>
            </div>

            <div className="portfolio-header">
                <div className="portfolio-label">
                    <span className="label-icon">✦</span>
                    <span>My Work</span>
                </div>

                <h2 className="portfolio-title">Explore My <span className="highlight">Portfolio</span></h2>
                <h3 className="portfolio-subtitle">Real-world projects that combine creativity, performance, and scalability.</h3>

                <div className="portfolio-controls">
                    <div className="search-bar">
                        <Search className="search-icon" size={20} />
                        <input
                            type="text"
                            placeholder="Search projects..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="filter-tabs">
                        {filters.map(filter => (
                            <button
                                key={filter}
                                className={`filter-tab ${activeFilter === filter ? 'active' : ''}`}
                                onClick={() => setActiveFilter(filter)}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="projects-grid">
                {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};

const ProjectCard = ({ project }) => {
    return (
        <Link to={`/project/${project.id}`} className="project-card-link">
            <div className="project-card">
                <div className="card-image-wrapper">
                    <img src={project.image} alt={project.title} />
                    <div className="card-overlay">
                        <span className="view-btn">View Details <ArrowRight size={16} /></span>
                    </div>
                </div>

                <div className="card-content">
                    <div className="card-header">
                        <h3 className="project-title">{project.title}</h3>
                        <div className="rating">
                            {'★'.repeat(Math.round(project.rating))}
                            <span className="rating-val">{project.rating}</span>
                        </div>
                    </div>

                    <span className="project-category">{project.category}</span>
                    <p className="project-desc">{project.description}</p>

                    <div className="tech-stack">
                        {project.tech.map((tech, i) => (
                            <span key={i} className="tech-tag">{tech}</span>
                        ))}
                    </div>

                    <div className="card-footer">
                        <div className="views">
                            <span>👁 {project.views}</span>
                        </div>
                        <div className="card-links">
                            {/* We can keep external links here too if needed, but the main click goes to details */}
                            <object>
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="icon-link">
                                    <Github size={18} />
                                </a>
                            </object>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Portfolio;
