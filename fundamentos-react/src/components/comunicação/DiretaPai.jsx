import React from 'react';
import DiretaFilho from './DiretaFilho';
export default props =>{
    return(
        <div>
            <DiretaFilho nome='Abiscissa' idade={39} nerd={true} />
            <DiretaFilho nome='Hipotenusa' idade={35} nerd={false} />
        </div>
    )
}