import React, {useEffect, useState} from 'react';
import {TodoType} from "../types/todo";
import AddTodo from "./AddTodo";
import Todo from "./Todo";

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
        setTodos([newTodo, ...todos])
    }
    const handleDeleteTodo = (todo: TodoType) => {

    }
    const handleEditTodo = (todo: TodoType, newAction: string) => {

    }
    return (
        <div className={"w-full h-full"}>
            <AddTodo onAdd={handleAddTodo}/>
            <div className={"w-full overflow-auto"}>
                {todos.length > 0 ?
                    todos.map((todo, index)=>
                        <Todo key={index} todo={todo} index={index} onDelete={handleDeleteTodo} onEdit={handleEditTodo}/>
                    )
                    :
                    <p>Добавьте новый todo</p>
                }
            </div>
        </div>
    );
};

export default TodoList;