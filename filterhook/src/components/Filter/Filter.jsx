/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react'

import Controls from '../Controls/Controls'
import List from '../List/List'

import './Filter.css'

export default props => {
    console.log('Рендер: <Filter/>')
    const [words, setWords] = useState(props.words)
    const [resultWords, setResultWords] = useState(props.words)

    const checkWords = (obj) => {
      
        let result = words.slice();
        if (obj.checkbox) 
            result = result.sort();
        result = result.filter(el=>el.includes(obj.text));
        setResultWords(result)
    }

    return (
        <div className='Filter'>
            <Controls cbCheckWords={checkWords}/>
            <List>{resultWords.join('\n')}</List>
        </div>
    )
};