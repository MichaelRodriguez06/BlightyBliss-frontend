import { TestBed } from '@angular/core/testing';

import { GetPendingFilesService } from './get-pending-files.service';

describe('GetPendingFilesService', () => {
  let service: GetPendingFilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPendingFilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
