import React from 'react';

const PassoForm =(props)=>{
    return(<div>
        <label htmlFor="">Passos: </label>
        <input type="number" value={props.value}  onChange={props.changeHandler} />
    </div>)
}

export default PassoForm