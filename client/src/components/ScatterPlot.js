import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ZAxis,
  Cell
} from "recharts";
import { colorScale2D } from "../colortools";

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    console.log(payload[0].payload);
    const data = payload[0].payload;
    return (
      <div className="custom-tooltip">
        <h5 className="label">{data["Country Name"]}</h5>
        <p className="intro">
          Corruption: {Number(data["Corruption risks"]).toFixed(2)}
        </p>
        <p className="desc">Aid: {Number(data["Funding USDm"]).toFixed(2)}</p>
      </div>
    );
  }
  return null;
};

export default ({ data, displayDetails }) => {
  const handleClick = e => {
    displayDetails(e["CountryCode"]);
  };

  return (
    <div className="ScatterPlot">
      <ScatterChart
        width={400}
        height={200}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20
        }}
      >
        <CartesianGrid />
        <XAxis
          type="number"
          dataKey="investment"
          name="Relative aid"
          label="Relative aid"
          tick={false}
        />
        <YAxis
          type="number"
          dataKey="Corruption risks"
          name="Corruption"
          label={{ value: "Corruption", angle: -90 }}
          tick={false}
        />
        <ZAxis
          type="string"
          dataKey="Country Name"
          name="Country Name"
          unit=""
        />
        <Tooltip content={<CustomTooltip />} />
        <Scatter
          name="Corruption"
          data={data}
          fill="#8884d8"
          onClick={handleClick}
        >
          {data.map((entry, index) => {
            const fillColor = colorScale2D(
              Number(entry["Corruption risks"]),
              Number(entry["investment"])
            );
            return <Cell key={`cell-${index}`} fill={fillColor} />;
          })}
        </Scatter>
      </ScatterChart>
    </div>
  );
};
