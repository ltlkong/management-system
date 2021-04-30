import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import './HeaderC.less'
import getPageHeaderContent from './GetPageHeaderContent'
import getLatAndLong from '../../api/GetLatAndLong'
import getWeatherInformation from '../../api/GetWeatherInfo'
import formateTime from '../../utils/FormatTime'

class HeaderC extends Component {
  state = {
    conditionText: "Partly cloudy",
    conditionIcon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
    temperature: "9°C",
    time: formateTime(Date.now()),
    isPhone: window.innerWidth < 500 ? true : false,
  }

  componentDidMount() {
    getLatAndLong()
    .then(coord => {
      getWeatherInformation(coord, 1)
      .then(res => {
        if(res)
          this.setState({
            conditionText: res.current.condition.text,
            conditionIcon: res.current.condition.icon,
            temperature: res.current.temp_c + "°C"
          })
      })
    })

  setInterval(() => {
      this.setState({time: formateTime(Date.now())})
    })
  }

  render() {
    const path = this.props.location.pathname;
    const content = getPageHeaderContent(path);
    const {conditionText, conditionIcon, temperature, time, isPhone: shouldHideInfo} = this.state;

    return (
      <div className="header">
        <div className="header-left">
          <Link to="/login">Log off</Link>
          <span style={{display: shouldHideInfo ? "none":"inline-block"}}>    Welcome Admin</span>
        </div>
        <div className="header-middle">
          {content}
          <div className="header-middle-triangle">
          </div>
        </div>
        <div className="header-right">
            {time   }
            <span className="weather-info" style={{display: shouldHideInfo ? "none":"inline-block"}}>
              <img src={conditionIcon} alt="condition icon"></img>
              {conditionText + " " + temperature}
            </span>           
        </div>
      </div>
    );
  }
}



export default withRouter(HeaderC)