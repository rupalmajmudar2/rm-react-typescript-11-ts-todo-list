import { FetchTodosAction, DeleteTodoAction } from "./todos";
export enum ActionTypes {
    fetchTodos, //=0 by default. Suffices for redux that it is unque
    deleteTodo,
}

export type Action = FetchTodosAction | DeleteTodoAction;