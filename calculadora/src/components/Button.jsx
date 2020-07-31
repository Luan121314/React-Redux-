import React from 'react';
import './Button.css';

const Button = (props) => {
    let classes = 'button ';
    classes += props.operation ? 'operation' : '';
    classes += props.double ? 'double' : '';
    classes += props.triple ? 'triple' : '';

    // console.log(classes)

    return (
        <button 
        className={classes} 
        onClick={e=> props.click && props.click(e.target.innerHTML)}
        >{props.label}</button>
    )
}
export default Button;