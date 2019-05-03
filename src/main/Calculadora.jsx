import React, { Component } from 'react'
import './Calculadora.css'

import Button from '../components/Button'

export default class Calculadora extends Component {
    render(){
        return(
            <div className="calculadora">
                <Button/>
                <Button/>
                <Button/>
                <Button/>
                <Button/>
                <Button/>
                <Button/>
                <Button/>

            </div>
        )
    }
}