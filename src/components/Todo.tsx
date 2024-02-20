import React from "react";

const Todo: React.FC = () => {
    return (
        <li className="todo">
            <label>
                <input type="checkbox" />
                <span></span>
                <i className="material-icons red-text">delete</i>
            </label>
        </li>
    );
}
 
export default Todo;