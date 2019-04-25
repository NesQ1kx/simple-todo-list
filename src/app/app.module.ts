import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AppRoutingModule } from './app-routing.module';
import { TodoShortComponent } from './components/todo-short/todo-short.component';
import { AddTodoComponent } from './pages/add-todo/add-todo.component';
import { todoReducer } from './store/todo.reducer';
import { EditTodoComponent } from './pages/edit-todo/edit-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    TodoShortComponent,
    AddTodoComponent,
    EditTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({todo: todoReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
