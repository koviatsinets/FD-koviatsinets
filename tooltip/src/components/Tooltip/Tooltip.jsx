import React, { useState } from 'react';

import './Tooltip.css';

const Tooltip = props => {

    const [visibility, setVisibility] = useState(false);

    const display = value => setVisibility(value);
  
    const tooltipStyle = {animationDuration: props.time + 's'}
    
  return (
    <div className='Tooltip' onMouseOver={() => display(true)} onMouseOut={() => display(false)}>
        {props.children}
        {
        visibility && 
        <div className='Message' style={tooltipStyle}>{props.tooltip}</div>
        }
    </div>
  )
};

export default Tooltip;