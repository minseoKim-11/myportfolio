import { useState, useEffect } from 'react';

const useCardController = (projectList, duration = 700) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [visibleIndex, setVisibleIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const nextCard = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setVisibleIndex((prev) => (prev + 1) % projectList.length);
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setActiveIndex(visibleIndex);
            setIsAnimating(false);
        }, duration);
        return () => clearTimeout(timeout);
    }, [visibleIndex, duration]);

    return {
        activeIndex,
        visibleIndex,
        isAnimating,
        nextCard,
    };
};

export default useCardController;