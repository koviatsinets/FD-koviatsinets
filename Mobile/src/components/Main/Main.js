import React from 'react';
import PropTypes from 'prop-types';

import './Main.css';

import Client from '../Client/Client';
import New from '../New/New';

class Main extends React.Component {

    static propTypes = {

    }

    state = {
        resultClients: this.props.clients,
        isShowNew: false,
    }

    setIsShowNew = () => {
        this.setState({isShowNew: !this.state.isShowNew})
    }

    setShowActive = () => {
        let arr = this.props.clients.filter(el => el.status)
        this.setState({resultClients: arr})
    }

    setShowBlocked = () => {
        let arr = this.props.clients.filter(el => !el.status)
        this.setState({resultClients: arr})
    }

    setShowAll = () => {
        this.setState({resultClients: this.props.clients})
    }

    render() {

        let result = this.state.resultClients.map(el => 
            <Client key={el.id} userSurname={el.userSurname} userName={el.userName} 
            userPatronym={el.userPatronym} balance={el.balance} status={el.status}></Client>)

        return (
            <div className='Main'>
                <div>
                    <button onClick={this.setShowAll}>Все</button>
                    <button onClick={this.setShowActive}>Активные</button>
                    <button onClick={this.setShowBlocked}>Заблокированные</button>
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