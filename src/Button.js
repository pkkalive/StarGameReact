import React, {Component} from 'react';

export default class Button extends Component {
  handleClick = () =>{
    this.props.onClickFuction(this.props.incrementValue)
  };
  render() {
    return (
      <button onClick={this.handleClick} >
        +{this.props.incrementValue}
      </button>
    );
  }
}
