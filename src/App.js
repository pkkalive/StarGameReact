import React, {Component} from 'react';
import CardList from './CardList';
import Form from './Form';

export default class App extends Component {
  state = {
    cards : []
    };
    
    addNewCard = (cardInfo) => {
      this.setState(prevState => ({
        cards: prevState.cards.concat(cardInfo)
      }));
    };

  render() {
    return (
      <div>
        <Form onSubmit= {this.addNewCard}></Form>
        <CardList cards={this.state.cards}/>
      </div>
    );
  }
}
