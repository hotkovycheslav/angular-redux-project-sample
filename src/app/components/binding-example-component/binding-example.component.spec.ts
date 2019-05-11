import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingExampleComponent } from './binding-example.component';

describe('TestComponent', () => {
  let component: BindingExampleComponent;
  let fixture: ComponentFixture<BindingExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
