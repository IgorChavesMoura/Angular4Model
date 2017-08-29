import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDraggableComponent } from './list-draggable.component';

describe('ListDraggableComponent', () => {
  let component: ListDraggableComponent;
  let fixture: ComponentFixture<ListDraggableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDraggableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDraggableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
