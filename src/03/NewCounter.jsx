import React, {Component} from 'react';

class NewCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {newCount: props.count}
        this.increaseCount = this.increaseCount.bind(this);
        this.decreaseCount = this.decreaseCount.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        const {count} = props.count;
        return {
            count,
            newCount: count === state.count
                ? state.newCount
                : count,
        };
    }

    increaseCount() {
        this.setState(({newCount}) => ({
            newCount: newCount + 1,
        }))
    }

    decreaseCount() {
        this.setState(({newCount}) => ({
            newCount: newCount - 1,
        }))
    }

    render() {
        return (
            <div>
                현재 카운트: {this.state.newCount}<br/>
                <button onClick={this.increaseCount}>카운트 증가</button>
                <button onClick={this.decreaseCount}>카운트 감소</button>
            </div>
        );
    }
}

export default NewCounter;