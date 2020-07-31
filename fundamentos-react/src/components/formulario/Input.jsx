import React, { useState } from 'react';
import './input.css';


export default props => {
    const [valor, setValor] = useState('Inicial')

    function quandoMudar(e) {
        console.log(e.target.value)
        setValor(e.target.value)

    }

    return (
        <div className='Input' >
            <input value={valor} onChange={quandoMudar} />
        </div>
    )
}