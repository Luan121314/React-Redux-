import React from 'react';

const Botoes = (props) => {
    return (
        <div>
            <button onClick={props.decrementar} >Dec</button>
            <button onClick={props.incrementar} >Inc</button>
        </div>
    )
}


export default Botoes