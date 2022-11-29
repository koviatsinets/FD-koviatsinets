import React, { useState, useEffect } from 'react';

import Client from '../Client/Client';
import New from '../New/New';
import Edit from '../Edit/Edit';

import { clientEvents } from '../../events';
import { useDispatch, useSelector } from 'react-redux';

import './Main.css';

const Main = props => {

  const dispatch = useDispatch();
  const clients = useSelector( state => state.clients );

  const [isShowActiveClients, setIsShowActiveClients] = useState(true);
  const [isShowBlockedClients, setIsShowBlockedClients] = useState(true);
  const [isShowNew, setIsShowNew] = useState(false);
  const [isShowEdit, setIsShowEdit] = useState(false);
  const [editClient, setEditClient] = useState(null);

  useEffect(() => {
    clientEvents.addListener('EDeleteClicked', deleteClient);
    clientEvents.addListener('EAddClicked', addClient);
    clientEvents.addListener('EEditClicked', showEditClientMenu);
    clientEvents.addListener('ESaveEditClicked', saveEditClient);
    return () => {
      clientEvents.removeListener('EDeleteClicked', deleteClient);
      clientEvents.removeListener('EAddClicked', addClient);
      clientEvents.removeListener('EEditClicked', showEditClientMenu);
      clientEvents.removeListener('ESaveEditClicked', saveEditClient);
  }});

  const showAllClients = () => {
    setIsShowActiveClients(true)
    setIsShowBlockedClients(true)
  }

  const showActiveClients = () => {
    setIsShowActiveClients(false)
    setIsShowBlockedClients(true)
  }

  const showBlockedClients = () => {
    setIsShowActiveClients(true)
    setIsShowBlockedClients(false)
  }

 const filterClients = () => {
    var res = clients;
    if (!isShowActiveClients) {
      res = res.filter(el => el.balance > 0)
    }
    if (!isShowBlockedClients) {
      res = res.filter(el => el.balance < 0)
    }
    res = res.map(el => 
      <Client key={el.id} client={el}></Client>
    )
    return res;
  }

  // const memoizedValue = useMemo(
  //   () => clients.map(el => 
  //     <Client key={el.id} client={el}></Client>),
  //   [clients]
  // );

  const deleteClient = (id) => {
    dispatch( {
      type: "delete_client",
      clientId: id, // we can pass some additional information
    } );
  }

  const saveEditClient = (obj) => {
    setIsShowEdit(false)
    dispatch( {
      type: "edit_client",
      clientInfo: obj, // we can pass some additional information
    } );
  }

  const showEditClientMenu = (obj) => {
    setIsShowEdit(!isShowEdit)
    setEditClient(obj)
  }

  const showAddClientMenu = () => {
    setIsShowNew(!isShowNew)
  }

  const addClient = (obj) => {
    setIsShowNew(false)
    dispatch( {
      type: "add_client",
      clientAddInfo: obj, // we can pass some additional information
    } );
  }

  console.log('Рендер <Main/>')

    return (
      <div className='Main'>
        <div>
          <button onClick={showAllClients}>Все</button>
          <button onClick={showActiveClients}>Активные</button>
          <button onClick={showBlockedClients}>Заблокированные</button>
        </div>
        <table>
        	<thead>
						<tr>
							<th>Фамилия</th>
							<th>Имя</th>
							<th>Отчество</th>
							<th>Баланс</th>
							<th>Статус</th>
							<th>Редактировать</th>
							<th>Удалить</th>
						</tr>
					</thead>
        	<tbody>
          {filterClients()}
        	</tbody>
        </table>
        <button onClick={showAddClientMenu}>Добавить клиента</button>
        {
					isShowEdit &&
					<Edit id={editClient.id} userSurname={editClient.userSurname}
					userName={editClient.userName} userPatronym={editClient.userPatronym}
					balance={editClient.balance}></Edit>
        }
        {
        	isShowNew && <New></New>
        }
      </div>
    )
  }

export default Main;