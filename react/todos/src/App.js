import logo from './logo.svg';
import React from 'react';
import { TodoCounter } from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoButton} from './TodoButton';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem'

const todos=[
  {text:'curso react',completed:true},
  {text:'diplomas antiguos',completed:false},
  {text:'conseguir empleo',completed:false}
];

function App() {
  return (
    <React.Fragment>

      <TodoCounter/>

      <TodoSearch/>

      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>

      <TodoButton/>

    </React.Fragment>
  );
}

export default App;
