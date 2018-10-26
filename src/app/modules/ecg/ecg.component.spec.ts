import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ECGComponent } from './ecg.component';

describe('ECGComponent', () => {
  let component: ECGComponent;
  let fixture: ComponentFixture<ECGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ECGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ECGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
