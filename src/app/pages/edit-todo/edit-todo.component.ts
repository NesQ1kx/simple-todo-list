import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AppState } from '../../store/app.state';
import { Todo } from '../../models/todo.model';
import { EditTodo } from '../../store/todo.actions';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {
  public todoForm: FormGroup;
  public todo: Todo;
  private id: number;

  constructor(private formBuilder: FormBuilder,
              private store: Store<AppState>,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = Number.parseInt(this.route.snapshot.params[`id`], 10);
    this.store.select('todo').subscribe(({todos}) => {
      this.todo = todos.find(item => item.id === this.id);
      this.buildForm();
    });
  }

  private buildForm(): void {
    this.todoForm = this.formBuilder.group({
      id: new FormControl(this.todo.id),
      title: new FormControl(this.todo.title, [Validators.required, Validators.minLength(5)]),
      description: new FormControl(this.todo.description, [Validators.required, Validators.minLength(10)])
    });
  }

  public submitTodo(): void {
    const todo = new Todo(
      this.todoForm.controls.id.value,
      this.todoForm.controls.title.value,
      this.todoForm.controls.description.value,
    );

    this.store.dispatch(new EditTodo(todo));
    this.router.navigateByUrl('/main');
  }

}
