import React, { useEffect, useState } from "react";
import { csv } from "d3-fetch";
// import { scaleLinear } from "d3-scale";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
  Marker
} from "react-simple-maps";
import rgbHex from "rgb-hex";
import Legend2d from "./Legend2d";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

/*
const colorScale = scaleLinear()
  .domain([0.29, 0.68])
  .range(["#000000", "#ffffff"]);
*/
const colorScale2D = (corruption, investment) => {
  const hex = rgbHex(100 + 155 * corruption, 0, 100 + 155 * investment);
  return "#" + hex;
};

const MapChart = ({ setTooltipContent, dataset }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    csv(`/${dataset}`).then(data => {
      setData(data);
    });
  }, [dataset]);

  return (
    <ComposableMap
      data-tip=""
      height={450}
      projectionConfig={{
        rotate: [0, 0, 0],
        scale: 140
      }}
    >
      <ZoomableGroup>
        <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
        <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
        {data.length > 0 && (
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => {
                const d = data.find(s => s.ISO3 === geo.properties.ISO_A3);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={
                      d
                        ? colorScale2D(d["corruption"], d["investment"])
                        : "#F5F4F6"
                    }
                    onClick={() => {
                      console.log(geo.properties.ABBREV);
                    }}
                    onMouseEnter={() => {
                      const { NAME } = geo.properties;
                      setTooltipContent(`${NAME}`);
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
                        outline: "none"
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
          <Legend2d width={120} />
        </Marker>
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default MapChart;
