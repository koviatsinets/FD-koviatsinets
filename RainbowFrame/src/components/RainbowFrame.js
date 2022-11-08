import React from 'react';

import './RainbowFrame.css';

class RainbowFrame extends React.Component {

  render() {
    
    return <div style={{textAlign:"center"}}>
      {this.props.colors.reduce((acc, el)=><div style={{borderColor: el}}>{acc}</div>,this.props.children)}
    </div>
  }
}

export default RainbowFrame;