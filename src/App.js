import React, { Component } from 'react';
import Button from './Button';
import Result from './Result';

class App extends Component {
  state = { counter: 0 };
  incrementCounter = (incrementValue) => {
    this.setState((prevState) => ({
        counter: prevState.counter + incrementValue
    }));
  }
  resetCounter = () => {
    this.setState({counter: 0})
  }

  render() {
    return (
      <div className="App">
        <Button incrementValue={1} onClickFuction={this.incrementCounter}/>
        <Button incrementValue={5} onClickFuction={this.incrementCounter}/>
        <Button incrementValue={10} onClickFuction={this.incrementCounter}/>
        <Button incrementValue={100} onClickFuction={this.incrementCounter}/>
        <Button incrementValue={"Reset"} onClickFuction={this.resetCounter}/>
        <Result counter={this.state.counter}/>
      </div>
    );
  }
}

export default App;
