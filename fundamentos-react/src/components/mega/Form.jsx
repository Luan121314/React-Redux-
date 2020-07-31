import React from 'react';

const Form = (props)=>{
    return(
        <div>
            <label htmlFor="">Numeros: </label>
            <input type="number" value={props.value} onChange={props.handleChange}  />
            <button onClick={props.handleClick} >Gerar</button>
        </div>
    )
}

export default Form