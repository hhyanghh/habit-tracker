import React, {Component} from 'react';
import Habit from './habit';
import HabitAddForm from './HabitAddForm';

class Habits extends Component {
    // state 를 가지고 있고 

    handelIncrement = habit => {
        // consoel.log(`handleIncrement ${habit}`);
        // 
        this.props.onIncrement(habit);
    };

    handelDecrement = habit => {
        this.props.onDecrement(habit);
    };

    handleDelete = habit => {
        this.props.onDelete(habit);
    };

    handleAdd = name => {
        this.props.onAdd(name);
    }


    render() {
        return (
            <>
                <HabitAddForm onAdd={this.handleAdd}/>
                <ul>
            {
                this.props.habits.map(habit => (
                    <Habit
                        key={habit.id}
                        habit={habit}
                        onIncrement={this.handelIncrement}
                        onDecrement={this.handelDecrement}
                        onDelete={this.handleDelete}
                        onAdd={this.handleAdd}
                        onReset={this.handleReset}
                    />
                ))
            }
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}>Reset All</button>
            </>
        )
    }
}

export default Habits;