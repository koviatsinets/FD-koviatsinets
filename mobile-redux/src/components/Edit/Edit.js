import React from 'react';

import {clientEvents} from '../../events';

import './Edit.css';

class Edit extends React.PureComponent {

  editSurnameRef = React.createRef();
  editNameRef = React.createRef();
  editPatronymRef = React.createRef();
  editBalanceRef = React.createRef();

  saveEditClient = () => {
      
    let client = {
      id: this.props.id,
      userSurname: this.editSurnameRef.current.value,
      userName: this.editNameRef.current.value,
      userPatronym: this.editPatronymRef.current.value,
      balance: this.editBalanceRef.current.value,
    };

    clientEvents.emit("ESaveEditClicked", client)
  };
   
  render() {
    console.log('Рендер <Edit/>')
    return (
      <div className='Edit'>
        <p className='Title'>Редактирование клиента:</p>
          <div>
            <p>Фамилия</p>
            <input type='text' defaultValue={this.props.userSurname} ref={this.editSurnameRef}></input>
          </div>
          <div>
            <p>Имя</p>
            <input type='text' defaultValue={this.props.userName} ref={this.editNameRef}></input>
          </div>
          <div>
            <p>Отчество</p>
            <input type='text' defaultValue={this.props.userPatronym} ref={this.editPatronymRef}></input>
          </div>
          <div>
            <p>Баланс</p>
            <input type='text' defaultValue={this.props.balance} ref={this.editBalanceRef}></input>
          </div>
          <button onClick={this.saveEditClient}>Сохранить</button>
          </div>
    )
  }
}

export default Edit;