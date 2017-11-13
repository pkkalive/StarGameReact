import React, {Component} from 'react';

export default class Form extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Github User Name" />
        <button type="submit">Add Card</button> 
      </form>
    );
  }
}
