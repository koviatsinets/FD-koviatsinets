import React from 'react';

import './RainbowFrame.css';

class RainbowFrame extends React.Component {

  render() {
    var arr = this.props.colors.slice()
    arr.unshift(this.props.children)
    var res = arr.reduce((acc, el) => <div style={{border:`solid 5px ${el}`, padding:"5px"}}>{acc}</div>)

    return <div style={{textAlign:"center"}}>{res}</div>
  }
}

export default RainbowFrame;