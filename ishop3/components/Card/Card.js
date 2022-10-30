import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';

class Card extends React.Component {

  static propTypes = {
    product: PropTypes.string,
    price: PropTypes.number,
    amount: PropTypes.number,
    url: PropTypes.string
  };
  
  render() {
    console.log(this.props.card)
    return (
      
     <div className='Card'>
        <p className='Product'>{this.props.card.product}</p>
        <img className='Img' src={this.props.card.url}></img>
        <p className='Price'>{this.props.card.price + ' руб.'}</p>
        <p className='Amount'>{'На складе: ' + this.props.card.amount + ' шт.'}</p>
     </div>
    )
  }
};

export default Card;