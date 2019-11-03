import React, { useEffect, useState } from "react";
import { csv } from "d3-fetch";

import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
  Marker
} from "react-simple-maps";
import Legend2d from "./Legend2d";
import Tooltip from "./Tooltip";
import { colorScale2D } from "../colortools";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = ({
  setTooltipContent,
  dataset,
  country,
  setCountry,
  data,
  setData
}) => {
  useEffect(() => {
    csv(`${process.env.PUBLIC_URL}/data/${dataset}`).then(data => {
      const maxFunding = Math.max(
        ...data.map(country => country["Funding USDm"])
      );
      data.forEach(country => {
        country.investment = country["Funding USDm"] / maxFunding;
      });
      return setData(data);
    });
  }, [dataset]);

  const handleClick = e => {
    if (e.target.className.baseVal !== "rsm-geography ") setCountry(null);
  };

  return (
    <div className="Map" onClick={handleClick}>
      <ComposableMap
        data-tip=""
        height={400}
        projectionConfig={{
          rotate: [0, 0, 0],
          scale: 140
        }}
      >
        <ZoomableGroup disablePanning={true}>
          <Sphere stroke="#E4E5E6" strokeWidth={0.3} />
          <Graticule stroke="#E4E5E6" strokeWidth={0.3} />
          {data.length > 0 && (
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map(geo => {
                  const d = data.find(
                    s => s["CountryCode"] === geo.properties.ISO_A3
                  );
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={
                        d
                          ? colorScale2D(d["Corruption risks"], d["investment"])
                          : "#F5F4F6"
                      }
                      stroke="#EAEAEC"
                      onClick={() => {
                        setCountry(geo.properties.ISO_A3);
                      }}
                      onMouseEnter={() => {
                        setTooltipContent(
                          <Tooltip
                            name={geo.properties.NAME}
                            corruption={
                              d ? Number(d["Corruption risks"]) : "none"
                            }
                            investment={d ? Number(d["investment"]) : "none"}
                            corruption_color="rgb(255, 0 , 177.5)"
                            investment_color="rgb(0, 255 , 177.5)"
                          />
                        );
                      }}
                      onMouseLeave={() => {
                        setTooltipContent("");
                      }}
                      style={{
                        default: {
                          outline: "none"
                        },
                        hover: {
                          fill: "#F53",
                          outline: "none",
                          cursor: "pointer"
                        },
                        pressed: {
                          fill: "#E42",
                          outline: "none"
                        }
                      }}
                    />
                  );
                })
              }
            </Geographies>
          )}
          <Marker coordinates={[-150.006, -10.7128]}>
            <Legend2d width={120} fillFunction={colorScale2D} />
          </Marker>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default MapChart;
