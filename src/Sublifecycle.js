import React, { Component } from 'react';

class Sublifecycle extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentWillUnmount = () => {
        this.props.changeFood("Sate")
    }

    render() { 
        return ( 
            <>
                <h2>Component sub Lifecycle</h2>
            </>
         );
    }
}
 
export default Sublifecycle;