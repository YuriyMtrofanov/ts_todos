import React, { useRef } from "react";

interface TodosType {
    onAdd(data: string): void;
}

const TodoForm: React.FC<TodosType> = ({ onAdd }) => {

    const ref = useRef<HTMLInputElement>(null);
    const handleKeyPress = (event: React.KeyboardEvent) => {
        event.key === "Enter" && console.log(ref.current!.value);
        if (event.key === "Enter"){
            onAdd(ref.current!.value);
            ref.current!.value = "";
        }
    };

    return (
        <div className="mt2">
            <div className="input-field">
                <input
                    id="todo-input"
                    type="text"
                    placeholder="Buy some food"
                    onKeyDown={handleKeyPress}
                    ref={ref}
                    // value={task}
                    // onChange={handleChange}
                    />
                <label htmlFor="todo-input" className="active">Task name</label>
            </div>
        </div>
    );
};

export default TodoForm;
