import React from "react";
import { NewTodoType } from "./interfaces";

interface TodoListType {
    todos: NewTodoType[];
    onToggle(id: number): void; // или onToggle: (id: number) => void;
    onDelete(id: number): void; // или onDelete: (id: number) => void;
};

const TodoList: React.FC<TodoListType> = ({ todos, onToggle, onDelete }) => {
    const changeClassNames = (data: NewTodoType): string => {
        return data.completed ? "todo completed" : "todo";
    };
    
    const handleRemove = (event: React.MouseEvent, id: number) => {
        event.preventDefault();
        onDelete(id);
    };

    if (todos.length === 0) return (
        <p className="center">No tasks to do</p>
    )
    return (
        <ul>
            {todos.map(todo => (
                <li className={changeClassNames(todo)} key={todo.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => onToggle(todo.id)}
                        />
                        <span>{todo.title}</span>
                        <i
                            className="material-icons red-text"
                            onClick={(event) => handleRemove(event, todo.id)}
                        >delete</i>
                    </label>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
