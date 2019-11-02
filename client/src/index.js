import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import MapChart from "./components/MapChart";
import Details from "./components/Details";
import Stats from "./components/Stats";

import { Tabs, Tab } from "react-bootstrap";
const upperFirst = string =>
  string.charAt(0).toUpperCase() + string.substring(1);
function App() {
  const [content, setContent] = useState("");
  const [key, setKey] = useState("public");
  const [country, setCountry] = useState("");
  const [data, setData] = useState([]);

  const sectors = ["public", "education", "health", "business", "energy"];
  return (
    <div>
      <div className="page">
        <div className="Tabs">
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
        </div>
        <MapChart
          setTooltipContent={setContent}
          dataset={key + ".csv"}
          country={country}
          setCountry={setCountry}
          data={data}
          setData={setData}
        />
        <Stats
          country={country}
          data={data}
          displayDetails={countryCode => {
            setCountry(countryCode);
          }}
        ></Stats>
        <ReactTooltip>{content}</ReactTooltip>
        <Details countryCode={country} data={data} />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
