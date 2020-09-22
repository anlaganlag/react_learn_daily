import React, { useState } from 'react';

//摄氏温度转为华氏温度
function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function toCelsius(fahrenheit) {
	return ((fahrenheit -32) *5)/9;
}


// 温度输入框组件
function TemperatureCelsiusInput(props) {
  return (
    <div>
      <p>请在此处输入摄氏温度</p>
      <input value={props.celsius} onChange={props.onCelsiusChange} />
    </div>
  );
}
function TemperatureFahrenheitInput(props) {
	return (
	  <div>
		<p>请在此处输入華氏溫度</p>
		<input value={props.fahrenheit} onChange={props.onFahrenheitChange} />
	  </div>
	);
  }
//华氏温度展示组件
function FahrenheitComponent(props) {
  return <div>此时的华氏温度为:{props.fahrenheit}</div>;
}

function CelsiusComponent(props) {
	return <div>此时的攝氏温度为:{props.celsius}</div>;
  }
//父组件
function Parent() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  // const [cv, setCv] = useState('')

  // 监听子组件值的改变，从而改变celsius值
  const onCelsiusChange = (event) => {
    setCelsius(event.target.value);
  }
  const onFahrenheitChange = (event) => {
    setFahrenheit(event.target.value);
  };
  const cv = toCelsius(fahrenheit)
  const fv = toFahrenheit(celsius)
  return (
    <>
      <TemperatureCelsiusInput celsius={celsius} onCelsiusChange={onCelsiusChange} />
      <FahrenheitComponent fahrenheit={fv} />
	  <TemperatureFahrenheitInput fahrenheit={fahrenheit} onFahrenheitChange={onFahrenheitChange} />
      <CelsiusComponent celsius={cv} />
    </>
  );
}

export default Parent