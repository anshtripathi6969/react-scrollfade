import { default as React } from 'react';

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
export declare const ScrollFade: React.FC<ScrollFadeProps>;
