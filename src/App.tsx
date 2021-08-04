import React, {useState} from "react";

import ToDoList from "./components/ToDoList";
import NewTodo from "./components/NewToDo";
import {Todo} from "./todo.model";

const App: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const todoAddHandler = (text: string) => {
        console.log(text);
        setTodos((prevTodos) => [
            ...prevTodos,
            {id: Math.random().toString(), text: text},
        ]);
    };

    const todoDeleteHandler = (todoId: string) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== todoId);
        });
    };

    return (
        <div className="App">
            <NewTodo onAddTodo={todoAddHandler} />
            <ToDoList items={todos} onDeleteTodo={todoDeleteHandler} />
        </div>
    );
};

export default App;
