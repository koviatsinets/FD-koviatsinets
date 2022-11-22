import React, { useState } from 'react'

import './Tooltip.css'

const Tooltip = props => {

    const [visibility, setVisibility] = useState(false);

    const display = value => setVisibility(value)

  return (
    <div className='Tooltip' onMouseOver={() => display(true)} onMouseOut={() => display(false)}>
        {props.children}
        {
        visibility && 
        <div className='Message'>{props.tooltip}</div>
        }
    </div>
  )
}

export default Tooltip