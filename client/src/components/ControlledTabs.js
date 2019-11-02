import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";

export default ()=> {
  const [key, setKey] = useState("home");

  return (
    <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
      <Tab eventKey="home" title="Home">
        {key}
      </Tab>
      <Tab eventKey="profile" title="Profile">
      {key}
      </Tab>
    </Tabs>
  );
}


