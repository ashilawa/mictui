import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContrastMgmtComponent } from './contrast-mgmt.component';

describe('ContrastMgmtComponent', () => {
  let component: ContrastMgmtComponent;
  let fixture: ComponentFixture<ContrastMgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContrastMgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContrastMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
