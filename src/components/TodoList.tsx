import React, {useEffect, useState} from 'react';
import {TodoType} from "../types/todo";
import AddTodo from "./AddTodo";

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<TodoType[]>(() => {
        const savedTodos = localStorage.getItem("todos");
        if (savedTodos) return JSON.parse(savedTodos);
        return [];
    });
    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos))
    },[todos])
    const handleAddTodo = (newTodo: TodoType) => {

    }
    return (
        <div className={"w-full h-full overflow-auto"}>
            <AddTodo onAdd={handleAddTodo}/>
        </div>
    );
};

export default TodoList;