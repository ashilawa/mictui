import { TestBed, inject } from '@angular/core/testing';

import { PatientScheduleService } from './patient-schedule.service';

describe('PatientScheduleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatientScheduleService]
    });
  });

  it('should be created', inject([PatientScheduleService], (service: PatientScheduleService) => {
    expect(service).toBeTruthy();
  }));
});
