import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicElComponent } from './dynamic-el.component';

describe('DynamicElComponent', () => {
  let component: DynamicElComponent;
  let fixture: ComponentFixture<DynamicElComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicElComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicElComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
