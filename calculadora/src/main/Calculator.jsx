import React, { Component } from 'react';
import './Calculator.css';
import Button from '../components/Button';
import Display from '../components/Display';


const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}


class Calculator extends Component {
    state = { ...initialState };


    clearMemory() {
        this.setState({ ...initialState })
    }

    setOperator(op) {
        if (this.state.current === 0) {
            this.setState({
                operation: op, current: 1, clearDisplay: true
            })
        } else {
            const equals = op === '=';
            const currentoperation = this.state.operation
            const values = [...this.state.values];
            try {
                values[0] = eval(`${values[0]} ${currentoperation}${values[1]}`);
            } catch (error) {
                values[0] = this.state.values[0];
            }
            values[1] = 0;
            this.setState({
                displayValue: values[0],
                operation: equals ? null : op,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })

            console.log(values)
        }
    }

    addDigit(n) {
        if (n === '.' && this.state.displayValue.includes('.')) {
            return
        }
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n;
        this.setState({
            displayValue, clearDisplay: false
        })

        if (n !== '.') {
            const i = this.state.current
            const newValues = parseFloat(displayValue);
            const values = [...this.state.values]
            values[i] = newValues;
            this.setState({ values })
            console.log(values);
        }

    }

    render() {
        const addDigit = n => this.addDigit(n);
        const setOperator = op => this.setOperator(op);

        return (
            <div className='calculator' >
                <Display value={this.state.displayValue} />
                <Button label={'AC'} click={() => { this.clearMemory() }} triple />
                <Button label={'/'} click={setOperator} operation />
                <Button label={'7'} click={addDigit} />
                <Button label={'8'} click={addDigit} />
                <Button label={'9'} click={addDigit} />
                <Button label={'*'} click={setOperator} operation />
                <Button label={'4'} click={addDigit} />
                <Button label={'5'} click={addDigit} />
                <Button label={'6'} click={addDigit} />
                <Button label={'-'} click={setOperator} operation />
                <Button label={'1'} click={addDigit} />
                <Button label={'2'} click={addDigit} />
                <Button label={'3'} click={addDigit} />
                <Button label={'+'} click={setOperator} operation />
                <Button label={'0'} click={addDigit} double />
                <Button label={'.'} click={addDigit} />
                <Button label={'='} />
            </div>
        )
    }
}


export default Calculator