import React, { ReactDOM } from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

const COLORS1 = ["rgb(255,0,0)", "rgb(100,100,100)"];
const COLORS2 = ["rgb(0,0,255)", "rgb(100,100,100)"];

const RADIAN = Math.PI / 180;

const DataTooltip = ({ name, corruption, investment }) => {
  const data_corruption = [
    { name: "Group A", value: corruption },
    { name: "inverse", value: 1 - corruption }
  ];

  const data_investment = [
    { name: "Group A", value: investment },
    { name: "inverse", value: 1 - investment }
  ];

  console.log(data_corruption);

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
        <PieChart width={100} height={50}>
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
            cx={56}
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
          <text x={61} y={17} dy={8} textAnchor="middle" fill="White">
            {Number(investment).toFixed(2)}
          </text>
        </PieChart>
      </div>
    </div>
  );
};

//ReactDOM.render(<SimplePieChart />, document.getElementById("container"));

export default DataTooltip;
