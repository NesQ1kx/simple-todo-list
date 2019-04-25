import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Todo } from '../../models/todo.model';
import { AppState } from '../../store/app.state';
import { RemoveTodo } from '../../store/todo.actions';

@Component({
  selector: 'app-todo-short',
  templateUrl: './todo-short.component.html',
  styleUrls: ['./todo-short.component.scss']
})
export class TodoShortComponent implements OnInit {
  @Input() todo: Todo;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  public removeTodo(): void {
    this.store.dispatch(new RemoveTodo(this.todo.id));
  }
}
