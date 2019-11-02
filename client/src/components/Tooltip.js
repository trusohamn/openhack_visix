import React, { ReactDOM } from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

const DataTooltip = ({
  name,
  corruption,
  investment,
  corruption_color,
  investment_color
}) => {
  const data_corruption = [
    { name: "Group A", value: corruption },
    { name: "inverse", value: 1 - corruption }
  ];

  const data_investment = [
    { name: "Group A", value: investment },
    { name: "inverse", value: 1 - investment }
  ];

  const COLORS1 = [corruption_color, "rgb(100,100,100)"];
  const COLORS2 = [investment_color, "rgb(100,100,100)"];

  return (
    <div
      className="dataTooltip"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column"
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>{name}</div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <PieChart width={93} height={50}>
          <Pie
            data={data_corruption}
            cx={16}
            cy={16}
            innerRadius={15}
            outerRadius={20}
            paddingAngle={0}
            isAnimationActive={false}
          >
            {data_corruption.map((entry, index) => (
              <Cell fill={COLORS1[index % COLORS1.length]} stroke="black" />
            ))}
          </Pie>
          <text x={21} y={17} dy={8} textAnchor="middle" fill="White">
            {Number(corruption).toFixed(2)}
          </text>

          <Pie
            data={data_investment}
            cx={66}
            cy={16}
            innerRadius={15}
            outerRadius={20}
            paddingAngle={0}
            isAnimationActive={false}
          >
            {data_investment.map((entry, index) => (
              <Cell fill={COLORS2[index % COLORS2.length]} stroke="black" />
            ))}
          </Pie>
          <text x={71} y={17} dy={8} textAnchor="middle" fill="White">
            {Number(investment).toFixed(2)}
          </text>
        </PieChart>
      </div>
    </div>
  );
};

//ReactDOM.render(<SimplePieChart />, document.getElementById("container"));

export default DataTooltip;
