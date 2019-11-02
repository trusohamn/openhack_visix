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
import Tooltip from "./Tooltip";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

// const colorScale2D = (corruption, investment) => {
//   console.log(100 + 155 * corruption, 0, 100 + 155 * investment);
//   const hex = rgbHex(100 + 155 * corruption, 0, 100 + 155 * investment);
//   return "#" + hex;
// };

// const fillFunction = (corruption, investment) => {
//   console.log("in fillFunctin", corruption, investment);
//   return { R: 255 * corruption, G: 0, B: 255 * investment };
// };

// const fillFunction = (corruption, investment) => {
//   return {
//     R: 255 * Number(corruption),
//     G: (155 * (Number(corruption) + Number(investment))) / 2 + 100,
//     B: 255 * Number(investment)
//   };
// };

// Nice white nothing, yellow corruption, blue investment, green both
// const fillFunction = (corruption, investment) => {
//   console.log("in fillFunctin", corruption, investment);
//   return {
//     R: 255 - 255 * Number(investment),
//     G: 255 - (155 * (Number(corruption) + Number(investment))) / 2,
//     B: 255 - 255 * Number(corruption)
//   };
// };

// Green investment, pink corruption, blue both <- best one so far
const fillFunction = (corruption, investment) => {
  console.log("in fillFunctin", corruption, investment);
  return {
    G: 255 - 255 * Number(corruption),
    B: 255 - (155 * (Number(corruption) + Number(investment))) / 2,
    R: 255 - 255 * Number(investment)
  };
};

// Green investment, magenta corruption, red both
// const fillFunction = (corruption, investment) => {
//   console.log("in fillFunctin", corruption, investment);
//   return {
//     B: 255 - 255 * Number(investment),
//     R: 255 - (155 * (Number(corruption) + Number(investment))) / 2,
//     G: 255 - 255 * Number(corruption)
//   };
// };

// const fillFunction = (corruption, investment) => {
//   console.log("in fillFunctin", corruption, investment);
//   return {
//     G: 255 - 255 * Number(corruption),
//     B: 255 - (55 * (Number(corruption) + Number(investment))) / 2,
//     R: 255 - 255 * Number(investment)
//   };
// };

const colorScale2D = (corruption, investment) => {
  const color = fillFunction(corruption, investment);

  console.log(corruption, investment, color);
  const hex = rgbHex(color["R"], color["G"], color["B"]);
  //const hex = rgbHex(255 * corruption, 255 * investment, 255);
  //return "#" + hex;

  return `rgb(${color["R"]}, ${color["G"]} , ${color["B"]})`;
};

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
      console.log(data);
      return setData(data);
    });
  }, [dataset]);

  return (
    <div className="Map">
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
                        console.log(geo.properties.ISO_A3);
                      }}
                      onMouseEnter={() => {
                        setTooltipContent(
                          <Tooltip
                            name={geo.properties.NAME}
                            corruption={
                              d ? Number(d["Corruption risks"]) : "none"
                            }
                            investment={d ? Number(d["investment"]) : "none"}
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
            <Legend2d width={120} fillFunction={colorScale2D} />
          </Marker>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default MapChart;
