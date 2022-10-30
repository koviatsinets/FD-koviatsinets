import React from 'react';
// import PropTypes from 'prop-types';

import './Card.css';

class Card extends React.Component {

//   static propTypes = {
   
//   };
  
  render() {
    console.log(this.props.card)
    return (
      
     <div className='Card'>
        <p className='Product'>{this.props.card.product}</p>
        <img className='Img' src={this.props.card.url}></img>
        <p className='Price'>{this.props.card.price + ' руб.'}</p>
        {/* <p>{this.props.card.amount}</p> */}
     </div>
    )
  }
};

export default Card;