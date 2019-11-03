import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  viewBox = "0 0 10 6",
  fillFunction
}) => {
  let rects = [];

  const scale = 1;

  const rgb = (r, g, b) => {
    return `rgb(${r},${g},${b})`;
  };

  for (let x = 0; x < 5; x++) {
    for (let y = 0; y < 5; y++) {
      let rect = (
        <rect
          width={0.95 * scale}
          height={0.95 * scale}
          fill={
            fillFunction
              ? fillFunction(x / 4, 1 - y / 4)
              : rgb(100 + (x / 4) * 155, 0, 255 - (y / 4) * 155)
          }
          x={x * scale}
          y={y * scale}
          key={`${y}x${x}`}
        />
      );
      rects.push(rect);
    }
  }

  return (
    <svg
      width={width}
      style={style}
      height={width}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      className={`svg-icon ${className || ""}`}
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <marker
          id="arrow"
          fill="white"
          viewBox="0 0 10 10"
          refX="5"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" />
        </marker>
      </defs>
      <g id="group" transform=" rotate(-45 5 0)">
        <g>{rects}</g>
        <polyline
          points="-0.2,-0.4, -0.2,5.1, 5.3,5.1"
          fill="none"
          stroke="white"
          strokeWidth="0.1"
          markerStart="url(#arrow)"
          markerEnd="url(#arrow)"
        />
        <text
          x="2.5"
          y="6"
          fontSize="0.06em"
          textAnchor="middle"
          fill="white"
          fontWeight="bold"
        >
          Corruption
        </text>
        <text
          transform=" rotate(90 0 0)"
          fill="white"
          x="2.5"
          y="1"
          fontSize="0.06em"
          textAnchor="middle"
          fontWeight="bold"
        >
          Relative Aid
        </text>
      </g>
    </svg>
  );
};

export default SVG;
