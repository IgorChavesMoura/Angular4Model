import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityGenComponent } from './entity-gen.component';

describe('EntityGenComponent', () => {
  let component: EntityGenComponent;
  let fixture: ComponentFixture<EntityGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
