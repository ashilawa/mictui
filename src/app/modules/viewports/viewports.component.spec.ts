import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewportsComponent } from './viewports.component';

describe('ViewportsComponent', () => {
  let component: ViewportsComponent;
  let fixture: ComponentFixture<ViewportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
