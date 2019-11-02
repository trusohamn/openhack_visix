import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import MapChart from "./components/MapChart";
import { Tabs, Tab } from "react-bootstrap";

function App() {
  const [content, setContent] = useState("");
  const [key, setKey] = useState("public");

  return (
    <div>
      <div className="page">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={k => setKey(k)}
        >
          <Tab eventKey="public" title="Public"></Tab>
          <Tab eventKey="education" title="Education"></Tab>
        </Tabs>
        <MapChart setTooltipContent={setContent} dataset={key + '.csv'}/>
        <ReactTooltip>{content}</ReactTooltip>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
