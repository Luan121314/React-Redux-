import React from 'react';

const Aleatorio = (props) => {
    const { min, max} = props
    const NumberRandom = Math.floor(Math.random()*(max- min)+min);

    return(
        <div>
            <label htmlFor="">Numero aleatório <strong>{NumberRandom}</strong></label>
        </div>
    )
}



export default Aleatorio