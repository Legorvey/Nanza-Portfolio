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
        <header className="hero">
            <div className="container" data-aos="fade-up">
                <span className="hero-badge">Welcome to my creative space!</span>
                <h1>Hi, I'm Nazwa Az Zahra!</h1>
                <h2>A Passionate <span className="typed-text" ref={typedTextRef}></span><span className="cursor">&nbsp;</span></h2>
                <p>Bringing energy, bold ideas, and data-driven strategies to shape impactful digital experiences.</p>
                <a href="#projects" className="btn-primary">Explore My Works</a>
            </div>
            
            <div className="wave-divider">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
        </header>
    );
};

export default Hero;
