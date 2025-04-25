import React, { useState, useEffect } from "react";

const OvalWithName = () => {
    // Animation states
    const [hovered, setHovered] = useState(false);
    const [phase, setPhase] = useState(0);

    // Animation effect
    useEffect(() => {
        const interval = setInterval(() => {
            setPhase((prev) => (prev + 0.02) % (2 * Math.PI));
        }, 50);
        return () => clearInterval(interval);
    }, []);

    // Dynamic values based on animation
    const rotationAngle = -8 + (hovered ? Math.sin(phase) * 3 : 0);
    const scale = 0.7;
    const glowIntensity = hovered ? 5 : 3.5;
    const dashOffset = phase * 20;

    return (
        <div
            className="flex items-center justify-center transform translate-y-6"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <svg
                width={600 * scale}
                height={300 * scale}
                viewBox={`0 0 ${600 * scale} ${300 * scale}`}
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient
                        id="glowGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                    >
                        <stop offset="0%" stopColor="#b2d74c" stopOpacity="1" />
                        <stop
                            offset="50%"
                            stopColor="#8cc63f"
                            stopOpacity="1"
                        />
                        <stop
                            offset="100%"
                            stopColor="#7ab929"
                            stopOpacity="1"
                        />
                    </linearGradient>

                    <filter id="glow">
                        <feGaussianBlur
                            stdDeviation={glowIntensity * scale}
                            result="blur"
                        />
                        <feComposite
                            in="SourceGraphic"
                            in2="blur"
                            operator="over"
                        />
                    </filter>

                    <filter id="textShadow">
                        <feDropShadow
                            dx="0"
                            dy="0"
                            stdDeviation="2"
                            floodColor="#b2d74c"
                            floodOpacity="0.8"
                        />
                    </filter>
                </defs>

                <g
                    transform={`rotate(${rotationAngle} ${300 * scale} ${
                        150 * scale
                    })`}
                >
                    {/* Background ellipse with subtle glow */}
                    <ellipse
                        cx={300 * scale}
                        cy={150 * scale}
                        rx={210 * scale}
                        ry={80 * scale}
                        fill="rgba(178, 215, 76, 0.05)"
                        stroke="none"
                    />

                    {/* Main ellipse */}
                    <ellipse
                        cx={300 * scale}
                        cy={150 * scale}
                        rx={200 * scale}
                        ry={70 * scale}
                        fill="none"
                        stroke="url(#glowGradient)"
                        strokeWidth={2 * scale}
                        strokeDasharray={`${6 * scale},${6 * scale}`}
                        strokeDashoffset={dashOffset}
                        filter="url(#glow)"
                    />

                    {/* Text with enhanced styling */}
                    <text
                        x={300 * scale}
                        y={155 * scale}
                        textAnchor="middle"
                        fontSize={20 * scale}
                        fill="white"
                        className="font-mon  tracking-widest"
                        filter="url(#textShadow)"
                    >
                        FULL STACK DEVELOPER
                    </text>
                </g>
            </svg>
        </div>
    );
};

export default OvalWithName;
