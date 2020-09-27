import React, { useState } from 'react';


const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

//摄氏温度转为华氏温度
function toFahrenheit(celsius) {
  return (celsius * 1.8)  + 32;
}

function toCelsius(fahrenheit) {
	return (fahrenheit -32) *5/9;
}

function tryConvert(temperature, convert) {
const input = parseFloat(temperature);
if (isNaN(input)) {
  return '';
}
const output = convert(input);
const rounded = Math.round(output * 1000) / 1000;
return rounded.toString();
}



function TemperatureInput ({scale,temperature,onTemperatureChange}){
  function handleChange(e) {
    onTemperatureChange(e.target.value)
  }
  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input value={temperature}
             onChange={handleChange} />
    </fieldset>
  );
}

function Parent() {
  const [tpc, setTpc] = useState({tpc:'',scale:'c'})
  function handleCelsiusChange(tpc) {
    setTpc({scale:'c',tpc});
  }
  function handelFahrenheitChange(tpc) {
    setTpc({scale:'f',tpc});
  };
  const scale = tpc.scale;
  const temperature = tpc.tpc;
  const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
  return (
    <>
      <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={handleCelsiusChange} />
	  <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={handelFahrenheitChange} />
    </>
  );
}

export default Parent