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
      cbMarkItem: PropTypes.func.isRequired,
      cbEditItem: PropTypes.func.isRequired,
      cbEnableBtns: PropTypes.func.isRequired,
      cbDisableBtns: PropTypes.func.isRequired,
      isDisabledBtnDelete: PropTypes.bool.isRequired,

  };
  
  render() {
   
    var classNameStyle = this.props.checkedId === this.props.id? 'Item Checked' : 'Item';
    
    return (
        
      <tr className={classNameStyle}  onClick={() => {
        this.props.cbEditItem(null);
        this.props.cbMarkItem(this.props.id);
        this.props.cbEnableBtns()
      }
      }>
        <td>{this.props.product}</td>
        <td>{this.props.price}</td>
        <td>{this.props.amount}</td>
        <td>
          <img className='Img' src={this.props.url}></img>
        </td>
        <td>
          <button onClick={(EO) => {
            EO.stopPropagation();
            // this.props.cbMarkItem(null)
            this.props.cbDisableBtns();
            this.props.cbEditItem(this.props);
          }}>{'Редактировать'}</button>
          <button disabled={this.props.isDisabledBtnDelete} onClick={(EO) => {
            EO.stopPropagation();
            this.props.cbDeleteItem(this.props.id);
          }}>{'Удалить'}</button>
        </td>
      </tr>
    )
  }
};

export default Item;