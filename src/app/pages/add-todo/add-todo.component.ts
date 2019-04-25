import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AppState } from '../../store/app.state';
import { AddTodo } from '../../store/todo.actions';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  public todoForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private store: Store<AppState>,
              private router: Router) { }

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      title: new FormControl('', [Validators.required, Validators.minLength(5)]),
      description: new FormControl('', [Validators.required, Validators.minLength(10)])
    });
  }

  public addTodo(): void {
    const todo = new Todo(
      Math.floor(Math.random() * (1000 - 1)) + 1,
      this.todoForm.controls.title.value,
      this.todoForm.controls.description.value,
    );
    this.store.dispatch(new AddTodo(todo));
    this.todoForm.reset();
    this.router.navigateByUrl('/main');
  }
}
