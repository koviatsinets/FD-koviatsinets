import React from 'react';
import BR2JSX from './components/BR2JSX'

import './App.css';

class App extends React.Component {

  render() {
    let text="первый<br>второй<br/>третий<br />последний";
    return <BR2JSX text={text}/>;
  }
}

export default App;
