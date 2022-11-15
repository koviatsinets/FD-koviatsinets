import React from 'react';
import PropTypes from 'prop-types';

import './Main.css';

import Client from '../Client/Client';
import New from '../New/New';

class Main extends React.Component {

    static propTypes = {

    }

    state = {
        clients: this.props.clients
    }

    render() {

        console.log(this.props.clients)

        let result = this.state.clients.map(el => 
            <Client key={el.id} userSurname={el.userSurname} userName={el.userName} 
            userPatronym={el.userPatronym} balance={el.balance} status={el.status}></Client>)

        return (
            <div className='Main'>
                <div>
                    <button>Все</button>
                    <button>Активные</button>
                    <button>Заблокированные</button>
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
                <button>Добавить клиента</button>
                <New></New>
            </div>
        )
    }

}

export default Main;