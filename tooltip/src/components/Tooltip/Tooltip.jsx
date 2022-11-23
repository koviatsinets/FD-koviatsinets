import React, { useState, useEffect } from 'react';

import './Tooltip.css';

const Tooltip = props => {

    const [visibility, setVisibility] = useState(false);
    const [hover, setHover] = useState(false);

    const display = value => setHover(value);

    useEffect(() => {
      const timer=setTimeout(()=>{
        setVisibility(true);
        console.log('timer start');
      }, props.time);

      return ()=>{
        clearTimeout(timer);
        setVisibility(false);
        console.log("timer stop");
      };
    }, [hover])
    
  return (
    <div className='Tooltip' onMouseOver={() => display(true)} onMouseOut={() => display(false)}>
        {props.children}
        {
        (visibility && hover) && 
        <div className='Message'>{props.tooltip}</div>
        }
    </div>
  )
};

export default Tooltip;
