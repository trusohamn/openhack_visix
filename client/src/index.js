import React, { useState }  from "react";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import MapChart from "./components/MapChart";
import ControlledTabs from "./components/ControlledTabs"

function App() {
  const [content, setContent] = useState("");


  return (
    <div>
      <div className="page">
        <ControlledTabs />
        <MapChart setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
