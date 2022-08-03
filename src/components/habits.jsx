import React, {Component} from 'react';
import Habit from './habit';

class Habits extends Component {

    handelIncrement = habit => {
        this.props.onIncrement(habit);
    };

    handelDecrement = habit => {
        this.props.onDecrement(habit);
    };

    handleDelete = habit => {
        this.props.onDelete(habit);
    };


    render() {
        return <ul>
            {
                this.props.habits.map(habit => (
                    <Habit
                        key={habit.id}
                        habit={habit}
                        onIncrement={this.handelIncrement}
                        onDecrement={this.handelDecrement}
                        onDelete={this.handleDelete}
                    />
                ))
            }
        </ul>;
    }
}

export default Habits;