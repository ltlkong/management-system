import React, { Component } from 'react';
import { PieChart } from 'react-chartkick'
import 'chartkick/chart.js'
import { Button } from 'antd';

export default class Pie extends Component {

  render() {
    return (
      <div className="pie-chart chart">
        <Button type="default" className="update-button" style={{marginBottom: "40px"}}>Update</Button>
        <PieChart data={[["Blueberry", 44], ["Strawberry", 23]]} />
      </div>
    );
  }
}