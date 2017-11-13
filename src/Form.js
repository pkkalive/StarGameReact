import React, {Component} from 'react';
import axios from 'axios';

export default class Form extends Component {
  state = {
    userName:''
  };
  handleSubmit = (event) => {
    event.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.userName}`)
      .then(resp => {
        console.log(resp);
      });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
              value = {this.state.userName}
              onChange={(event) => this.setState({userName: event.target.value})}
              placeholder="Github User Name" required/>
        <button type="submit">Add Card</button>
      </form>
    );
  }
}
