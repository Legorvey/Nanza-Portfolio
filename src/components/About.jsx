const About = () => {
    return (
        <section id="about" className="about">
            <div className="container overlap-container">
                <div className="about-card" data-aos="fade-up" data-aos-delay="100">
                    <div className="section-title">
                        <h2>About Me</h2>
                        <div className="title-line"></div>
                    </div>
                    <div className="about-content">
                        <p>I am a cheerful and results-oriented student majoring in Communication Science at Telkom University, who loves turning fresh, out-of-the-box ideas into highly engaging digital campaigns. I thrive in fast-paced environments and love analyzing what makes people click!</p>
                        
                        <div className="skills-box">
                            <div className="skill-category">
                                <h3>My Creative Toolbox</h3>
                                <div className="tools-grid">
                                    <img src="images/tools/capcut.png" alt="CapCut" title="CapCut" loading="lazy" />
                                    <img src="images/tools/canva.png" alt="Canva" title="Canva" loading="lazy" />
                                    <img src="images/tools/premiere.png" alt="Adobe Premiere" title="Adobe Premiere" loading="lazy" />
                                    <img src="images/tools/photoshop.png" alt="Adobe Photoshop" title="Adobe Photoshop" loading="lazy" />
                                    <img src="images/tools/meitu.png" alt="Meitu" title="Meitu" loading="lazy" />
                                </div>
                            </div>
                            <div className="skill-category">
                                <h3>Core Strengths</h3>
                                <div className="strengths-tags">
                                    <span>Content Planning</span>
                                    <span>Branding</span>
                                    <span>Marketing</span>
                                    <span>Copywriting</span>
                                    <span>Scriptwriting</span>
                                    <span>Project Management</span>
                                    <span>News Reporting</span>
                                    <span>Content Production</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
