import React, {Component} from 'react';

class classCounter extends Component{
    constructor(props) {
        super(props);
        this.state = {
        count: 0
        };
    }
    
    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    decrement = () => {
        if(this.state.count > 0) {
            this.setState({ count: this.state.count - 1 });
        }
    };

    render() {
        return (
        <div>
            <h1 className='border-2 border-purple-500 rounded-2xl py-2 my-4 font-light flex items-center justify-center text-2xl bg-black' >Count: {this.state.count}</h1>
            <button onClick={this.increment} className='border-2 p-3 me-2'>Increment</button>
            <button onClick={this.decrement} className='border-2 p-3 me-2'>Decrement</button>
        </div>
        );
    }
}

export default classCounter;