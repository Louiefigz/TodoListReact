import React from 'react'

import Todo from './Todo'

class TodoList extends React.Component {
  render() {
    console.log(this.props)
    const listTodos = this.props.todos.map(todo => <li key={todo.id}><Todo todo={todo} /></li>)
    return (
      <div>
        <h1> My Todos </h1>
        <ul>
        {listTodos}
        </ul>
      </div>
    )
  }
}

export default TodoList
