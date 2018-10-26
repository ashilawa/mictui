import { TestBed, inject } from '@angular/core/testing';

import { ECGService } from './ecg.service';

describe('ECGService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ECGService]
    });
  });

  it('should be created', inject([ECGService], (service: ECGService) => {
    expect(service).toBeTruthy();
  }));
});
