import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Five day weather forecast</h1>
      <DayForecast day="Wed" mintemp="67" maxtemp="78" daytype="sunny" />
      <DayForecast day="Thu" mintemp="57" maxtemp="68" daytype="rainy" />
      <DayForecast day="Fri" mintemp="61" maxtemp="72" daytype="cloudy" />
      <DayForecast day="Sun" mintemp="43" maxtemp="48" daytype="snowy" />
      <DayForecast day="Mon" mintemp="53" maxtemp="56" daytype="cloudy" />
    </div>
  );
}

class DayForecast extends React.Component {
  render() {
    return (
      <div className="day">
        <div className="dayname">{this.props.day}</div>
        <div className={"weather-image " + this.props.daytype} />
        <div className="clear" />
        <span className="max">{this.props.maxtemp}&deg;</span>
        <span className="min">{this.props.mintemp}&deg;</span>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
