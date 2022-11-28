import React from 'react';
import Main from './components/Main/Main';

import './App.css';

import clientsArr from './clients.json';

function App() {
    return <Main clients={clientsArr}></Main>
  }

export default App;