import React, { ReactDOM } from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

const data = [{ name: "Group A", value: 0.5 }, { name: "Group B", value: 0.5 }];
const COLORS = ["rgb(100,0,177.5)", "rgb(100,100,100)"];

const RADIAN = Math.PI / 180;

const DataTooltip = ({ name, data1, data2 }) => {
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
        <PieChart width={80} height={40}>
          <Pie
            data={data}
            cx={16}
            cy={16}
            innerRadius={12}
            outerRadius={16}
            paddingAngle={0}
            isAnimationActive={false}
          >
            {data.map((entry, index) => (
              <Cell fill={COLORS[index % COLORS.length]} stroke="black" />
            ))}
          </Pie>
          <text x={21} y={17} dy={8} textAnchor="middle" fill="White">
            {data[0].value}
          </text>

          <Pie
            data={data}
            cx={56}
            cy={16}
            // dataKey={"dunno"}
            innerRadius={12}
            outerRadius={16}
            paddingAngle={0}
            isAnimationActive={false}
          >
            {data.map((entry, index) => (
              <Cell fill={COLORS[index % COLORS.length]} stroke="black" />
            ))}
          </Pie>
          <text x={61} y={17} dy={8} textAnchor="middle" fill="White">
            {data[0].value}
          </text>
        </PieChart>
      </div>
    </div>
  );
};

//ReactDOM.render(<SimplePieChart />, document.getElementById("container"));

export default DataTooltip;
