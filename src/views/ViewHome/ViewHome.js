import React, { Fragment, useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import EstadisticasGenerales from "../../Components/EstadisticasGenerales/EstadisticasGenerales" ;
import TopAfectados from "../../Components/TopAfectados/TopAfectados"
import GraficaPie from "../../Components/Graficas/GraficaPie";
import GraficaBarras from "../../Components/Graficas/GraficaBarras"

const Index = (props) => {
  const [key, setKey] = useState('procs');

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
          <GraficaBarras/>
        </Tab>
      </Tabs>
    </Fragment>
  );
};

export default Index;
