import React from "react";

const scaleNames = {
  c: "攝氏",
  f: "華氏",
};

const toFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

const toCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

const tryConvert = (temperature, convert) => {
  const input = parseFloat(temperature);
  return Number.isNaN(input) ? (
     0
  ) :  (
   (Math.round(convert( input * 100) / 100))
  )
}  




export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = { temperature: "", scale: "c" };
  }
  handleCelsiusChange(temperature) {
    this.setState({ scale: "c", temperature });
  }

  handleFahrenheitChange(temperature) {
    this.setState({ scale: "f", temperature });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius =
      scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
        <fieldset>
          <legend>輸入溫度 {scaleNames[scale]}</legend>
          <input value={temperature} onChange={this.handleChange} />
        </fieldset>


    );
  }
}

function BoilingVerdict({ celsius }) {
  return celsius >= 100 ? (
    <p>{celsius}攝氏度，水已經開了 小心...</p>
  ) : Number.isNaN(celsius) ? (
    ""
  ) : (
    <p>{celsius}攝氏度,水還沒有開.</p>
  );
}
