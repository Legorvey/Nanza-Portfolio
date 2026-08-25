import { useState, useEffect } from 'react';

const Footer = () => {
    const [showToast, setShowToast] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('nazraza0408@gmail.com').then(() => {
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
            }, 3000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    };

    const handleSubscribe = (e) => {
        e.preventDefault();
        alert('Thanks for subscribing!');
    };

    return (
        <>
            <section id="contact" className="contact">
                <div className="container" data-aos="zoom-in">
                    <div className="cta-box">
                        <div className="availability-badge">
                            <span className="pulse-dot"></span> Available for Q3 2026 Internships
                        </div>
                        
                        <h2>Let's Create Something Amazing Together! 🚀</h2>
                        <p className="personal-hook">Always open to discussing data-driven campaigns, digital storytelling, or the perfect matcha blend.</p>
                        
                        <div className="mini-metrics">
                            <span>1.5M+ Impressions</span>
                            <span className="dot-divider">•</span>
                            <span>2 Business Branches</span>
                            <span className="dot-divider">•</span>
                            <span>100k+ Views</span>
                        </div>

                        <div className="footer-action">
                            <button id="copyEmailBtn" className="copy-btn" onClick={handleCopyEmail}>
                                nazraza0408@gmail.com <span className="icon">📋</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="main-footer">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-brand">
                            <h3>Nazwa Az Zahra</h3>
                            <p>Turning fresh, out-of-the-box ideas into highly engaging digital campaigns. Let's make an impact together.</p>
                            <div className="footer-socials">
                                <a href="https://www.linkedin.com/in/zahra-nazwa" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                                <a href="https://instagram.com/nanza.azhhr" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                                <a href="mailto:nazraza0408@gmail.com" aria-label="Email"><i className="fa-regular fa-envelope"></i></a>
                            </div>
                        </div>
                        <div className="footer-links">
                            <h4>Explore</h4>
                            <ul>
                                <li><a href="#navbar">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#projects">Projects</a></li>
                                <li><a href="Resume.pdf" target="_blank" rel="noreferrer">Resume</a></li>
                            </ul>
                        </div>
                        <div className="footer-newsletter">
                            <h4>Stay in the Loop</h4>
                            <p>Get insights on digital strategy directly in your inbox.</p>
                            <form className="newsletter-form" onSubmit={handleSubscribe}>
                                <input type="email" placeholder="Your email address" required />
                                <button type="submit"><i className="fa-solid fa-arrow-right"></i></button>
                            </form>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; 2026 Nazwa Az Zahra. All rights reserved.</p>
                        <div className="footer-legal">
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>

            <div id="toast" className={`toast ${showToast ? 'show' : ''}`}>Email Copied to Clipboard! ✅</div>
        </>
    );
};

export default Footer;
