import React, {Component} from 'react';
import Counter from './Counter2'
class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            count:1,
        }
    }
    increaseCount(){
        this.setState(({count})=>({count:count+1}));
    }
    render() {
        return (
            <div>
                <Counter count={this.state.count} onAdd={this.increaseCount.bind(this)}/>
            </div>
        );
    }
}

export default App;