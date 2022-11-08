import React from 'react';

import './BR2JSX.css';

class BR2JSX extends React.Component {

  render() {
    return (
      <div>
        {
          this.state.text.split(/<br\s*\/?>/g).map((el) => {
            return (
              <>
                {el}
                <br/>
              </>
            )
          })
        }
      </div>
    )
  }
}

export default BR2JSX;