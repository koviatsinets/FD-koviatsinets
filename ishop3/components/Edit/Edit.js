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
  
  render() {
    
    return (
      
     <div className='Edit'>
        <p className='Title'>{'Редактирование элемента'}</p>
        <div className='Row'>
          <p className='Text'>{'Название:'}</p>
          <input type="text" defaultValue={this.props.item.product}></input>
        </div>
        <div className='Row'>
          <p className='Text'>{'Стоимость:'}</p>
          <input type="text" defaultValue={this.props.item.price}></input>
        </div>
        <div className='Row'>
          <p className='Text'>{'Количество:'}</p>
          <input type="text" defaultValue={this.props.item.amount}></input>
        </div>
        <div className='Row'>
          <p className='Text'>{'URL изобр.:'}</p>
          <input type="text" defaultValue={this.props.item.url}></input>
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