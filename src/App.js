import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Todo from './components/Todo'
import TodoList from './components/TodoList'

const todos = [
  {id: 1, title: "Clean room"},
  {id: 2, title: "Vacuum"},
]


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to My React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TodoList todos={todos} />
        {/*<Todo todo={todos[1]} /> */}
      </div>
    );
  }
}

export default App;
