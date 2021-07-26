import React, { Component } from 'react';

class Operan extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { makanan, changeMakanan} = this.props
        return ( 
            <>
                <h2>Operan state yang menjadi props {makanan}</h2>
                <button onClick={()=>changeMakanan("Bakso")}>changeMakanan</button>
            </>
         );
    }
}
 
export default Operan;