import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";

export default props => {
  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={props.key}
      onSelect={k => props.setKey(k)}
    >
      <Tab eventKey="public" title="Public"></Tab>
      <Tab eventKey="education" title="Education"></Tab>
    </Tabs>
  );
};
