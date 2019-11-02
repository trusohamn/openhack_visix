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
      <rect width="0.95" height="0.95" fill="rgb(0,0,255)" x="0" y="0" />
      <rect width="0.95" height="0.95" fill="rgb(0,0,204)" x="0" y="1" />
      <rect width="0.95" height="0.95" fill="rgb(0,0,153)" x="0" y="2" />
      <rect width="0.95" height="0.95" fill="rgb(0,0,102)" x="0" y="3" />
      <rect width="0.95" height="0.95" fill="rgb(0,0,51)" x="0" y="4" />
      <rect width="0.95" height="0.95" fill="rgb(51,0,255)" x="1" y="0" />
      <rect width="0.95" height="0.95" fill="rgb(51,0,204)" x="1" y="1" />
      <rect width="0.95" height="0.95" fill="rgb(51,0,153)" x="1" y="2" />
      <rect width="0.95" height="0.95" fill="rgb(51,0,102)" x="1" y="3" />
      <rect width="0.95" height="0.95" fill="rgb(51,0,51)" x="1" y="4" />
      <rect width="0.95" height="0.95" fill="rgb(102,0,255)" x="2" y="0" />
      <rect width="0.95" height="0.95" fill="rgb(102,0,204)" x="2" y="1" />
      <rect width="0.95" height="0.95" fill="rgb(102,0,153)" x="2" y="2" />
      <rect width="0.95" height="0.95" fill="rgb(102,0,102)" x="2" y="3" />
      <rect width="0.95" height="0.95" fill="rgb(102,0,51)" x="2" y="4" />
      <rect width="0.95" height="0.95" fill="rgb(153,0,255)" x="3" y="0" />
      <rect width="0.95" height="0.95" fill="rgb(153,0,204)" x="3" y="1" />
      <rect width="0.95" height="0.95" fill="rgb(153,0,153)" x="3" y="2" />
      <rect width="0.95" height="0.95" fill="rgb(153,0,102)" x="3" y="3" />
      <rect width="0.95" height="0.95" fill="rgb(153,0,51)" x="3" y="4" />
      <rect width="0.95" height="0.95" fill="rgb(204,0,255)" x="4" y="0" />
      <rect width="0.95" height="0.95" fill="rgb(204,0,204)" x="4" y="1" />
      <rect width="0.95" height="0.95" fill="rgb(204,0,153)" x="4" y="2" />
      <rect width="0.95" height="0.95" fill="rgb(204,0,102)" x="4" y="3" />
      <rect width="0.95" height="0.95" fill="rgb(204,0,51)" x="4" y="4" />
      <polyline
        points="-0.2,-0.4, -0.2,5.1, 5.3,5.1"
        fill="none"
        stroke="black"
        stroke-width="0.1"
        marker-start="url(#arrow)"
        marker-end="url(#arrow)"
      />
      <text x="2.5" y="6" font-size="0.06em" text-anchor="middle">
        Corruption
      </text>
      <text
        transform=" rotate(90 0 0)"
        x="2.5"
        y="1"
        font-size="0.06em"
        text-anchor="middle"
      >
        Investment
      </text>
    </g>
  </svg>
);

export default SVG;
