import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoShortComponent } from './todo-short.component';

describe('TodoShortComponent', () => {
  let component: TodoShortComponent;
  let fixture: ComponentFixture<TodoShortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoShortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
