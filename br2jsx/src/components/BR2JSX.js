import React from 'react';
import PropTypes from 'prop-types';

import './BR2JSX.css';

class BR2JSX extends React.Component {

  static propTypes = {
    text: PropTypes.string.isRequired
  }

  state = {
    arr: this.props.text
  }

  constructor(props) {
    super(props);
    var newArr = []
    var arr = this.state.arr.split(/<br\s*\/?>/g);
    for (let i = 0; i <= arr.length - 1; i++) {
      newArr.push(arr[i]);
      if (i !== arr.length - 1) {
      newArr.push(<br key={i}/>)
      }
    }
    this.state.arr = newArr;
  }

  render() {
    console.log(this.props)
    return  <div>{this.state.arr}</div>;
  };
};

export default BR2JSX;