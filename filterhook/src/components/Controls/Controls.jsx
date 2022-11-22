/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from 'react'

import './Controls.css'

export default (props) => {
  console.log('Рендер: <Controls/>')
  const [text, setText] = useState('')
  const [checkbox, setCheckbox] = useState(false)

	useEffect(() => {
		props.cbCheckWords({text: text, checkbox: checkbox})
	}, [text, checkbox])

  const setTextValue = (eo) => {
    setText(eo.target.value)
  }

  const setCheckboxState = (eo) => {
    setCheckbox(eo.target.checked)
  }

  const resetControls = () => {
    setText('');
    setCheckbox(false);
  }

  return (
    <div className='Controls'>
      <input type='checkbox' checked={checkbox} onChange={setCheckboxState}></input>
      <input type='text' value={text} onChange={setTextValue}></input>
      <input type='button' value={'Сброс'} onClick={resetControls}></input>
    </div>
  )
}