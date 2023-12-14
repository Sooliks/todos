export type TodoType = {
    id: number
    action: string
    status: StatusTodo
}
export enum StatusTodo{
    Completed,
    InProgress,
    NotStarted
}

