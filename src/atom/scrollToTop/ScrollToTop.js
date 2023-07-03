import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({ top = 0 }) => {
    const location = useLocation();
    useEffect(() => {
        const pageHeight = document.documentElement.scrollHeight;
        const scrollPosition = Math.round((pageHeight * top) / 100); // 50% of page height
        // window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
        window.scrollTo({ top: scrollPosition });
    }, [location]);
    return null;
}

export default ScrollToTop