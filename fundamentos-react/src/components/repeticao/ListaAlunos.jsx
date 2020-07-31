import React from 'react';
import alunos from '../../data/alunos'

const props = ()=>{
    return(
        <div>
            <ul>
                {
                alunos.map((aluno,i)=>(
                <li key={i} >{i}# - {aluno.nome}-{aluno.nota}</li>
                ))

                }
            </ul>
        </div>

    );
}

export default props