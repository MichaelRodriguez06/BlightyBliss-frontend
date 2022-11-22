import { TestBed } from '@angular/core/testing';

import { GetTypesDocuments } from './get-types-documents.service';

describe('UpdateDocumentService', () => {
  let service: GetTypesDocuments;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTypesDocuments);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
