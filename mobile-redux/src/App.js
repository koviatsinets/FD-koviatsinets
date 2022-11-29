import React from 'react';
import Main from './components/Main/Main';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import clientsReducer from './redux/clientsReducer';

import './App.css';

import clientsArr from './clients.json';


const store=createStore(clientsReducer);

function App() {
    return (
      <Provider store={store}>
         <Main clients={clientsArr}></Main>
      </Provider>
    )
   
  }

export default App;

