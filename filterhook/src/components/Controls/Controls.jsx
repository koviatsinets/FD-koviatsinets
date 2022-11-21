/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useRef } from 'react'

import './Controls.css'

export default (props) => {
  console.log('Рендер: <Controls/>')
  const [text, setText] = useState('')
  const [checkbox, setCheckbox] = useState(false)

  const textRef=useRef(null);
  const checkboxRef=useRef(false);

  const setTextValue = () => {
    setText(textRef.current.value)
		props.cbCheckWords({text: textRef.current.value, checkbox: checkbox})
  }

  const setCheckboxState = () => {
    setCheckbox(!checkbox)
		props.cbCheckWords({text: text, checkbox: !checkbox})
  }

  const resetControls = () => {
    setText('');
    setCheckbox(false);
		props.cbCheckWords({text: '', checkbox: false})
  }

  return (
    <div className='Controls'>
      <input type='checkbox' checked={checkbox} onChange={setCheckboxState} ref={checkboxRef}></input>
      <input type='text' value={text} onChange={setTextValue} ref={textRef}></input>
      <input type='button' value={'Сброс'} onClick={resetControls}></input>
    </div>
  )
}