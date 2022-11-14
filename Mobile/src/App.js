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
