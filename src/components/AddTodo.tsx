import React, {useState} from 'react';
import {StatusTodo, TodoType} from "../types/todo";
import Button from "./ui/Button";
import Input from "./ui/Input";
import {notification} from "antd";

type AddTodoProps = {
    onAdd: (newTodo: TodoType) => void
}
interface CustomElements extends HTMLFormControlsCollection   {
    action: HTMLInputElement;
}
interface CustomForm extends HTMLFormElement {
    readonly elements: CustomElements;
}
const AddTodo: React.FC<AddTodoProps> = ({onAdd}) => {
    const [inputValue,setInputValue] = useState<string>("")
    const handleSubmit = (e: React.FormEvent<CustomForm>) => {
        e.preventDefault()
        const target = e.currentTarget.elements;
        if(!target.action.value){
            notification.error({
                message: "Уведомление",
                description: "Заполните поле!",
                placement: "topRight"
            })
            return
        }
        onAdd({
            action: target.action.value,
            status: StatusTodo.NotStarted,
        })
        setInputValue("")
    }
    return (
        <form onSubmit={handleSubmit} className={"w-full flex flex-row mt-4 relative"}>
            <Input onChange={(newValue)=>setInputValue(newValue)} value={inputValue} name={"action"} placeholder={"Задание"}/>
            <Button typeHtml={"submit"} type={"outlined"} className={"absolute inset-y-0 right-0"}>Добавить</Button>
        </form>
    );
};

export default AddTodo;