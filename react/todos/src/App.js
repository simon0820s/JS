import logo from './logo.svg';
import React from 'react';
import { TodoCounter } from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoButton} from './TodoButton';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem'

const defaultTodos=[
  {text:'curso react',completed:false},
  {text:'diplomas antiguos',completed:false},
  {text:'conseguir empleo',completed:false}
];

function App() {
  const[todos,setTodos]=React.useState(defaultTodos);

  const [searchValue,setSearchValue]=React.useState("");

  const completedTodos=todos.filter(todo=>!!todo.completed).length;
  const totalTodos=todos.length;

  let searchedTodos=[];

  if (!searchValue.length>=1){
    searchedTodos=todos;
  }
  else{

    searchedTodos=todos.filter(todo=>{
      const todoText=todo.text.toLowerCase();
      const searchText=searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo=(text)=>{
    const todoIndex=todos.findIndex(todo => todo.text===text);
    const newTodos=[...todos];
    newTodos[todoIndex].completed=true;

    setTodos(newTodos)
  }

  const deleteTodos=(text)=>{
    const todoIndex=todos.findIndex(todo => todo.text===text);
    const newTodos=[...todos];
    newTodos.splice(todoIndex,1);

    setTodos(newTodos)
  }

  return (
    <React.Fragment>

      <TodoCounter
      total={totalTodos}
      completed={completedTodos}
      />

      <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          onComplete={()=>completeTodo(todo.text)}
          onDelete={()=>deleteTodos(todo.text)}
          />
        ))}
      </TodoList>

      <TodoButton/>

    </React.Fragment>
  );
}

export default App;
