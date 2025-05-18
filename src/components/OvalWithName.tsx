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
  const glowIntensity = hovered ? 5 : 3.5;
  const dashOffset = phase * 20;

  return (
    <div
      className="flex w-full justify-center xl:justify-end"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <svg
        className="w-full max-w-xs sm:max-w-xs md:max-w-sm lg:max-w-md"
        viewBox="0 0 420 210"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#b2d74c" stopOpacity="1" />
            <stop offset="50%" stopColor="#8cc63f" stopOpacity="1" />
            <stop offset="100%" stopColor="#7ab929" stopOpacity="1" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation={glowIntensity} result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
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

        <g transform={`rotate(${rotationAngle} 210 105)`}>
          {/* Background ellipse with subtle glow */}
          <ellipse
            cx={210}
            cy={105}
            rx={147}
            ry={56}
            fill="rgba(178, 215, 76, 0.05)"
            stroke="none"
          />

          {/* Main ellipse */}
          <ellipse
            cx={210}
            cy={105}
            rx={140}
            ry={49}
            fill="none"
            stroke="url(#glowGradient)"
            strokeWidth={1.4}
            strokeDasharray="4.2,4.2"
            strokeDashoffset={dashOffset}
            filter="url(#glow)"
          />

          {/* Text with enhanced styling */}
          <text
            x={210}
            y={108}
            textAnchor="middle"
            fontSize={14}
            fill="white"
            className="font-mon tracking-widest"
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
