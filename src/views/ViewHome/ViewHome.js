import React, { Fragment, useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import Procesos from "../../Components/Procesos/Procesos" ;
import CPU from "../../Components/CPU/CPU" ;
import RAM from "../../Components/RAM/RAM";

const Index = (props) => {
  const [key, setKey] = useState('monCPU');

  return (
    <Fragment>
      <br></br>
      <br></br>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="procs" title="Procesos">
          <br></br>
          <Procesos/>
        </Tab>
        <Tab eventKey="monCPU" title="Monitor CPU">
          <br></br>
          <CPU/>
        </Tab>
        <Tab eventKey="monRam" title="Monitor RAM">
          <br></br>
          <RAM/>
        </Tab>
      </Tabs>
    
    </Fragment>
  );
};

export default Index;
