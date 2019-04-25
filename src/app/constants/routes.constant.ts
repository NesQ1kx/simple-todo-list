import { Routes } from '@angular/router';
import { MainPageComponent } from '../pages/main-page/main-page.component';
import { AddTodoComponent } from '../pages/add-todo/add-todo.component';
import { EditTodoComponent } from '../pages/edit-todo/edit-todo.component';

export const routes: Routes = [
  {
    path: 'main',
    component: MainPageComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {
    path: 'add-todo',
    component: AddTodoComponent,
    pathMatch: 'full'
  },
  {
    path: 'edit-todo/:id',
    component: EditTodoComponent,
    pathMatch: 'full'
  }
];
