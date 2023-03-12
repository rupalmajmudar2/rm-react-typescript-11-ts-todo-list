import { Todo, Action, ActionTypes } from '../actions'

//State is an array of Todos. If not provide, use an empty array
export const todosReducer = (
    state: Todo[] = [],
    action: Action
) => { 
    switch (action.type) {
        case ActionTypes.fetchTodos:
            return action.payload;
        case ActionTypes.deleteTodo:
            return state.filter((todo: Todo) =>
                todo.id !== action.payload);
        default:
            return state;
    }
};