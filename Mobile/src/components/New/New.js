import React from 'react';
import PropTypes from 'prop-types';

import './New.css';

class New extends React.Component {

    render() {

        return (
             <div className='New'>
                <p className='Title'>Добавить нового клиента:</p>
                <div>
                    <p>Фамилия</p>
                    <input type='text'></input>
                </div>
                <div>
                    <p>Имя</p>
                    <input type='text'></input>
                </div>
                <div>
                    <p>Отчество</p>
                    <input type='text'></input>
                </div>
                <div>
                    <p>Баланс</p>
                    <input type='text'></input>
                </div>
                <button>Добавить</button>
            </div>
        )

    }

}

export default New;