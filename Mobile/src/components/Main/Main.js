import React from 'react';

import Client from '../Client/Client';
import New from '../New/New';

import {clientEvents} from '../../events';

import './Main.css';


class Main extends React.Component {

    state = {
        resultClients: this.props.clients,
        isShowNew: false,
    }

    componentDidMount = () => {
        clientEvents.addListener('EDeleteClicked', this.deleteClient);
        // clientEvents.addListener('EFreeAnswerTextChanged',this.freeAnswerTextChanged);
      };
    
      componentWillUnmount = () => {
        clientEvents.removeListener('EDeleteClicked', this.deleteClient);
        // voteEvents.removeListener('EFreeAnswerTextChanged',this.freeAnswerTextChanged);
      };

    setIsShowNew = () => {
        this.setState({isShowNew: !this.state.isShowNew})
    }

    filterClients = (value) => {
        if (value === null) {
            this.setState({resultClients: this.props.clients})
        } else {
            this.setState({resultClients: this.props.clients.filter(el => el.status === value)})
        }
    }

    deleteClient = (value) => {
        this.setState({resultClients: this.state.resultClients.filter(el => el.id !== value)})
    }

    render() {
        console.log(this.props)
        let result = this.state.resultClients.map(el => 
            <Client key={el.id} id={el.id} userSurname={el.userSurname} userName={el.userName} 
            userPatronym={el.userPatronym} balance={el.balance} status={el.status}></Client>)

        return (
            <div className='Main'>
                <div>
                    <button onClick={() => this.filterClients(null)}>Все</button>
                    <button onClick={() => this.filterClients(true)}>Активные</button>
                    <button onClick={() => this.filterClients(false)}>Заблокированные</button>
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
                    {result}
                  </tbody>
                </table>
                <button onClick={this.setIsShowNew}>Добавить клиента</button>
                {
                    this.state.isShowNew && <New></New>
                }
            </div>
        )
    }

}

export default Main;