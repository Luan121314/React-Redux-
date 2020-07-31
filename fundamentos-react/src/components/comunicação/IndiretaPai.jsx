import React, { useState } from 'react';
import IndiretaFilho from './IndeiretaFilho';

export default props => {
    const [nome, setNome] = useState('?');
    const [idade, setIdade] = useState(0);
    const [nerd, setNerd] = useState(false);

    function fornecerInformações(nome, idade, nerd) {
        setNome(nome);
        setIdade(idade);
        setNerd(nerd)
    }


    return (
        <div>
            <div>
                <span>{nome}</span> /
                <span>{idade}</span> / 
                <span>{nerd ? 'verdadeiro' : 'falso '}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformações} ></IndiretaFilho>
        </div>
    )
}