import React, { useEffect, useRef, useState } from 'react';

export interface ScrollFadeProps {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    direction?: 'up' | 'down' | 'left' | 'right';
    once?: boolean;
    threshold?: number;
    distance?: number;
    className?: string;
    style?: React.CSSProperties;
}

export const ScrollFade: React.FC<ScrollFadeProps> = ({
    children,
    delay = 0,
    duration = 600,
    direction = 'up',
    once = true,
    threshold = 0.2,
    distance = 20,
    className = '',
    style = {},
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        // Check for SSR environment
        if (typeof window === 'undefined') return;

        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setPrefersReducedMotion(mediaQuery.matches);

        const handleMotionChange = (e: MediaQueryListEvent) => {
            setPrefersReducedMotion(e.matches);
        };

        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener('change', handleMotionChange);
        } else {
            mediaQuery.addListener(handleMotionChange);
        }

        return () => {
            if (mediaQuery.removeEventListener) {
                mediaQuery.removeEventListener('change', handleMotionChange);
            } else {
                mediaQuery.removeListener(handleMotionChange);
            }
        };
    }, []);

    useEffect(() => {
        if (typeof window === 'undefined' || prefersReducedMotion) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (once && elementRef.current) {
                        observer.unobserve(elementRef.current);
                    }
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            {
                threshold,
            }
        );

        const currentRef = elementRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [once, threshold, prefersReducedMotion]);

    const getTransform = () => {
        if (isVisible || prefersReducedMotion) return 'translate3d(0, 0, 0)';

        switch (direction) {
            case 'up':
                return `translate3d(0, ${distance}px, 0)`;
            case 'down':
                return `translate3d(0, -${distance}px, 0)`;
            case 'left':
                return `translate3d(${distance}px, 0, 0)`;
            case 'right':
                return `translate3d(-${distance}px, 0, 0)`;
            default:
                return 'translate3d(0, 0, 0)';
        }
    };

    const combinedStyle: React.CSSProperties = prefersReducedMotion
        ? style
        : {
            ...style,
            opacity: isVisible ? 1 : 0,
            transform: getTransform(),
            transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
            willChange: 'opacity, transform',
        };

    return (
        <div ref={elementRef} className={className} style={combinedStyle}>
            {children}
        </div>
    );
};
