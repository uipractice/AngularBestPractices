import { TestBed } from '@angular/core/testing';

import { FilesreadService } from './filesread.service';

describe('FilesreadService', () => {
  let service: FilesreadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilesreadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
