export type TodoType = {
    action: string
    status: StatusTodo
}
export enum StatusTodo{
    Completed,
    InProgress,
    NotStarted
}

