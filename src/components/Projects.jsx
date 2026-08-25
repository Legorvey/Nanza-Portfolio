import { useState, useEffect } from 'react';
import AOS from 'aos';

const Projects = () => {
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        AOS.refresh();
    }, [filter]);

    const projectsData = [
        {
            id: 1,
            category: 'campaign',
            imgSrc: 'images/projects/mimu.jpg',
            title: 'Social Media Campaign: Matchachie “MiMu”',
            objective: 'Increase brand awareness and attract young urban consumers.',
            role: 'Chief Branding Officer & Content Strategist',
            impact: 'Expanded from an initial concept into two active branches and achieved the highest sales during university Market Day.'
        },
        {
            id: 2,
            category: 'content',
            imgSrc: 'images/projects/ikom.jpg',
            title: 'Content Strategy: IKOM Channel',
            objective: 'Increase audience engagement through digital storytelling.',
            role: 'News Producer & Multimedia Staff',
            impact: 'Produced content reaching 100,000+ views and 1.5 million impressions.'
        },
        {
            id: 3,
            category: 'marketing',
            imgSrc: 'images/projects/mealth.jpg',
            title: 'Instagram Marketing Strategy: Mealth Wellness',
            objective: 'Increase digital visibility and improve audience interaction in the wellness market.',
            role: 'Marketing Consultant',
            impact: 'Developed content strategies and promotional concepts to strengthen customer engagement and brand positioning.'
        },
        {
            id: 4,
            category: 'marketing',
            imgSrc: 'images/projects/opsy.jpg',
            title: 'E-Commerce & Retail Strategy: OPSY Store',
            objective: 'Scale online and offline business growth while increasing customer loyalty.',
            role: 'Chief Marketing Officer',
            impact: 'Expanded reseller networks, improved e-commerce sales growth, and successfully launched a physical storefront.'
        },
        {
            id: 5,
            category: 'content',
            imgSrc: 'images/projects/kpm.jpg',
            title: 'Digital Communication: KPM Telkom University',
            objective: 'Support large-scale institutional communication and media publication.',
            role: 'Communication & Information Division',
            impact: 'Led communication strategies and coordinated media publication for university events and national competitions.'
        },
        {
            id: 6,
            category: 'campaign',
            imgSrc: 'images/projects/sdgs.jpg',
            title: 'Community Campaign: SDGs 7 Renewable Energy',
            objective: 'Increase public awareness of renewable energy and sustainable village development.',
            role: 'Project Initiator & Campaigner',
            impact: 'Educated local residents and collaborated with industry partners to create social and environmental impact.'
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h2>Selected Projects</h2>
                    <div className="title-line"></div>
                </div>
                
                <div className="project-filters" data-aos="fade-up" data-aos-delay="50">
                    <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
                    <button className={`filter-btn ${filter === 'marketing' ? 'active' : ''}`} onClick={() => setFilter('marketing')}>Marketing</button>
                    <button className={`filter-btn ${filter === 'content' ? 'active' : ''}`} onClick={() => setFilter('content')}>Content</button>
                    <button className={`filter-btn ${filter === 'campaign' ? 'active' : ''}`} onClick={() => setFilter('campaign')}>Campaigns</button>
                </div>

                <div className="project-grid">
                    {projectsData.map((project, index) => (
                        <div 
                            key={project.id} 
                            className={`project-card ${filter !== 'all' && filter !== project.category ? 'hide' : ''}`} 
                            data-aos="fade-up" 
                            data-aos-delay={`${(index % 3 + 1) * 100}`}
                        >
                            <div className="project-img">
                                <img src={project.imgSrc} alt={project.title} loading="lazy" />
                                <div className="project-overlay">
                                    <a href="#projects" className="view-btn">View Details <i className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p className="project-desc"><strong>Objective:</strong> {project.objective}</p>
                                <p className="project-desc"><strong>My Role:</strong> {project.role}</p>
                                <div className="project-result">
                                    <strong>Impact:</strong> {project.impact}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
