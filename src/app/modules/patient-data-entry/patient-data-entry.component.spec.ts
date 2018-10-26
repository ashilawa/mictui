import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDataEntryComponent } from './patient-data-entry.component';

describe('PatientDataEntryComponent', () => {
  let component: PatientDataEntryComponent;
  let fixture: ComponentFixture<PatientDataEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientDataEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDataEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
