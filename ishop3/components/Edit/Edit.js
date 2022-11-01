import React from 'react';
import PropTypes from 'prop-types';

import './Edit.css';

class Edit extends React.Component {

  static propTypes = {
    cbEditItems: PropTypes.func.isRequired,
    cbEnableBtns: PropTypes.func.isRequired,

    products: PropTypes.arrayOf(
      PropTypes.shape({
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
      })
    )
  };

  state = {
    product: this.props.item.product,
    price: this.props.item.price,
    amount: this.props.item.amount,
    url: this.props.item.url,
  };

  changeValueProduct = (EO) => {
    this.setState({product: EO.target.value})
  }

  changeValuePrice = (EO) => {
    this.setState({price: EO.target.value})
  }

  changeValueAmount = (EO) => {
    this.setState({amount: EO.target.value})
  }

  changeValueUrl = (EO) => {
    this.setState({url: EO.target.value})
  }
  
  render() {
    
    return (

     <div className='Edit'>
        <p className='Title'>{'Редактирование элемента'}</p>
        <div className='Row'>
          <p className='Text'>{'Название:'}</p>
          <input type="text" value={this.state.product} onChange={this.changeValueProduct}></input>
        </div>
        <div className='Row'>
          <p className='Text'>{'Стоимость:'}</p>
          <input type="text" value={this.state.price} onChange={this.changeValuePrice}></input>
        </div>
        <div className='Row'>
          <p className='Text'>{'Количество:'}</p>
          <input type="text" value={this.state.amount} onChange={this.changeValueAmount}></input>
        </div>
        <div className='Row'>
          <p className='Text'>{'URL изобр.:'}</p>
          <input type="text" value={this.state.url} onChange={this.changeValueUrl}></input>
        </div>
        <div className='Row'>
          <button>{'Сохранить'}</button>
          <button onClick={() => {
            this.props.cbEnableBtns();
            this.props.cbEditItems(null);
            }}>{'Отменить'}</button>
        </div>
     </div>
    )
  }
};

export default Edit;