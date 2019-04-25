import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Todos } from '../../models/todo.model';
import { AppState } from '../../store/app.state';
import { Observable } from 'rxjs/index';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public todos$: Observable<Todos>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.todos$ = this.store.select('todo');
  }

}
