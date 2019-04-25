import { ADD_TODO, AddTodo, EDIT_TODO, REMOVE_TODO } from './todo.actions';
import { Todo } from '../models/todo.model';
import { Action } from '@ngrx/store';
import { TODOS_MOCK } from '../mocks/todos.mock';

const initialState = {
  todos: TODOS_MOCK
};

export function todoReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((item: Todo) => item.id !== action.payload)
      };
    case EDIT_TODO:
      const updatedItems = state.todos.map((item: Todo) => {
        if (item.id === action.payload.id) {
          return {...item, ...action.payload};
        }
        return item;
      });
      return {
        ...state,
        todos: updatedItems
      };
    default:
      return state;
  }
}
