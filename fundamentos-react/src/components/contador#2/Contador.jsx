import React, { Component } from 'react';
import PassoForm from './PassoForm';
import Display from './Display';
import Botoes from './Botoes';
import './contador.css'

class Contador extends Component {

    state = {
        numeroInicial: this.props.numeroInicial || 0,
        numeroPassos: this.props.numeroInicial || 0
    }

    incremente = () => {
        this.setState({
            numeroInicial: this.state.numeroInicial + this.state.numeroPassos
        })
    }

    decremente = () => {
        this.setState({
            numeroInicial: this.state.numeroInicial - this.state.numeroPassos
        })
    }

    setPassos = (e) => {
        this.setState({ numeroPassos: parseInt(e.target.value) })
    }

    render() {

        return (

            <div className='contador' >
                <h3>Contador</h3>
                <PassoForm changeHandler={this.setPassos} value={this.state.numeroPassos} />
                <Display numero={this.state.numeroInicial} />
                <Botoes decrementar={this.decremente} incrementar={this.incremente} />

                
            </div>
        )
    }
}

export default Contador