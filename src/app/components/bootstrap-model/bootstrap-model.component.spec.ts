import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapModelComponent } from './bootstrap-model.component';

describe('BootstrapModelComponent', () => {
  let component: BootstrapModelComponent;
  let fixture: ComponentFixture<BootstrapModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
