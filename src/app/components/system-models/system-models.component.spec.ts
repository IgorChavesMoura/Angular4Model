import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemModelsComponent } from './system-models.component';

describe('SystemModelsComponent', () => {
  let component: SystemModelsComponent;
  let fixture: ComponentFixture<SystemModelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemModelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
