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

export default ({ data }) => {
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
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Scatter name="Corruption" data={data} fill="#8884d8">
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
