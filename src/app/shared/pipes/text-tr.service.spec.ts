import { TestBed } from '@angular/core/testing';

import { TextTrService } from './text-tr.service';

describe('TextTrService', () => {
  let service: TextTrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextTrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
