import React from 'react';

import './DoubleButton.css';

class DoubleButton extends React.Component {

  render() {
    
    return (
      <>
        <input type='button' onClick={this.props.cbPressed} value={this.props.caption1}></input>
        {this.props.children}
        <input type='button' onClick={this.props.cbPressed} value={this.props.caption2}></input>
      </>
    )
  }
}

export default DoubleButton;