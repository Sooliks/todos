import React from 'react';
import {TodoType} from "../types/todo";
import Button from "./ui/Button";

type AddTodoProps = {
    onAdd: (newTodo: TodoType) => void
}
const AddTodo: React.FC<AddTodoProps> = ({onAdd}) => {
    const handleSubmit = (values: any) => {
      
    }
    return (
        <form>
            <Button/>
        </form>
    );
};

export default AddTodo;