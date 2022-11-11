import React from 'react';
import DoubleButton from './components/DoubleButton'
import { withRainbowFrame } from './components/widthRainbowFrame';

import './App.css';

class App extends React.Component {
  
  state = {

  };

  pressed = (num) => {
    alert(num) 
  }

  render() {
    let colors = ['red', 'orange', 'yellow', 'green', '#00BFFF', 'blue', 'purple'];
    let FramedDoubleButton=withRainbowFrame(colors)(DoubleButton);
    
    return (
      <FramedDoubleButton caption1="Мой" caption2="милы" cbPressed={this.pressed}>родны кут, як ты мне</FramedDoubleButton>
    )
  }
}

export default App;
