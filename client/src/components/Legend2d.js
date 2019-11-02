import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  viewBox = "0 0 10 6"
}) => (
  // <div style={{ position: "absolute", top: "60%", left: "0" }}>
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
      <rect width="0.95" height="0.95" fill="rgb(100,0,255)" x="0" y="0"></rect>
      <rect
        width="0.95"
        height="0.95"
        fill="rgb(100,0,216.25)"
        x="0"
        y="1"
      ></rect>
      <rect
        width="0.95"
        height="0.95"
        fill="rgb(100,0,177.5)"
        x="0"
        y="2"
      ></rect>
      <rect
        width="0.95"
        height="0.95"
        fill="rgb(100,0,138.75)"
        x="0"
        y="3"
      ></rect>
      <rect width="0.95" height="0.95" fill="rgb(100,0,100)" x="0" y="4"></rect>
      <rect
        width="0.95"
        height="0.95"
        fill="rgb(138.75,0,255)"
        x="1"
        y="0"
      ></rect>
      <rect
        width="0.95"
        height="0.95"
        fill="rgb(138.75,0,216.25)"
        x="1"
        y="1"
      ></rect>
      <rect
        width="0.95"
        height="0.95"
        fill="rgb(138.75,0,177.5)"
        x="1"
        y="2"
      ></rect>
      <rect
        width="0.95"
        height="0.95"
        fill="rgb(138.75,0,138.75)"
        x="1"
        y="3"
      ></rect>
      <rect
        width="0.95"
        height="0.95"
        fill="rgb(138.75,0,100)"
        x="1"
        y="4"
      ></rect>
      <rect
        width="0.95"
        height="0.95"
        fill="rgb(177.5,0,255)"
        x="2"
        y="0"
      ></rect>
      <rect
        width="0.95"
        height="0.95"
        fill="rgb(177.5,0,216.25)"
        x="2"
        y="1"
      ></rect>
      <rect
        width="0.95"
        height="0.95"
        fill="rgb(177.5,0,177.5)"
        x="2"
        y="2"
      ></rect>
      <rect
        width="0.95"
        height="0.95"
        fill="rgb(177.5,0,138.75)"
        x="2"
        y="3"
      ></rect>
      <rect
        width="0.95"
        height="0.95"
        fill="rgb(177.5,0,100)"
        x="2"
        y="4"
      ></rect>
      <rect
        width="0.95"
        height="0.95"
        fill="rgb(216.25,0,255)"
        x="3"
        y="0"
      ></rect>
      <rect
        width="0.95"
        height="0.95"
        fill="rgb(216.25,0,216.25)"
        x="3"
        y="1"
      ></rect>
      <rect
        width="0.95"
        height="0.95"
        fill="rgb(216.25,0,177.5)"
        x="3"
        y="2"
      ></rect>
      <rect
        width="0.95"
        height="0.95"
        fill="rgb(216.25,0,138.75)"
        x="3"
        y="3"
      ></rect>
      <rect
        width="0.95"
        height="0.95"
        fill="rgb(216.25,0,100)"
        x="3"
        y="4"
      ></rect>
      <rect width="0.95" height="0.95" fill="rgb(255,0,255)" x="4" y="0"></rect>
      <rect
        width="0.95"
        height="0.95"
        fill="rgb(255,0,216.25)"
        x="4"
        y="1"
      ></rect>
      <rect
        width="0.95"
        height="0.95"
        fill="rgb(255,0,177.5)"
        x="4"
        y="2"
      ></rect>
      <rect
        width="0.95"
        height="0.95"
        fill="rgb(255,0,138.75)"
        x="4"
        y="3"
      ></rect>
      <rect width="0.95" height="0.95" fill="rgb(255,0,100)" x="4" y="4"></rect>
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
        Investment
      </text>
    </g>
  </svg>
);

export default SVG;
