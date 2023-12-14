import React, {useEffect, useState} from 'react';
import {TodoType} from "../types/todo";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import {notification} from "antd";

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
        if(todos.length > 9){
            notification.error({
                message: "Уведомление",
                description: "Вы не можете добавить больше 10-ти todo!",
                placement: "topRight"
            })
            return
        }
        setTodos([newTodo, ...todos])
    }
    const handleDeleteTodo = (todo: TodoType) => {
        setTodos(prev=>prev.filter(t=>t!==todo))
    }
    const handleEditTodo = (todo: TodoType, newAction: string, index: number) => {
        setTodos(prev=>{
            const newTodo = todo;
            newTodo.action = newAction;
            prev[index] = newTodo;
            localStorage.setItem('todos', JSON.stringify(prev))
            return prev;
        });
    }
    return (
        <div className={"w-full h-full"}>
            <AddTodo onAdd={handleAddTodo}/>
            <div className={"flex flex-col w-full h-full"}>
                {todos.length > 0 ?
                    todos.map((todo, index)=>
                        <Todo key={index} todo={todo} index={index} onDelete={handleDeleteTodo} onEdit={handleEditTodo}/>
                    )
                    :
                    <p className={"text-center text-2xl mt-72"}>Добавьте новый todo</p>
                }
            </div>
        </div>
    );
};

export default TodoList;