import React, { useRef } from 'react';
import {clientEvents} from '../../events';

import './Edit.css';


const Edit = props => {

  const editSurnameRef = useRef(null);
  const editNameRef = useRef(null);
  const editPatronymRef = useRef(null);
  const editBalanceRef = useRef(null);

  const saveEditClient = () => {
      let client = {
        id: props.id,
        userSurname: editSurnameRef.current.value,
        userName: editNameRef.current.value,
        userPatronym: editPatronymRef.current.value,
        balance: editBalanceRef.current.value,
      };
      clientEvents.emit("ESaveEditClicked", client)
  };

  console.log('render <Edit></Edit>')

    return (
      <div className='Edit'>
        <p className='Title'>Редактирование клиента:</p>
          <div>
            <p>Фамилия</p>
            <input type='text' defaultValue={props.userSurname} ref={editSurnameRef}></input>
          </div>
          <div>
            <p>Имя</p>
            <input type='text' defaultValue={props.userName} ref={editNameRef}></input>
          </div>
          <div>
            <p>Отчество</p>
            <input type='text' defaultValue={props.userPatronym} ref={editPatronymRef}></input>
          </div>
          <div>
            <p>Баланс</p>
            <input type='text' defaultValue={props.balance} ref={editBalanceRef}></input>
          </div>
          <button onClick={saveEditClient}>Сохранить</button>
          </div>
    )
  }

export default Edit