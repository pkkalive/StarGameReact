import React, {Component} from 'react';
import CardList from './CardList';
import Form from './Form';

export default class App extends Component {
  state = {
    cards : [
        {
          name: "Kalive Purushotham Kumar",
          avatarUrl: "https://avatars0.githubusercontent.com/u/4536902?v=4",
          companyName:"Google"
        },
        {
          name: "Kalive Purushotham Kumar",
          avatarUrl: "https://avatars0.githubusercontent.com/u/4536902?v=4",
          companyName: "Freiheit"
        }
      ]
    };

  render() {
    return (
      <div>
        <Form></Form>
        <CardList cards={this.state.cards}/>
      </div>
    );
  }
}
