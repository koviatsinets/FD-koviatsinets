import React from 'react';
import {clientEvents} from '../../events';

import './New.css';

class New extends React.Component {

  newSurnameRef = React.createRef();
  newNameRef = React.createRef();
  newPatronymRef = React.createRef();
  newBalanceRef = React.createRef();

  addNewClient = () => {   
    let client = {
      userSurname: this.newSurnameRef.current.value,
      userName: this.newNameRef.current.value,
      userPatronym: this.newPatronymRef.current.value,
      balance: this.newBalanceRef.current.value,
    };
    clientEvents.emit("EAddClicked", client)
  };
    
  render() {

  	return (
      <div className='New'>
        <p className='Title'>Добавление нового клиента:</p>
        <div>
          <p>Фамилия</p>
          <input type='text' defaultValue={''} ref={this.newSurnameRef}></input>
        </div>
        <div>
          <p>Имя</p>
          <input type='text' defaultValue={''} ref={this.newNameRef}></input>
        </div>
        <div>
          <p>Отчество</p>
          <input type='text' defaultValue={''} ref={this.newPatronymRef}></input>
        </div>
        <div>
          <p>Баланс</p>
        	<input type='text' defaultValue={''} ref={this.newBalanceRef}></input>
        </div>
        <button onClick={this.addNewClient}>Добавить</button>
      </div>
    )
  }
}

export default New;