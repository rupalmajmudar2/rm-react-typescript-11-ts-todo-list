import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export interface FetchTodosAction {
    type: ActionTypes.fetchTodos;
    payload: Todo[];
}

export interface DeleteTodoAction {
    type: ActionTypes.deleteTodo;
    payload: number; //id
}

const url = 'http://jsonplaceholder.typicode.com/todos';
//Key, hardest piece of getting react-redux to work with TS!

export const fetchTodos = () => {
    return async (dispatch: Dispatch) => { //the dispatch fn from reduc.
        //dispatch is a fn being returned. Need to find the type-signature for dispatch
        //via import redux and then cmd-click to explore the typeref for dispatch
        const response = await axios.get<Todo[]>(url);

        //The generic type is optional. But recommended!
        dispatch<FetchTodosAction>({
            type: ActionTypes.fetchTodos,
            payload: response.data
        })
    };
}

//ActionCreator
export const deleteTodo = (id: number): DeleteTodoAction => {
    return {
        type: ActionTypes.deleteTodo,
        payload: id
    };
}