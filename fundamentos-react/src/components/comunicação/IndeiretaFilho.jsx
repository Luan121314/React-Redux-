import React from 'react';

export default props =>{
    const cb = props.quandoClicar
    const gerarIdade =()=> Math.floor(Math.random()*100)
    const gerarNerd =()=> Math.random() > 0.5
    return(
        <div>
            <div>Filho</div>
            <button onClick={_=>(cb('Zé ruela', gerarIdade(), gerarNerd()))} >Fornecer informações</button>
        </div>
    )
}