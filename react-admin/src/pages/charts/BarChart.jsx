import React, { Component } from 'react';
import './Chart.less';
import { BarChart } from 'react-chartkick'
import 'chartkick/chart.js'
import { Button } from 'antd';

export default class Bar extends Component {
  render() {
    return (
      <div className="bar-chart chart">
        <Button type="default" className="update-button" style={{marginBottom: "40px"}}>Update</Button>
        <BarChart data={[["X-Small", 5], ["Small", 27]]} />
      </div>
    );
  }
}
  // Load the Visualization API and the piechart package.