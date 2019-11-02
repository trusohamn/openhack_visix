import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";
import { Tabs, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import MapChart from "./components/MapChart";

function App() {
  const [content, setContent] = useState("");
  return (
    <div>
      <Tabs defaultActiveKey="public" id="uncontrolled-tab-example">
        <Tab eventKey="public" title="Public"></Tab>
        <Tab eventKey="education" title="Education"></Tab>
        <Tab eventKey="health" title="Health"></Tab>
      </Tabs>
      <div class="page">
        <MapChart setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
