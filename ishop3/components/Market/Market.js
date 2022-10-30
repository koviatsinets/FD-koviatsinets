import React from 'react';
import PropTypes from 'prop-types';

import './Market.css';

import Item from '../Item/Item';
import Card from '../Card/Card';

class Market extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    products: PropTypes.array.isRequired,

    products: PropTypes.arrayOf(
      PropTypes.shape({
        product: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        amount: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
      })
    )
  };

  state = {
    stateArr: this.props.products,
    checkedItemId: null,
  };

  deleteItem = (buttId) => {
    this.confirm();
    var resultArr = this.state.stateArr.filter(el => (el.id !== buttId));
    this.setState( {stateArr: resultArr} );
  };

  markItem = (itemId) => {
    this.setState( {checkedItemId: itemId} );
  };

  confirm = () => {
    alert('Данный товар будет удален')
  };

  render() {
  
    const itemsCode=this.state.stateArr.map( el =>
      <Item key={el.id} id={el.id} product={el.product} 
        price={el.price} amount={el.amount} url={el.url} checkedId={this.state.checkedItemId}
        cbDeleteItem={this.deleteItem} cbMarkItem={this.markItem}
      />
    );

    const cardCode = this.state.stateArr.find(el => el.id === this.state.checkedItemId)

    return (
        <div className='Market'>
            <div className='MarketTitle'>{this.props.title}</div>
            <div className='Container'>
              <div className='TableBlock'>
                <table>
                  <thead>
                  <tr>
                    <th>{'Название продукта'}</th>
                    <th>{'Стоимость (руб.)'}</th>
                    <th>{'Количество на складе (шт.)'}</th>
                    <th>{'Изображение'}</th>
                    <th>{'Удалить элемент'}</th>
                  </tr>
                  </thead>
                  <tbody>{itemsCode}</tbody>
                </table>
                <button className='ButtonAddItem'>{'Новый'}</button>
              </div>
              {
                cardCode &&
                <Card card={cardCode}/>
              }
            </div>
        </div>
    )
  }
}

export default Market;
