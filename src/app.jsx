
import React, {Component} from 'react';
import './app.css'
import Habits from './components/habits';
import Habit from "./components/habit";
import NavBar from "./components/navBar";

// TODO
// 1. input 창 + 버튼을 누르면 습관이 추가된다.
// 2. 습관에는 타이틀, count, increase, decrese, delete 버튼이 있다.
// 3. reset all btn 이 있다.
// 4. Navbar가 있다. (타이틀과 전체 count)


class App extends Component {
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
    // console.log(index);
    habits[index].count++;
    this.setState({habits: habits});
    // key와 value가 같으면 생략가능
    //this.setState({habis});
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
    // 전달받은 배열을 제외하고 새로운 배열을 만드는 것

    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({habits: habits});

  };

  handleAdd = name => {
    const habits = [...this.state.habits, {id: Date.now(), name: name, count:0}];
    this.setState({habits});
  }

  handleReset = () => {
    const habits = this.state.habits.map(habit => {
      habit.count = 0;
      return habit;
    });
    this.setState({habits});
  }


  render() {
    return (
          <>
            <NavBar totalCount={this.state.habits.filter(item => item.count > 0).length}></NavBar>
            <Habits
                habits = {this.state.habits}
                onIncrement={this.handelIncrement}
                onDecrement={this.handelDecrement}
                onDelete={this.handleDelete}
                onAdd={this.handleAdd}
                onReset={this.handleReset}

            ></Habits>
          </>
    )
  }
}

export default App;
