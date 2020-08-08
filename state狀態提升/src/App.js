import React from 'react';
 

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>
  }
  return <p>The water would not boil.</p>
}



export default class Calculator extends React.Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {temperature:''}
  }
  Calculator
  handleChange(e){
    this.setState({temperature:e.target.value})
  }

  render(){
    const temperature = this.state.temperature
    return (
      <fieldset>
        <legend>Enter temperature in Celsisus:</legend>
        <input
          value = {temperature}
          onChange = {this.handleChange}
        />
        <BoilingVerdict
          celsius={parseFloat(temperature)}
        />
      </fieldset>
    )
  }
}

