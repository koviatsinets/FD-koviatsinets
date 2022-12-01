import React from 'react';
import Main from './components/Main/Main';

import { Provider } from 'react-redux';
import { store } from './redux/store'

import './App.css';

// import clientsArr from './clients.json';

function App() {
    return (
      <Provider store={store}>
         <Main></Main>
      </Provider>
    )
   
  }

export default App;

