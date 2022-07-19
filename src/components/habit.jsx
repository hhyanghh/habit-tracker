import React, {Component} from 'react';

class Habit extends Component {
    state = {
        count: 0,
    };

    handelIncrement = () => {
        // state  오브젝트 안에 있는 count를 증가 한 뒤 state를 업데이트 해야 한다.
        this.setState({count: this.state.count + 1});
    };

    handelDecrement = () => {
        const count = this.state.count -1;
        this.setState({count: count < 0 ? 0 : count });
    };

    render() {
        return (
            <li className="habit">
                <span className="habit-name">Reading</span>
                <span className="habit-count">{this.state.count}</span>
                <button className="habit-button habit-increase" onClick={this.handelIncrement}>
                    <i className="fa-solid fa-square-plus"></i>
                </button>
                <button className="habit-button habit-decrease" onClick={this.handelDecrement}>
                    <i className="fa-solid fa-square-minus"></i>
                </button>
                <button className="habit-button habit-delete">
                    <i className="fa-solid fa-trash-can"></i>
                </button>
            </li>
        );
    }
}

export default Habit;