import React from 'react';
import { clientEvents } from '../../events';

import './Client.css';
const Client = React.memo(function Client(props) {

  const deleteClient = () => {
    clientEvents.emit("EDeleteClicked", props.client.id)
  }

  const editClient = () => {
    clientEvents.emit("EEditClicked", props.client)
  }

    console.log('Рендер <Client/>')
    
  	return (
      <tr className='Client'>
        <td>{props.client.userSurname}</td>
        <td>{props.client.userName}</td>
        <td>{props.client.userPatronym}</td>
        <td>{props.client.balance}</td>
        {
          props.client.balance > 0
          ?
          <td className='active'>active</td>
          :
          <td className='blocked'>blocked</td>
        }
        <td>
          <button onClick={editClient}>Редактировать</button>
        </td>
        <td>
          <button onClick={deleteClient}>Удалить</button>
        </td>
      </tr>
    )
  });

export default Client;