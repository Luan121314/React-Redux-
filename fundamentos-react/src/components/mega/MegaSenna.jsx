import React, { useState } from 'react';
import Form from './Form';

const MegaSenna = (props) => {
    const [value, setValue] = useState(5);
    const [numValue, setNumValue] = useState([])

    const handleValue = (e) => {
        setValue(e.target.value)
    }
    const handleGenerate = () => {
        const {min,max} = props;
        const numbersDrawn = Array(parseInt(value)).fill(0);
        numbersDrawn.map((num, index) => {
           return numbersDrawn[index] = generateNumberRandom(max || 100, min || 1 ,numbersDrawn)
            
        })
        setNumValue(numbersDrawn.sort((a,b)=> a-b))
    }
    const generateNumberRandom = (max, min, array) => {
        const range = (max-min)+min;
        const length = array.length;
        if(length > max ) max = length +1;
        let numberRandom = Math.floor(Math.random() * range) ;
        return array.includes(numberRandom) ? generateNumberRandom(max, min, array) : numberRandom
    }

    return (
        <div>
            <h2>Desafio da MegaSenna</h2>
            <Form value={value} handleChange={handleValue} handleClick={handleGenerate} />
            <span>Numeros da Mega: <strong>{numValue.map(value => value).join(', ')}</strong></span>
        </div>
    )
}


export default MegaSenna;