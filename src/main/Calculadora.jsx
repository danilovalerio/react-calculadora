import React, { Component } from 'react'
import './Calculadora.css'

import Button from '../components/Button';
import Display from '../components/Display';

// constante que trata do estado inicial
const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0 
}

export default class Calculadora extends Component {
    //state recebe um clone do estado inicial da aplicação
    state = { ...initialState}
    
    constructor(props) {
        super(props)

        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }


    clearMemory() {
        this.setState({ ...initialState })
        // console.log('limpar')
    }

    setOperation(op){
        console.log(op)
    }

    addDigit(n){
        //se usuário digitou ponto e tiver ponto incluso saia da função e não faça + nada
        if(n === '.' && this.state.displayValue.includes('.')){
            return
        }

        //para evitar 0 a esquerda
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n

        this.setState({displayValue, clearDisplay: false})

        if (n !== '.'){
            const i = this.state.current //indice do valor que está alterando
            const newValue = parseFloat(displayValue) //converte para float
            const values = [...this.state.values] //clonou os valores no state
            values[i] = newValue //alterou o valor atual do indice que pode ser 0 ou 1 
            this.setState({values}) //substituiu o novo valor dentro do state
            console.log(values)
        }
    }
    
    render(){
        return(
            <div className="calculadora">
                <Display value={this.state.displayValue}/>
                <Button label="AC" click={this.clearMemory} triple/>
                <Button label="/" click={this.setOperation} operation/>
                <Button label="7" click={this.addDigit} />
                <Button label="8" click={this.addDigit}/>
                <Button label="9" click={this.addDigit}/>
                <Button label="*" click={this.setOperation} operation/>
                <Button label="4" click={this.addDigit}/>
                <Button label="5" click={this.addDigit}/>
                <Button label="6" click={this.addDigit}/>
                <Button label="-" click={this.setOperation} operation/>
                <Button label="1" click={this.addDigit}/>
                <Button label="2" click={this.addDigit}/>
                <Button label="3" click={this.addDigit}/>
                <Button label="+" click={this.setOperation} operation/>
                <Button label="0" click={this.addDigit} double/>
                <Button label="." click={this.addDigit}/>
                <Button label="=" click={this.setOperation} operation/>
            </div>
        )
    }
}