import { useEffect, useRef } from 'react';

const Hero = () => {
    const typedTextRef = useRef(null);
    const textArray = ["Creative Marketer", "Social Media Enthusiast", "Content Strategist", "Storyteller"];
    const typingDelay = 100;
    const erasingDelay = 35;
    const newTextDelay = 750;
    let textArrayIndex = 0;
    let charIndex = 0;

    useEffect(() => {
        let typingTimer;
        let erasingTimer;
        let newTextTimer;

        const type = () => {
            if (!typedTextRef.current) return;
            if (charIndex < textArray[textArrayIndex].length) {
                typedTextRef.current.textContent += textArray[textArrayIndex].charAt(charIndex);
                charIndex++;
                typingTimer = setTimeout(type, typingDelay);
            } else {
                newTextTimer = setTimeout(erase, newTextDelay);
            }
        };

        const erase = () => {
            if (!typedTextRef.current) return;
            if (charIndex > 0) {
                typedTextRef.current.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
                charIndex--;
                erasingTimer = setTimeout(erase, erasingDelay);
            } else {
                textArrayIndex++;
                if (textArrayIndex >= textArray.length) textArrayIndex = 0;
                typingTimer = setTimeout(type, typingDelay + 250);
            }
        };

        if (textArray.length) {
            newTextTimer = setTimeout(type, newTextDelay + 250);
        }

        return () => {
            clearTimeout(typingTimer);
            clearTimeout(erasingTimer);
            clearTimeout(newTextTimer);
        };
    }, []);

    return (
        <div className="hero-scroll-container">
            {/* Section 1: Welcome (100vh) */}
            <section className="hero-section hero-welcome">
                <div className="container" data-aos="fade-up" data-aos-duration="1200">
                    <h1 className="welcome-text">
                        <span className="welcome-line">Welcome to my</span>
                        <span className="welcome-line">Creative Space.</span>
                    </h1>
                </div>
            </section>

            {/* Section 2: Intro (100vh) */}
            <section className="hero-section hero-intro">
                <div className="container hero-content" data-aos="fade-up" data-aos-duration="1000">
                    <div className="hero-text-wrapper">
                        <h1 className="hero-title">
                            Hi, I'm <span className="text-highlight">Nazwa Az Zahra</span>
                        </h1>
                        <h2 className="hero-subtitle">
                            A Passionate <span className="typed-text" ref={typedTextRef}></span><span className="cursor">&nbsp;</span>
                        </h2>
                        <p className="hero-desc">
                            Bringing energy, bold ideas, and data-driven strategies to shape impactful digital experiences with a touch of elegance.
                        </p>
                        <div className="hero-actions">
                            <a href="#projects" className="btn-pastel">Explore My Works</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
