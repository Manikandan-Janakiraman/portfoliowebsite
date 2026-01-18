import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import './ProjectDetail.css';

// Using the same data source (in a real app, this might be a context or API)
import { projects } from './Portfolio'; // We will export 'projects' from Portfolio.jsx next

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="project-detail-container" style={{ textAlign: 'center' }}>
                <h2>Project not found</h2>
                <Link to="/" className="back-btn"><ArrowLeft size={16} /> Back to Home</Link>
            </div>
        );
    }

    return (
        <div className="project-detail-container">
            <Link to="/" className="back-btn">
                <ArrowLeft size={20} /> Back to Portfolio
            </Link>

            <div className="project-detail-content">
                <div className="detail-image-container">
                    <img src={project.image} alt={project.title} className="detail-image" />
                </div>

                <div className="detail-info">
                    <div className="detail-header">
                        <span className="detail-category">{project.category}</span>
                        <h1 className="detail-title">{project.title}</h1>
                    </div>

                    <p className="detail-description">
                        This is a detailed view of the {project.title} project.
                        It showcases the implementation of modern web technologies to solve real-world problems.
                        {/* You can add more specific descriptions in the data object if available */}
                    </p>

                    <div className="stack-section">
                        <h3 className="stack-title">Technologies Used</h3>
                        <div className="stack-tags">
                            {project.tech.map((tech, index) => (
                                <span key={index} className="stack-tag">{tech}</span>
                            ))}
                        </div>
                    </div>

                    <div className="detail-actions">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="action-btn btn-source">
                            <Github size={20} /> View Source
                        </a>
                        {/* Add Demo link if available */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
