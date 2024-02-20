import React, { useEffect, useState } from "react";
import TodoForm from "../TodoForm";
import TodoList from "../TodoList";
import { NewTodoType } from "../interfaces";

const TasksPage: React.FC = () => {

    const [todos, setTodos] = useState<NewTodoType[]>([]); // или моюжно использовать <Array<NewTodoType>>

    useEffect(() => {
        const state = JSON.parse(localStorage.getItem("todos") || "[]") as NewTodoType[];
        setTodos(state);
      }, []);
    
      useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
      }, [todos]);

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
            <TodoForm
                onAdd={handleAdd}
            />
            <TodoList
                todos={todos}
                onToggle={handleToggle}
                onDelete={handleDelete}
            />
        </>
    );
};

export default TasksPage;
