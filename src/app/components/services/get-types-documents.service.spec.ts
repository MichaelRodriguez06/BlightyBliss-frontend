import { TestBed } from '@angular/core/testing';

import { TypeFiles } from './get-types-documents.service';

describe('UpdateDocumentService', () => {
  let service: TypeFiles;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeFiles);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
