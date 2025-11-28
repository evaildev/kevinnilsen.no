import React, { useEffect, useState, useRef } from "react";
import styles from "./ShootingStars.module.css";

interface ShootingStar {
    id: number;
    x: number;
    y: number;
    angle: number;
    scale: number;
    speed: number;
    distance: number;
}

const ShootingStars = () => {
    const [star, setStar] = useState<ShootingStar | null>(null);
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const createStar = () => {
            const { innerWidth, innerHeight } = window;
            const x = Math.random() * innerWidth;
            const y = 0;
            const angle = 45;
            const scale = 0.5 + Math.random();
            const speed = Math.random() * 20 + 10;
            const distance = Math.random() * 300 + 100;

            setStar({ id: Date.now(), x, y, angle, scale, speed, distance });

            setTimeout(() => {
                setStar(null);
            }, 1000); // Star lifetime
        };

        const interval = setInterval(createStar, 2000 + Math.random() * 3000);

        return () => clearInterval(interval);
    }, []);

    if (!star) return null;

    return (
        <svg
            ref={svgRef}
            className={styles.stars}
            viewBox={`0 0 ${typeof window !== 'undefined' ? window.innerWidth : 1000} ${typeof window !== 'undefined' ? window.innerHeight : 1000}`}
        >
            <line
                x1={star.x}
                y1={star.y}
                x2={star.x + star.distance * Math.cos((star.angle * Math.PI) / 180)}
                y2={star.y + star.distance * Math.sin((star.angle * Math.PI) / 180)}
                stroke="url(#gradient)"
                strokeWidth={star.scale}
                className={styles.starLine}
            />
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7928ca" stopOpacity="0" />
                    <stop offset="50%" stopColor="#0070f3" stopOpacity="1" />
                    <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default ShootingStars;
