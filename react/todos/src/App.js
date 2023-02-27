import logo from './logo.svg';
import './App.css';
import React from 'react';
import { TodoCounter } from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoButton} from './TodoButton';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem'

const todos=[
  {text:'cut onions',completed:false},
  {text:'go to school',completed:false},
  {text:'add decorators',completed:false}
];

function App() {
  return (
    <React.Fragment>

      <TodoCounter/>

      <TodoSearch/>

      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text}/>
        ))}
      </TodoList>

      <TodoButton/>

    </React.Fragment>
  );
}

export default App;
