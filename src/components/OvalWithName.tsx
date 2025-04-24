import React from "react";

const OvalWithName = () => {
    const rotationAngle = -8;
    const scale = 0.7;

    return (
        <div className="flex items-center justify-center  ">
            <svg
                width={600 * scale}
                height={300 * scale}
                viewBox={`0 0 ${600 * scale} ${300 * scale}`}
                xmlns="http://www.w3.org/2000/svg"
            >
                <filter id="glow">
                    <feGaussianBlur stdDeviation={3.5 * scale} result="blur" />
                    <feComposite
                        in="SourceGraphic"
                        in2="blur"
                        operator="over"
                    />
                </filter>

                <g
                    transform={`rotate(${rotationAngle} ${300 * scale} ${
                        150 * scale
                    })`}
                >
                    <ellipse
                        cx={300 * scale}
                        cy={150 * scale}
                        rx={200 * scale}
                        ry={70 * scale}
                        fill="none"
                        stroke="#b2d74c"
                        strokeWidth={2 * scale}
                        strokeDasharray={`${4 * scale},${4 * scale}`}
                        filter="url(#glow)"
                    />

                    <text
                        x={300 * scale}
                        y={155 * scale}
                        textAnchor="middle"
                        fontSize={20 * scale}
                        fill="white"
                        className="font-mon font-bold tracking-widest"
                    >
                        FULL STACK DEVELOPER
                    </text>
                </g>
            </svg>
        </div>
    );
};

export default OvalWithName;
