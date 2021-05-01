import React, { Component } from 'react';
import { LineChart } from 'react-chartkick';
import 'chartkick/chart.js';
import { Button } from 'antd';

export default class Line extends Component {

  render() {
    return (
      <div className="line-chart chart">
        <Button type="default" className="update-button" style={{marginBottom: "40px"}}>Update</Button>
        <LineChart data={{"2021-05-13": 2, "2021-05-14": 5,}} />
      </div>
    );
  }
}