import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div style={{margin: '1em'}}>
      <img width= "75" src={props.avatarUrl} />
      <div style={{display: 'inline-block', marginLeft: 10}}>
        <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>
          {props.name}
        </div>
        <div>{props.companyName}</div>
      </div>
    </div>
  );
};

export default Card;
