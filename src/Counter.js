import React, { Component } from 'react';
import PropTypes from "prop-types";


const Problematic = () => {
    throw (new Error('버그가 나타났다!'));
    return (
        <div>
        </div>
    );
};

class Counter extends Component {
    state = {
        number: 0,
        error: false
    }

    

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    componentWillMount() {
        console.log('componentWillMount (deprecated)');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        // 5 의 배수라면 리렌더링 하지 않음
        console.log(nextProps.name + ' shouldComponentUpdate : ' + nextState.number);
        if (nextState.number % 5 === 0) return false;
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }

    handleIncrease = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    handleDecrease = () => {
        this.setState({
            number: this.state.number - 1
        });
    }

    componentDidCatch(error, info) {
        this.setState({
            error: true
        });
    }

    render() {
        return (
            <div>
                <h1>Conunter</h1>
                <div>값: {this.state.number}</div>
                {this.state.number === 4 && <Problematic />}
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}

Counter.propTypes = {
    name: PropTypes.string.isRequired
};

export default Counter;