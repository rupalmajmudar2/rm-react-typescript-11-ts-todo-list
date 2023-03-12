import { combineReducers } from "redux";
import { todosReducer } from './todos'
import { Todo } from '../actions';

//Entire state of our Redux store!
export interface StoreState {
    todos: Todo[]
}

export const reducers = combineReducers<StoreState>({
    todos: todosReducer,
});