import React, {Component} from 'react';

class Habit extends Component {
    handelIncrement = () => {
        // state object 안에 있는 count를 증가 한 뒤 state를 업데이트 해야 함.
        this.props.onIncrement(this.props.habit);
        // console.log(event);
    };

    handelDecrement = () => {
        this.props.onDecrement(this.props.habit);
    };

    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    };

    render() {
        const {name, count} = this.props.habit;
        return (
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button
                    className="habit-button habit-increase"
                    onClick={this.handelIncrement}
                >
                    <i className="fa-solid fa-square-plus"></i>
                </button>
                <button
                    className="habit-button habit-decrease"
                    onClick={this.handelDecrement}
                >
                    <i className="fa-solid fa-square-minus"></i>
                </button>
                <button
                    className="habit-button habit-delete"
                    onClick={this.handleDelete}
                >
                    <i className="fa-solid fa-trash-can"></i>
                </button>
            </li>
        );
    }
}

export default Habit;