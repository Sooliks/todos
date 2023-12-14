import React, {useEffect, useState} from 'react';
import {TodoType} from "../types/todo";
import {Button, Input} from "antd";
import {CloseOutlined, EditOutlined, SaveOutlined} from "@ant-design/icons";


type TodoProps = {
    todo: TodoType
    index: number
    onDelete: (todo: TodoType) => void
    onEdit: (todo: TodoType, newAction: string) => void
}
const Todo: React.FC<TodoProps> = ({todo, index, onDelete, onEdit}) => {
    const [isEditing,setIsEditing] = useState<boolean>(false)
    const [newAction,setNewAction] = useState<string>("");
    const handleSave = () => {
        onEdit(todo, newAction)
    }
    return (
        <div
            className={"w-full min-h-2 text-gray-900 flex border-2 h-12 mt-4 items-center relative"}
            style={{
                border: '1px solid #e5e7eb'
            }}
        >
            <span className={"ml-2 rounded-full py-1 px-1 text-xs font-medium content-[''] leading-none grid place-items-center bg-red-500 text-white w-[24px] h-[24px]"}>
                {index + 1}
            </span>
            {isEditing ?
                <div className={"ml-2 flex"}>
                    <Input defaultValue={todo.action} onChange={(e)=>setNewAction(e.target.value)}/>
                    <Button className={"ml-1"} icon={<SaveOutlined />} onClick={handleSave}/>
                </div>
                :
                <p className={"ml-2"}>
                    {todo.action}
                </p>
            }
            <div className={"absolute inset-y-0 right-0 flex items-center mx-2"}>
                <Button icon={<EditOutlined />} className={"mr-2"} onClick={()=>setIsEditing(!isEditing)}/>
                <Button icon={<CloseOutlined />} onClick={()=>onDelete(todo)}/>
            </div>
        </div>
    );
};

export default Todo;