import React from 'react';
import Main from './components/Main/Main';

import './App.css';

import clientsArr from './clients.json';

class App extends React.Component {

  render() {

    return <Main clients={clientsArr}></Main>
  }
}

export default App;


//     {"id": 5, "userSurname": "Александров", "userName": "Александр",  "userPatronym": "Александрович", "balance": -280},
//     {"id": 6, "userSurname": "Алексеев", "userName": "Алексей",  "userPatronym": "Алексеевич", "balance": 120},
//     {"id": 7, "userSurname": "Антонов", "userName": "Антон",  "userPatronym": "Антонович", "balance": 220},
//     {"id": 8, "userSurname": "Сергеев", "userName": "Сергей",  "userPatronym": "Сергеевич", "balance": -80},
//     {"id": 9, "userSurname": "Константинов", "userName": "Константин",  "userPatronym": "Константинович", "balance": 300},
//     {"id": 10, "userSurname": "Евгеньев", "userName": "Евгений",  "userPatronym": "Евгеньевич", "balance": 150}