import React from 'react';
import PropTypes from 'prop-types';

import './Edit.css';

class Edit extends React.Component {

  static propTypes = {
    cbEditItems: PropTypes.func.isRequired,
    cbEnableBtns: PropTypes.func.isRequired,
    cbSetValuesChanged: PropTypes.func.isRequired,

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
    productValidError: '',
    priceValidError: '',
    amountValidError: '',
    urlValidError: '',
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
    this.comparsionValue();
  }

  changeValuePrice = (EO) => {
    this.setState({price: +EO.target.value}, this.validationValuePrice);
  }

  validationValuePrice = () => {
    if (this.state.price === '') {
      this.setState({priceValidError: '!!!'});
    } else {
      this.setState({priceValidError: ''});
    }
    this.comparsionValue();
  }

  changeValueAmount = (EO) => {
    this.setState({amount: +EO.target.value}, this.validationValueAmount);
  }

  validationValueAmount = () => {
    if (this.state.amount === '') {
      this.setState({amountValidError: '!!!'});
    } else {
      this.setState({amountValidError: ''});
    }
    this.comparsionValue();
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
    this.comparsionValue();
  }

  comparsionValue = () => {

    if (this.props.item.product === this.state.product && 
        this.props.item.price === +this.state.price &&
        this.props.item.amount === +this.state.amount &&
        this.props.item.url === this.state.url) {
          this.props.cbSetValuesChanged(false);
      } else {
        this.props.cbSetValuesChanged(true);
      }
  }
  
  render() {
    
    return (

     <div className='Edit'>
        <p className='Title'>{'Редактирование элемента'}</p>
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
          <button onClick={() => {this.props.cbSaveEditItem({
            product: this.state.product,
            id: this.props.item.id,
            price: this.state.price,
            amount: this.state.amount,
            url: this.state.url,
          });
            this.props.cbEnableBtns();
            this.props.cbEditItems(null);
            this.props.cbSetValuesChanged(false);
          }} disabled={ 
            this.state.productValidError || this.state.priceValidError || this.state.amountValidError || this.state.urlValidError
            }>{'Сохранить'}</button>
          <button onClick={() => {
            this.props.cbEnableBtns();
            this.props.cbEditItems(null);
            this.props.cbSetValuesChanged(false);
            }}>{'Отменить'}</button>
        </div>
     </div>
    )
  }
};

export default Edit;