import { useState, useEffect } from 'react';
import './ScrollToTopButton.scss'
import { scrollToSection } from '../../utils/scroll';

export const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
        setIsVisible(true);
        } else {
        setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className="scroll-to-top">
        {isVisible && (
            <button onClick={() => scrollToSection('header')} aria-label="Наверх">
                Наверх ↑
            </button>
        )}
        </div>
    );
};
