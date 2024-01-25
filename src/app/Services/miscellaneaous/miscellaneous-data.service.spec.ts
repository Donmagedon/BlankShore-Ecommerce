import { TestBed } from '@angular/core/testing';

import { MiscellaneousDataService } from './miscellaneous-data.service';

describe('MiscellaneousDataService', () => {
  let service: MiscellaneousDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiscellaneousDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
