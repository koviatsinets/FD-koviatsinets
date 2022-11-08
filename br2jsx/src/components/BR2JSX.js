import React from 'react';

import './BR2JSX.css';

class BR2JSX extends React.Component {

  state = {
    text: this.props.text,
  };

  render() {
   
    return (
      <div>
        {
          this.state.text.split(/<br\s*\/?>/g).map((el, i) => {
            return (
              <span key={i}>
                {el}
                <br/>
              </span>
            )
          })
        }
      </div>
    );
  };
};

export default BR2JSX;

// т.к. конструкция "<> </>" не поддерживает ключи, заменил на span