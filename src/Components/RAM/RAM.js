import React, { Fragment, useState, useEffect } from "react";
import { Tabs, Tab, Row, Col, Button } from "react-bootstrap";

import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

const Index = (props) => {
  const [formData, setFormData] = useState([
    { x: 2, y: 3 },
    { x: 1, y: 5 },
    { x: 5, y: 2 },
    { x: "Thu", y: 4 },
    { x: "Fri", y: 6 },
  ]);

  useEffect(() => {
    const getData = async () => {
    };

    if (!formData.llenado) {
      getData();
    }
  }, []);

  return (
    <Fragment>
      <SparklineComponent
        id="sparkline2"
        height="800px"
        width="1500px"
        fill="#033e96"
        valueType="Category"
        xName="x"
        yName="y"
        dataSource={formData}
        axisSettings={{
          // To configure axis line settings
          lineSettings: {
            visible: true,
            color: "#ff14ae",
            dashArray: 5,
          },
        }}
        markerSettings={{
          visible: ["All"],
        }}
        dataLabelSettings={{
          visible: ["All"],
        }}
        tooltipSettings={{
          visible: true,
          format: "${x} : ${y}",
          fill: "#033e96",
          textStyle: {
            color: "white",
          },
        }}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    </Fragment>
  );
};

export default Index;
