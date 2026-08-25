import { useState, useEffect } from 'react';

const BackToTop = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setShow(true);
            } else {
                setShow(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <a 
            href="#" 
            id="back-to-top" 
            className={`back-to-top ${show ? 'show' : ''}`} 
            aria-label="Back to Top"
            onClick={scrollToTop}
        >
            <i className="fa-solid fa-chevron-up"></i>
        </a>
    );
};

export default BackToTop;
