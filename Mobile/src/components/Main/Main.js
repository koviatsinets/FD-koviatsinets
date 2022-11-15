import React from 'react';

import Client from '../Client/Client';
import New from '../New/New';
import Edit from '../Edit/Edit';

import {clientEvents} from '../../events';

import './Main.css';

class Main extends React.Component {

  state = {
    clients: this.props.clients,
    isShowActiveClients: true,
    isShowBlockedClients: true,
  	isShowNew: false,
    isShowEdit: false,
    editClient: null
  }

  componentDidMount = () => {
    clientEvents.addListener('EDeleteClicked', this.deleteClient);
    clientEvents.addListener('EAddClicked', this.addClient);
    clientEvents.addListener('EEditClicked', this.editClient);
    clientEvents.addListener('ESaveEditClicked', this.saveEditClient);
  };
    
  componentWillUnmount = () => {
  	clientEvents.removeListener('EDeleteClicked', this.deleteClient);
    clientEvents.removeListener('EAddClicked', this.addClient);
    clientEvents.removeListener('EEditClicked', this.editClient);
    clientEvents.removeListener('ESaveEditClicked', this.saveEditClient);
  };

  setIsShowNew = () => {
    this.setState({isShowNew: !this.state.isShowNew})
  }

  setIsShowActiveClients = () => {
    this.setState({isShowActiveClients: false, isShowBlockedClients: true});
  }

  setIsShowBlockedClients = () => {
    this.setState({isShowActiveClients: true, isShowBlockedClients: false});
  }

  setIsShowAllClients = () => {
    this.setState({isShowActiveClients: true, isShowBlockedClients: true});
  }

  deleteClient = (id) => {
    this.setState({clients: this.state.clients.filter(el => el.id !== id)})
    this.render()
  }

  filterClients = () => {
    var res = this.state.clients;
    if (!this.state.isShowActiveClients) {
      res = res.filter(el => el.status)
    }
    if (!this.state.isShowBlockedClients) {
      res = res.filter(el => !el.status)
    }
      res = res.map(el => 
      	<Client key={el.id} id={el.id} userSurname={el.userSurname} userName={el.userName} 
      	userPatronym={el.userPatronym} balance={el.balance} status={el.status}></Client>)
      return res;
  }

  addClient = (obj) => {
  	var maxId = this.state.clients.reduce((acc, curr) => acc.id > curr.id ? acc : curr).id;
    obj.id = maxId + 1;
    var newArr = this.state.clients.slice();
    newArr.push(obj);
    this.setState({clients: newArr, isShowNew: false});
  }

  editClient = (obj) => {
    this.setState({isShowEdit: true, editClient: obj})
  }

  saveEditClient = (obj) => {
    var newArr = this.state.clients.map(el => obj.id == el.id ? obj : el);
    this.setState({clients: newArr, isShowEdit: false})
  }

  render() {

    return (

      <div className='Main'>
        <div>
          <button onClick={this.setIsShowAllClients}>Все</button>
          <button onClick={this.setIsShowActiveClients}>Активные</button>
          <button onClick={this.setIsShowBlockedClients}>Заблокированные</button>
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
          {this.filterClients()}
        	</tbody>
        </table>
        <button onClick={this.setIsShowNew}>Добавить клиента</button>
        {
					this.state.isShowEdit &&
					<Edit id={this.state.editClient.id} userSurname={this.state.editClient.userSurname}
					userName={this.state.editClient.userName} userPatronym={this.state.editClient.userPatronym}
					balance={this.state.editClient.balance} status={this.state.editClient.status}></Edit>
        }
        {
        	this.state.isShowNew && <New></New>
        }
      </div>
    )
  }
}

export default Main;