import { TestBed, inject } from '@angular/core/testing';

import { ClipperService } from './clipper.service';

describe('ClipperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClipperService]
    });
  });

  it('should be created', inject([ClipperService], (service: ClipperService) => {
    expect(service).toBeTruthy();
  }));
});
