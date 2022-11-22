/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react'

import './Controls.css'

export default (props) => {
  console.log('Рендер: <Controls/>')
  const [text, setText] = useState('')
  const [checkbox, setCheckbox] = useState(false)


  const setTextValue = (eo) => {
    setText(eo.target.value)
		props.cbCheckWords({text: eo.target.value, checkbox: checkbox})
  }

  const setCheckboxState = (eo) => {
    setCheckbox(eo.target.checked)
		props.cbCheckWords({text: text, checkbox: eo.target.checked})
  }

  const resetControls = () => {
    setText('');
    setCheckbox(false);
		props.cbCheckWords({text: '', checkbox: false})
  }

  return (
    <div className='Controls'>
      <input type='checkbox' checked={checkbox} onChange={setCheckboxState}></input>
      <input type='text' value={text} onChange={setTextValue}></input>
      <input type='button' value={'Сброс'} onClick={resetControls}></input>
    </div>
  )
}