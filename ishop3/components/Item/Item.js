import React from 'react';
import PropTypes from 'prop-types';

import './Item.css';

class Item extends React.Component {

  static propTypes = {
      product: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      amount: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      cbDeleteItem: PropTypes.func.isRequired,
      cbMarkItem: PropTypes.func.isRequired
  };
  
  render() {

    var classNameStyle = this.props.checkedId === this.props.id? 'Item Checked' : 'Item';

    return (
      
      <tr className={classNameStyle}  onClick={() => this.props.cbMarkItem(this.props.id)}>
        <td>{this.props.product}</td>
        <td>{this.props.price}</td>
        <td>{this.props.amount}</td>
        <td>
          <img className='Img' src={this.props.url}></img>
        </td>
        <td>
          <button className='Button' onClick={(EO) => {
             EO.stopPropagation();
             this.props.cbDeleteItem(this.props.id);
          }}>{'удалить'}</button>
        </td>
      </tr>
    )
  }
};

export default Item;