import { TestBed } from '@angular/core/testing';

import { DisabilitiesService } from './disabilities.service';

describe('DisabilitiesService', () => {
  let service: DisabilitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisabilitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
