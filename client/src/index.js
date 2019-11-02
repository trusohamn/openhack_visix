import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";
import { Tabs, Tab } from "react-bootstrap";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MapChart from "./components/MapChart";

function App() {
  const [content, setContent] = useState("");
  return (
    <div>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="public" title="Public"></Tab>
        <Tab eventKey="education" title="Education"></Tab>
        <Tab eventKey="health" title="Health"></Tab>
      </Tabs>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
