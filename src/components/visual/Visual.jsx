import React from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

class Visual extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // Create chart instance
    let chart = am4core.create("chartdiv", am4charts.PieChart);
    // Add data
    chart.data = this.props.data;
    console.log(chart.data);
    // chart.data = [
    //   {
    //     amount: "Base Salary",
    //     dollars: 155000
    //   },
    //   {
    //     amount: "Sign up Bonus",
    //     dollars: 4000
    //   },
    //   {
    //     amount: "RSU",
    //     dollars: 50000
    //   },
    //   {
    //     amount: "Performance Bonus",
    //     dollars: 31000
    //   }
    // ];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "dollars";
    pieSeries.dataFields.category = "amount";
    this.chart = chart;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <div>
        <div id={this.props.comp} style={{ width: "100%", height: "500px" }} />;
        <h1>
          {this.props.comp} TC: {this.props.total}
        </h1>
      </div>
    );
  }
}
export default Visual;
