import React from 'react';
import PropTypes from 'prop-types';

import './Client.css';

class Client extends React.Component {

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
                    <button>Удалить</button>
                </td>
            </tr>
        )

    }
}

export default Client;