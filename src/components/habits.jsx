import React, {Component} from 'react';
import Habit from './habit';

class Habits extends Component {
    state = {
        habits: [
            { id: 1, name: 'Reading', count: 0 },
            { id: 2, name: 'Running', count: 0 },
            { id: 3, name: 'Coding', count: 0 }
        ],
    };

    handelIncrement = habit => {
        // console.log(`handleIncrement ${habit.name}`);
        // this.props.habit.count++;
        // 리엑트에서는 state를 직접 수정하는것을 지양하자
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        habits[index].count++;
        this.setState({habits: habits});
    };

    handelDecrement = habit => {
        // console.log(`handleDecrement ${habit.name}`);
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        const count = habits[index].count -1;

        habits[index].count = count < 0 ? 0 : count;

        this.setState({habits: habits});
    };

    handleDelete = habit => {
        // console.log(`handleDelete ${habit.name}`);
        // 전달받은 배열을 삭제하고 새로 만드는 것

        const habits = this.state.habits.filter(item => item.id !== habit.id);
        this.setState({habits: habits});

    };


    render() {
        return <ul>
            {
                this.state.habits.map(habit => (
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