import React, { Component } from 'react';
import './contador.css'

export default class Contador extends Component {
    state = {
        numeroInicial: this.props.numeroInicial || 0,
        numeroPassos: this.props.numeroPassos || 5
    }

    inc = () => {
        this.setState({
            numeroInicial: this.state.numeroInicial + this.state.numeroPassos
        })
    }

    dec = () => {
        this.setState({
            numeroInicial: this.state.numeroInicial - this.state.numeroPassos
        })
    }

    setPassos = (evento) => {
        this.setState({
            numeroPassos: parseInt(evento.target.value)
        })
    }

    render() {
        return (
            <div className='contador' >
                <h2>Contador</h2>
                <div>
                    <label htmlFor="">Passos:</label>
                    <input value={this.state.numeroPassos} type="Number" onChange={this.setPassos} />
                </div>
                <button onClick={this.inc} >inc</button>
                <span>{this.state.numeroInicial}</span>
                <button onClick={this.dec} >Dec</button>
            </div>
        )
    }
}