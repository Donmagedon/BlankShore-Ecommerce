import { TestBed } from '@angular/core/testing';

import { LoadUserInfoService } from './load-user-info.service';

describe('LoadUserInfoService', () => {
  let service: LoadUserInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadUserInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
