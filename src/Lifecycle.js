import React, { Component } from 'react';
import Sublifecycle from './Sublifecycle';

class Lifecycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foods : "Bakso",
            data : {},
            viewSubLifecycle : false
        }
    }

    componentDidMount = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    data : json
                })
            })
    }

    changeFood = newFood => {
        this.setState({
            foods : newFood
        })
    }

    render() {

        console.log("data", this.state.data);
        return (
            <>
                <h2>{this.state.foods}</h2>
                {this.state.viewSubLifecycle && <Sublifecycle changeFood={this.changeFood}/>}
                <button onClick={()=> this.setState({viewSubLifecycle : !this.state.viewSubLifecycle})}>View Sub Menu</button>
            </>
        );
    }
}

export default Lifecycle;