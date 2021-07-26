import React, { Component } from 'react'
import Operan from './Operan'

export default class StateProps extends Component {

    constructor(props) {
        super(props)
        this.state = {
            makanan : "Bakso"
        }
    } 
    
    changeMakanan = newMakanan => {
        this.setState({
            makanan : newMakanan
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.makanan}</h2>
                <button onClick={() => this.changeMakanan("Soto")} >Ganti Makanan</button>
                <Operan makanan={this.state.makanan} changeMakanan={this.changeMakanan}/>
            </div>
        )
    }
}
