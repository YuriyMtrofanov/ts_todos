import React, { useState } from "react";
import "materialize-css/dist/css/materialize.css";
import 'material-icons/iconfont/material-icons.css';
import NavBar from "./components/NavBar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { NewTodoType } from "./components/interfaces";

const App: React.FunctionComponent = () => {
  const [todos, setTodos] = useState<NewTodoType[]>([]); // или моюжно использовать <Array<NewTodoType>>

  const handleAdd = (data: string) => {
    const newTodo: NewTodoType = {
      title: data,
      id: Date.now(),
      completed: false
    };
    setTodos(prevState => [newTodo, ...prevState]);
  };
  
  const handleToggle = (id: number) => {
    setTodos(prevState =>
      prevState.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
    }));
  };

  const handleDelete = (id: number): void => {
    const remove = window.confirm("Are you sure?");
    remove && setTodos(prevState => prevState.filter(todo => todo.id !== id));
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <TodoForm
          onAdd={handleAdd}
        />
        <TodoList
          todos={todos}
          onToggle={handleToggle}
          onDelete={handleDelete}
          />
      </div>
    </>
  );
}

export default App;
