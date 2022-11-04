import React from 'react';
import PropTypes from 'prop-types';

import './New.css';

class New extends React.Component {

  static propTypes = {
    cbIsNewItem: PropTypes.func.isRequired,
    cbSaveNewItem: PropTypes.func.isRequired,
    cbEnableBtns: PropTypes.func.isRequired,
    cbSetValuesChanged: PropTypes.func.isRequired,
  };

  state = {
    product: '',
    price: '',
    amount: '',
    url: '',
    productValidError: '!!!',
    priceValidError: '!!!',
    amountValidError: '!!!',
    urlValidError: '!!!',
  };

  changeValueProduct = (EO) => {
    this.setState({product: EO.target.value}, this.validationValueProduct);
  }

  validationValueProduct = () => {
    if (this.state.product === '') {
      this.setState({productValidError: '!!!'});
    } else {
      this.setState({productValidError: ''});
    }
  }

  changeValuePrice = (EO) => {
    this.setState({price: EO.target.value}, this.validationValuePrice);
  }

  validationValuePrice = () => {
    if (this.state.price === '') {
      this.setState({priceValidError: '!!!'});
    } else {
      this.setState({priceValidError: ''});
    }
  }

  changeValueAmount = (EO) => {
    this.setState({amount: EO.target.value}, this.validationValueAmount);
  }

  validationValueAmount = () => {
    if (this.state.amount === '') {
      this.setState({amountValidError: '!!!'})
    } else {
      this.setState({amountValidError: ''})
    }
  }

  changeValueUrl = (EO) => {
    this.setState({url: EO.target.value}, this.validationValueUrl);
  }

  validationValueUrl = () => {
    if (this.state.url === '') {
      this.setState({urlValidError: '!!!'});
    } else {
      this.setState({urlValidError: ''});
    }
  }
  
  render() {
    
    return (

        <div className='New'>
        <p className='Title'>{'Создание нового элемента'}</p>
        <div className='Row'>
          <p className='Text'>{'Название:'}</p>
          <input type="text" value={this.state.product} onChange={this.changeValueProduct}></input>
          <p className='Error'>{this.state.productValidError}</p>
        </div>
        <div className='Row'>
          <p className='Text'>{'Стоимость:'}</p>
          <input type="text" value={this.state.price} onChange={this.changeValuePrice}></input>
          <p className='Error'>{this.state.priceValidError}</p>
        </div>
        <div className='Row'>
          <p className='Text'>{'Количество:'}</p>
          <input type="text" value={this.state.amount} onChange={this.changeValueAmount}></input>
          <p className='Error'>{this.state.amountValidError}</p>
        </div>
        <div className='Row'>
          <p className='Text'>{'URL изобр.:'}</p>
          <input type="text" value={this.state.url} onChange={this.changeValueUrl}></input>
          <p className='Error'>{this.state.urlValidError}</p>
        </div>
        <div className='Row'>
          <button onClick={() => {this.props.cbSaveNewItem({
            product: this.state.product,
            price: +this.state.price,
            amount: +this.state.amount,
            url: this.state.url,
          });
          this.props.cbIsNewItem(false);
          this.props.cbSetValuesChanged(false);
          this.props.cbEnableBtns();
          }} disabled={ 
            this.state.productValidError || this.state.priceValidError || this.state.amountValidError || this.state.urlValidError
            }>{'Сохранить'}</button>
          <button onClick={() => {
            this.props.cbIsNewItem(false);
            this.props.cbEnableBtns();
            this.props.cbSetValuesChanged(false);
            }}>{'Отменить'}</button>
        </div>
     </div>
    )
  }
};

export default New;