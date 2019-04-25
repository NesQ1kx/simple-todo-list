import { Action } from '@ngrx/store';
import { Todo } from '../models/todo.model';

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const EDIT_TODO = 'EDIT_TODO';

export class AddTodo implements Action {
  readonly type = ADD_TODO;

  constructor(public payload: Todo) {}
}

export class RemoveTodo implements Action {
  readonly type = REMOVE_TODO;

  constructor(public payload: number) {}
}

export class EditTodo implements Action {
  readonly type = EDIT_TODO;

  constructor(public payload: Todo) {}
}
