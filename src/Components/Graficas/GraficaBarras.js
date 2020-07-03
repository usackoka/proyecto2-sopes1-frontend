import React, { Fragment } from "react";

import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  DataLabel,
  ColumnSeries,
  Selection,
} from "@syncfusion/ej2-react-charts";

class GraficaBarras extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: [
        { country: "USA", gold: 50, silver: 70, bronze: 45 },
        { country: "China", gold: 40, silver: 60, bronze: 55 },
        { country: "Japan", gold: 70, silver: 60, bronze: 50 },
        { country: "Australia", gold: 60, silver: 56, bronze: 40 },
        { country: "France", gold: 50, silver: 45, bronze: 35 },
        { country: "Germany", gold: 40, silver: 30, bronze: 22 },
        { country: "Italy", gold: 40, silver: 35, bronze: 37 },
        { country: "Sweden", gold: 30, silver: 25, bronze: 27 },
      ],
    };

    this.primaryxAxis = {
      valueType: "Category",
      interval: 1,
      majorGridLines: { width: 0 },
    };
    this.primaryyAxis = {
      majorGridLines: { width: 0 },
      majorTickLines: { width: 0 },
      lineStyle: { width: 0 },
      labelStyle: { color: "transparent" },
    };
    this.marker = {
      dataLabel: {
        visible: true,
        position: "Top",
        font: { fontWeight: "600", color: "#ffffff" },
      },
    };
    this.tooltip = { enable: true };
    this.legendSettings = { position: "Top", alignment: "Near" };

    this.renderFormData();
  }

  renderFormData(){
    console.log("INFO EN GRAPH BARRAS")
    console.log(this.props.data)
  }

  render() {
    return (
      <Fragment>
        <ChartComponent
          id="charts"
          primaryXAxis={this.primaryxAxis}
          primaryYAxis={this.primaryyAxis}
          legendSettings={this.legendSettings}
          enableAnimation={true}
          tooltip={this.tooltip}
        >
          <Inject
            services={[
              ColumnSeries,
              Legend,
              Tooltip,
              DataLabel,
              Category,
              Selection,
            ]}
          />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={this.state.formData}
              xName="country"
              yName="gold"
              name="Gold"
              type="Column"
            ></SeriesDirective>
            <SeriesDirective
              dataSource={this.state.formData}
              xName="country"
              yName="silver"
              name="Silver"
              type="Column"
            ></SeriesDirective>
            <SeriesDirective
              dataSource={this.state.formData}
              xName="country"
              yName="bronze"
              name="Bronze"
              type="Column"
            ></SeriesDirective>
          </SeriesCollectionDirective>
        </ChartComponent>
      </Fragment>
    );
  }
}

export default GraficaBarras;
