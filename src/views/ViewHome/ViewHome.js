import React, { Fragment, useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import EstadisticasGenerales from "../../Components/EstadisticasGenerales/EstadisticasGenerales" ;
import TopAfectados from "../../Components/TopAfectados/TopAfectados"
import Graficas from "../../Components/Graficas/Graficas";

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
        <Tab eventKey="procs" title="Estadísticas Generales">
          <br></br>
          <EstadisticasGenerales/>
        </Tab>
        <Tab eventKey="monCPU" title="Top Afectados">
          <br></br>
          <TopAfectados/>
        </Tab>
        <Tab eventKey="monRam" title="Graficas">
          <br></br>
          <Graficas/>
        </Tab>
      </Tabs>
    
    </Fragment>
  );
};

export default Index;
