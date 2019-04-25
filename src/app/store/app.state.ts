import { Todo } from '../models/todo.model';

export interface AppState {
  todo: {
    todos: Todo[]
  };
}
