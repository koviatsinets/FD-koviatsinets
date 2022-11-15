import React from 'react';
import {clientEvents} from '../../events';

import './Client.css';

class Client extends React.Component {

    deleteClient = () => {
        clientEvents.emit("EDeleteClicked", this.props.id)
    }

    render() {

        return (
            <tr className='Client'>
                <td>{this.props.userSurname}</td>
                <td>{this.props.userName}</td>
                <td>{this.props.userPatronym}</td>
                <td>{this.props.balance}</td>
                {
                    this.props.status
                    ?
                    <td className='active'>active</td>
                    :
                    <td className='blocked'>blocked</td>
                }
                <td>
                    <button>Редактировать</button>
                </td>
                <td>
                    <button onClick={this.deleteClient}>Удалить</button>
                </td>
            </tr>
        )

    }
}

export default Client;