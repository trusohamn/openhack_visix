import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import MapChart from "./components/MapChart";
import { Tabs, Tab } from "react-bootstrap";
const upperFirst = string =>
  string.charAt(0).toUpperCase() + string.substring(1);
function App() {
  const [content, setContent] = useState("");
  const [key, setKey] = useState("public");

  const sectors = ["public", "education", "health"];
  return (
    <div>
      <div className="page">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={k => setKey(k)}
        >
          {sectors.map(sector => (
            <Tab
              key={sector}
              eventKey={sector}
              title={upperFirst(sector)}
            ></Tab>
          ))}
        </Tabs>
        <MapChart setTooltipContent={setContent} dataset={key + ".csv"} />
        <ReactTooltip>{content}</ReactTooltip>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
