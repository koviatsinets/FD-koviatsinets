import React from 'react';
import PropTypes from 'prop-types';

import './Market.css';

import Item from '../Item/Item';
import Card from '../Card/Card';
import Edit from '../Edit/Edit';

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
    currEditItem: null,
    isDisbaledBtns: false,
    isValuesChanged: false,
  };

  deleteItem = (buttId) => {
    this.confirm();
    var resultArr = this.state.stateArr.filter(el => (el.id !== buttId));
    this.setState( {stateArr: resultArr} );
  };

  confirm = () => {
    alert('Данный товар будет удален')
  };

  markItem = (itemId) => {
    this.setState( {checkedItemId: itemId} );
  };

  editItem = (item) => {
    this.setState( {currEditItem: item} );
  }

  disableBtns = () => {
    this.setState( {isDisbaledBtns: true} );
  }

  enableBtns = () => {
    this.setState( {isDisbaledBtns: false} );
  }

  setValuesChanged = (value) => {
    this.setState({isValuesChanged: value})
  }

  saveEditItem = (item) => {
    let resultArr = this.state.stateArr.map(el => item.id == el.id ? item : el);
    this.setState({stateArr: resultArr})
  }

  render() {
console.log(this.state.stateArr)
    const itemsCode=this.state.stateArr.map( el =>
      <Item key={el.id} id={el.id} product={el.product} 
        price={el.price} amount={el.amount} url={el.url} checkedId={this.state.checkedItemId}
        cbDeleteItem={this.deleteItem} cbMarkItem={this.markItem} cbEditItem={this.editItem}
        cbDisableBtns={this.disableBtns} cbEnableBtns={this.enableBtns} isDisabledBtnDelete={this.state.isDisbaledBtns} 
        isValuesChanged={this.state.isValuesChanged}
      />
    );

    const checkedCode = this.state.stateArr.find(el => el.id === this.state.checkedItemId)

    return (
        <div className='Market'>
            <div className='MarketTitle'>{this.props.title}</div>
            <div className='Container'>
              <div className='TableBlock'>
                <table>
                  <thead>
                  <tr>
                    <th>{'Название'}</th>
                    <th>{'Стоимость (руб.)'}</th>
                    <th>{'Количество на складе (шт.)'}</th>
                    <th>{'Изображение'}</th>
                    <th>{'Действие'}</th>
                  </tr>
                  </thead>
                  <tbody>{itemsCode}</tbody>
                </table>
                <button className='ButtonAddItem' disabled={this.state.isDisbaledBtns}>{'Новый'}</button>
              </div>
              {
                (checkedCode && !this.state.currEditItem) &&
                <Card card={checkedCode}/>
              }
              {
                this.state.currEditItem &&
                <Edit key={this.state.currEditItem.id} item={this.state.currEditItem} cbEnableBtns={this.enableBtns} 
                  cbEditItems={this.editItem} cbSetValuesChanged={this.setValuesChanged} cbSaveEditItem={this.saveEditItem}/>
              }
            </div>
        </div>
    )
  }
}

export default Market;
