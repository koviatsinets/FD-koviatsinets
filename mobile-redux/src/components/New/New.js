import React, { useRef } from 'react';
import {clientEvents} from '../../events';

import './New.css';

const New = props => {

  const newSurnameRef= useRef(null);
  const newNameRef= useRef(null);
  const newPatronymRef= useRef(null);
  const newBalanceRef= useRef(null);

  const addNewClient = () => {   
    let client = {
      userSurname: newSurnameRef.current.value,
      userName: newNameRef.current.value,
      userPatronym: newPatronymRef.current.value,
      balance: newBalanceRef.current.value,
    };
    clientEvents.emit("EAddClicked", client)
  };

  console.log('render <New/>')
    
  	return (
      <div className='New'>
        <p className='Title'>Добавление нового клиента:</p>
        <div>
          <p>Фамилия</p>
          <input type='text' defaultValue={''} ref={newSurnameRef}></input>
        </div>
        <div>
          <p>Имя</p>
          <input type='text' defaultValue={''} ref={newNameRef}></input>
        </div>
        <div>
          <p>Отчество</p>
          <input type='text' defaultValue={''} ref={newPatronymRef}></input>
        </div>
        <div>
          <p>Баланс</p>
        	<input type='text' defaultValue={''} ref={newBalanceRef}></input>
        </div>
        <button onClick={addNewClient}>Добавить</button>
      </div>
    )
  }

export default New;