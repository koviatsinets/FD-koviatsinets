/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

import './List.css'

export default props => {
  console.log('Рендер: <List/>')
  return (
    <div className='List'>{props.children}</div>
  )
}