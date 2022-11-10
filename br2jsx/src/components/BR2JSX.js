import React from 'react';

import './BR2JSX.css';

class BR2JSX extends React.Component {

  render() {
   
    var newArr = []
    var arr = this.props.text.split(/<br\s*\/?>/g);

    for (let i = 0; i <= arr.length - 1; i++) {
      newArr.push(arr[i]);
      if (i !== arr.length - 1) {
      newArr.push(<br key={i}/>)
      }
    }

    return (
      <div>{newArr}</div>
    );
  };
};

export default BR2JSX;