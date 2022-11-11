import React from 'react';

function withRainbowFrame(color) {
    return function(Comp) {
      return props => color.reduce((acc, el)=><div style={{borderColor: el}}>{acc}</div>,
        <Comp {...props} />)
      ;
    };
}

export { withRainbowFrame };