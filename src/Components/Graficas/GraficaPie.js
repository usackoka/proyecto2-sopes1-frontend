import React, { Fragment, useState, useEffect } from "react";
import { Tabs, Tab, Row, Col, Button } from "react-bootstrap";

import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  IAccTooltipRenderEventArgs,
  Inject,
  AccumulationDataLabel,
  AccumulationTooltip,
  PieSeries,
  AccumulationDataLabelSettingsModel,
  TooltipSettingsModel,
} from "@syncfusion/ej2-react-charts";
import { EmitType } from "@syncfusion/ej2-base";

class GraficaPie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: [
        { x: "Chrome", y: 37 },
        { x: "UC Browser", y: 17 },
        { x: "iPhone", y: 19 },
        { x: "Others", y: 4 },
        { x: "Opera", y: 11 },
      ],
    };
  }

  render() {
    let datalabel = { visible: true, position: 'Inside', name: 'text' };
    let tooltip = { enable: true };
    let tooltipRender = (args) => {
      let value = args.point.y / args.series.sumOfPoints * 100;
      args.text = args.point.x + '' + Math.ceil(value) + '' + '%';
    };
    return (
      <Fragment>
        <AccumulationChartComponent
          id="charts"
          tooltip={tooltip}
          title="Mobile Browser Statistics"
          tooltipRender={tooltipRender}
        >
          <Inject
            services={[AccumulationTooltip, PieSeries, AccumulationDataLabel]}
          />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              dataSource={this.state.formData}
              xName="x"
              yName="y"
              radius="100%"
              dataLabel={datalabel}
            ></AccumulationSeriesDirective>
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </Fragment>
    );
  }
}

export default GraficaPie;
