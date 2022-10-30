import React from 'react';
import PropTypes from 'prop-types';

import './ProductBlock.css';

import ProductItem from './ProductItem';

class ProductBlock extends React.Component {

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
  
    const answersCode=this.state.stateArr.map( el =>
      <ProductItem key={el.id} id={el.id} product={el.product} 
        price={el.price} amount={el.amount} url={el.url} checkedId={this.state.checkedItemI}
        cbDeleteItem={this.deleteItem} cbMarkItem={this.markItem}
      />
    );

    return (
        
        <div className='ProductBlock'>
            <div className='MarketTitle'>{this.props.title}</div>
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
              <tbody>{answersCode}</tbody>
            </table>
        </div>
    );
  }
}

export default ProductBlock;
