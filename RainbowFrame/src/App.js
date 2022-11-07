import React from 'react';
import RainbowFrame from './components/RainbowFrame'

import './App.css';

class App extends React.Component {
  
  state = {

  };

  render() {
    let colors = ['red', 'orange', 'yellow', 'green', '#00BFFF', 'blue', 'purple'];
    return (
        <RainbowFrame colors={colors}>Hello!</RainbowFrame>
    )
  }
}

export default App;
